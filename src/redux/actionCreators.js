import { GET_FROM_BASE, ADD_TO_BASE, DELETE_FROM_BASE, CREATE_NEW_USER, LOG_OUT, GET_USER_INFO } from './actionTypes';
import { speakUpBase } from '../firebase-connect';
const db = speakUpBase.firestore();

export function getFromBase() {
    return (dispatch) => {
        db.collection('sessions').get().then(snapshot => {
            snapshot.forEach(docRef => {
                if (docRef.id === document.cookie.split("=")[1]) {
                    dispatch({
                        type: GET_FROM_BASE,
                        payload: docRef.data()
                    });
                }
            })
        })
    }
}

export function addToBase(data) {
    db.collection("sessions")
        .doc(document.cookie.split("=")[1])
        .update(data)

    return {
        type: ADD_TO_BASE,
        payload: data
    }
}

export function createNewUser(data) {
    function setCookie(c_name,value,exdays) {
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
    }
    document.cookie.split("=")[1] == "" && db.collection("sessions").add(data).then(docRef => {
        setCookie("current_id", docRef.id, null);
    })
    return {
        type: CREATE_NEW_USER,
    }
}

export function logOut(data) {
    document.cookie = "current_id="
    createNewUser(data);
    return {
        type: LOG_OUT
    }
}

export function deleteFromBase(data) {
    return {
        type: DELETE_FROM_BASE, data
    }
}

export function getUserInfo(users, length) {
    let arr = [], i = 0;
        return (dispatch) => {
            db.collection('sessions').get().then(snapshot => {
                snapshot.forEach((docRef) => {
                    if (users[i] !== undefined && users[i].id === docRef.id) {
                        arr.push({id: docRef.id, data: docRef.data()})
                        if (i != -1) {
                            if (arr.length == length) {
                                i = -1
                                dispatch({
                                    type: GET_USER_INFO,
                                    payload: arr
                                });
                            }
                            
                        }
                    }
                    i != -1 && i++;
                })
            })
        }
    
}