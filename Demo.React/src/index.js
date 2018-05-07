import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter, Link } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise'
import reducers from './Reducers/index';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        {/* <App /> */}
        <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
        </div>
            
        </BrowserRouter>

    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
