import axios from 'axios';

import * as ActionTypes from '../types';
const ROOT_URL = "";
const EMAIL_VALUE = "mahmoud.elgawad@gmail.com";
const PASSWORD_VALUE = "123admin";
const TOKEN = "AXDFR221144554"; //simulate JWT token
export const TOKEN_KEY_NAME = "TOKEN"; // it case sensative

export function authenticate(isLoggedIn) {
    if (!isLoggedIn) {
        localStorage.removeItem(TOKEN_KEY_NAME);
    }
    return {
        type: ActionTypes.IS_AUTH,
        payload: isLoggedIn
    }
}

//using thunk middleware async action
export function signinUser({ email, password }) {
    let isOK = false;
    return function (dispatch) {
        // you can make asyncronous reqests
        // dispatch({type:...})

        //step 1 send email and password request to server
        // axios.post(`${ROOT_URL}`,{email,password})
        // .then(response =>{
        //     //do something
        // })
        // .catch(() =>{
        //     //do something
        // });
        //but I will make simple sinario here instead
        if (email === EMAIL_VALUE && password === PASSWORD_VALUE) {
            isOK = true;
        }

        if (isOK) {

            dispatch({
                type: ActionTypes.IS_AUTH,
                payload: isOK
            });
            localStorage.setItem(TOKEN_KEY_NAME, TOKEN);
            console.log("isOK= ", isOK);
            /*will change the url but no rerender
             so i will try use redux state instead */
            // history.push('/posts');
            // dispatch({
            //     type: ActionTypes.REDIRECT_URL,
            //     payload: "/posts"
            // });
        }
        else {
            dispatch({
                type: ActionTypes.AUTH_ERROR,
                payload: "Wrong Username Or Passowre !!"
            });
        }
        
        //step 2 if ok send user to feature

        //step3 if not ok show bad request
    }
}

export function changeRedirectUrl(url = "") {
    return {
        type: ActionTypes.REDIRECT_URL,
        payload: url
    }
}