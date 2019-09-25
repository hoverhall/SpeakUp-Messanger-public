// modules and libs
import React, {Component} from 'react';
import { connect } from 'react-redux';
// import admin from 'firebase-admin';

// components
import TopBar from './components/topBar';
import MainContent from './components/mainContent';

import { getFromBase, addToBase, deleteFromBase, createNewUser, logOut, getUserInfo } from './redux/actionCreators'

// styles
import './stylesheets/App.css'
class App extends Component {
    componentDidCatch(err, info) {
    }

    componentDidMount() {
        this.props.onGetFromBase(document.cookie.split("=")[1]);
        this.props.onCreateNewUser(this.props.db_snapshot);
    }

    componentDidUpdate() {
        this.props.onGetUserInfo(this.props.db_snapshot.contacts, this.props.db_snapshot.contacts.length)
    }

    updateStore(data) {
        this.props.onGetFromBase()
        if (this.props.db_snapshot !== undefined) {
            this.props.onAddToBase(data)
        }
    }

    logOut(data) {
        document.cookie = "current_id="
        this.props.onLogOut(data)
    }

    render () {
        return (
            <div className="App">
                <div className="content">
                    <header>
                        <TopBar />
                    </header>
                    <main>
                        <MainContent />
                    </main>
                    <footer>
                        {/* Didn't use but shoud be created */}
                    </footer>
                </div>
                <script src="https://console.firebase.google.com/project/speakup-messanger/overview"></script>
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
    onAddToBase: (obj) => dispatch(addToBase(obj)),
    onDeleteFromBase: () => dispatch(deleteFromBase()),
    onCreateNewUser: (obj) => dispatch(createNewUser(obj)),
    onLogOut: (obj) => dispatch(logOut(obj)),
    onGetUserInfo: (obj1, obj2) => dispatch(getUserInfo(obj1, obj2)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);