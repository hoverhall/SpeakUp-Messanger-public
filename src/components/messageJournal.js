// modules and libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { getFromBase } from '../redux/actionCreators'

// components
// import ButtonGetBack from 'buttonGetBack';
// import ButtonShowMore from 'buttonShowMore';

/*
need to make an inline condition to get an info about current interface
to get know which button shoud component uses
template: >>> condition<true/false> ? <ButtonGetBack> : <ButtonShowMore>;
*/

class MessageJournal extends Component {
    componentDidCatch (err, info) {
        // this.props.onGetFromBase(document.cookie.split("=")[1])
    }

    componentDidMount() {
        // this.props.onGetFromBase(document.cookie.split("=")[1])
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div className="message-journal">
                <Route path="/" exact render={() => (
                    <>
                        <Link to="/logi"><button className="back-btn">SIGN IN</button></Link>
                        <Link to="/regi"><button className="back-btn">SIGN UP</button></Link>
                    </>
                )} />
                <Route path="/regi" render={() => (
                    <>
                        <Link to="/list"><button id="next" className="btn">NEXT</button></Link>
                    </>
                )} />
                <Route path="/logi" render={() => (
                    <>
                        <Link to="/list"><button id="next" className="btn">NEXT</button></Link>
                    </>
                )} />
                <Route path="/list" render={() => (
                    <Link to="/find"><button className="find-btn">FIND</button></Link>                    
                )} />
                {this.props.db_snapshot.contacts.map((item, index) => (
                    <Route key={index} path={`/${item.id}`} render={() => (
                        <Link to="/list"><button className="back-btn">BACK</button></Link>
                    )} />
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        db_snapshot: state.db_snapshot,
    }

}

function mapDispatchToProps(dispatch) {
    return {
        onGetFromBase: (obj) => dispatch(getFromBase(obj)),        
    }
}

export default connect(mapStateToProps)(MessageJournal)