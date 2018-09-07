import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter, Link } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from './Reducers/index';
import * as ActionTypes from './Actions/types';
import {TOKEN_KEY_NAME} from './Actions/Authentication/index'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise,reduxThunk)(createStore);
export const store = createStoreWithMiddleWare(reducers);
const token = localStorage.getItem(TOKEN_KEY_NAME);
if(token){
    store.dispatch({type:ActionTypes.IS_AUTH,payload:true});
}



ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>
        <div>
            <App />
        </div>
        </BrowserRouter>

    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
