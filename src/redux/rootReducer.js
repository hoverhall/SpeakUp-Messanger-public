import { GET_FROM_BASE, ADD_TO_BASE, DELETE_FROM_BASE, CREATE_NEW_USER, LOG_OUT, GET_USER_INFO } from './actionTypes'
import firebase from "firebase/app";

const initialState = {
    db_snapshot: {
        // id: document.cookie == "" ? "" : document.cookie.split("=")[1],
        fname: "SpeakUp", // str
        lname: "", // str
        contacts: [],
        position: { // obj
            country: "", // str
            city: "", // str
            geopoint: new firebase.firestore.GeoPoint(30, 20)
        },
        phone: "",
        img: "https://pbs.twimg.com/profile_images/870296130852184064/S2TbyCHI.jpg"
    },
    db_user_snapshot: {}
}

export default function rootReducer( state=initialState, action ) {
    switch (action.type) {
        case GET_FROM_BASE:
            return {
                db_snapshot: action.payload
            }
        case ADD_TO_BASE:
            return {
                db_snapshot: action.payload
            };
        case DELETE_FROM_BASE:
            return state;
        case CREATE_NEW_USER:
            return state;
        case LOG_OUT:
            return {
                db_snapshot: initialState.db_snapshot
            }
        case GET_USER_INFO:
            return {
                db_snapshot: state.db_snapshot,
                db_user_snapshot: action.payload
            }
        default:
            return state
    }
}