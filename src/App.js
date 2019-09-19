// modules and libs
import React, {Component} from 'react';

// components
import TopBar from './components/messageJournal';
import MainContent from './components/mainContent';

// styles
import './stylesheets/App.css'

class App extends Component {
    render () {
        console.log("Hello")
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