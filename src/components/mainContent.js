// modules and libs
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo, getFromBase } from '../redux/actionCreators'
// components
// ...


class MainContent extends Component {
    componentDidCatch (err, info) {
        
    }


    componentDidMount() {
        // this.props.onGetFromBase(document.cookie.split("=")[1])
    }

    componentDidUpdate() {
        // console.log("DID_UPDATE", this.props)
        // this.props.onGetUserInfo(this.props.db_snapshot.contacts, this.props.db_snapshot.contacts.length)
    }

    render() {
        function isEmpty() {
            if (document.querySelector("#user-id").value !== "") {
                if (document.querySelector("#user-name").value !== "") {
                    document.querySelector("#next").style.visibility = "visible"
                }
            }
        }

        
        return (
            <div className="main-content">
                <Route path="/list" exact render={() => (
                    <div className="main-container">
                        {console.log(this.props.db_user_snapshot)}
                        {
                            this.props.db_user_snapshot.map((item, index) => (
                                    <Link className="co-user" to={`/${item.id}`} key={index} className="co-user">
                                        {console.log(item)}
                                        <img
                                            className="logoImg"
                                            src={item.data.img}
                                            alt={item.data.fname}
                                        />
                                        <span>{`${
                                            item.data.fname
                                        } ${item.data.lname}`}</span>
                                    </Link>
                            ))
                        }
                    </div>
                    
                )} />
                <Route path="/regi" render={() => (
                    <>
                        <input onInput={isEmpty} className="input" id="user-id" type="text" placeholder="Введите желаемый id"/>
                        <input onInput={isEmpty} className="input" id="user-name" type="text" placeholder="Введите свое имя"/>
                        <input className="input" type="text" placeholder="Введите свою фамилию"/>

                    </>
                )} />
                <Route path="/logi" render={() => (
                    <>
                        {document.cookie == 'current_id='
                            ? 
                            <>
                                <input onInput={isEmpty} className="input" id="user-id" type="text" placeholder="Введите желаемый id"/>
                                <input onInput={isEmpty} className="input" id="user-name" type="text" placeholder="Введите свое имя"/>
                            </>
                            :
                            <>
                                <Link to="/list"><button className="go-btn btn">Go</button></Link>
                            </>
                        }
                    </>
                )} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        db_snapshot: state.db_snapshot,
        db_user_snapshot: state.db_user_snapshot,
    }

}

function mapDispatchToProps(dispatch) {
    return {
      onGetUserInfo: (obj1, obj2) => dispatch(getUserInfo(obj1, obj2)),
      onGetFromBase: (obj) => dispatch(getFromBase(obj)),
    }
  }

export default connect(mapStateToProps)(MainContent)