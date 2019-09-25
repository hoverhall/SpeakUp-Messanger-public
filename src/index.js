import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './redux/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
 
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById("root"));