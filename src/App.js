// modules and libs
import React, {Component} from 'react';

// components
import TopBar from './components/messageJournal';
import MainContent from './components/mainContent'

const defaultMess = {
    message: {
        chat_id: "C00234888828",
        id: "1M2209939913",
        from: {
            user_id: {stamp: "U39992757177", identifier: "@:SpeakUp-team"},
            fname: "SpeakUp",
            lname: "Team",
            contact_info: {
                access: false,
                email: "speakup.team@speakup.com",
                tel: "+1 990 311-34-44",
                links_to_another_profiles: []
            }
        },
        to: {
            user_id: {stamp: "U33292757177", identifier: "@:Barashyk-shon"},
            fname: "Barashyk",
            lname: "Shon",
            contact_info: {
                access: false,
                email: "barashyk.shon@gmail.com",
                tel: "+1 990 233-43-43",
                links_to_another_profiles: []
            }
        },
        text: "Hello! Thank You that prefer us."
    }
}   

class App extends Component {
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
            </div>  
        )
    }
}

export default App;