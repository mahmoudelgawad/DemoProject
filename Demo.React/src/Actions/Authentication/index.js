
import * as ActionTypes from '../types';
import * as AuthService from '../../Services/AuthService';

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

        AuthService.postToken(email,password, (data) => {
            localStorage.setItem(TOKEN_KEY_NAME,JSON.stringify(data));
            dispatch({
                type: ActionTypes.IS_AUTH,
                payload: true
            });
        });

        // if (isOK) {
        // }
        // else {
        //     dispatch({
        //         type: ActionTypes.AUTH_ERROR,
        //         payload: "Wrong Username Or Passowre !!"
        //     });
        // }

    }
}

export function externalLogin(userData) {

    return function (dispatch) {
        if (!userData.ExternalAccessToken) {
            return;
        }
        if (userData.HasLocalAccount.toLowerCase() === "false") {
            authenticate(false); //logout
            //external register
            AuthService.postExternalRegister({
                ExternalAccessToken: userData.ExternalAccessToken,
                Provider: userData.Provider,
                UserName: userData.UserName
            }, (data) => {
                if (!data.access_token) {
                    return;
                }
                localStorage.setItem(TOKEN_KEY_NAME, JSON.stringify(data));
                dispatch({
                    type: ActionTypes.IS_AUTH,
                    payload: true
                });
            });
        }
        else {
            // get local access token
            AuthService.getExternalToken({
                params: {
                    Provider: userData.Provider,
                    ExternalAccessToken: userData.ExternalAccessToken
                }
            }, (data) => {
                if (!data.access_token) {
                    return;
                }
                localStorage.setItem(TOKEN_KEY_NAME, JSON.stringify(data));
                dispatch({
                    type: ActionTypes.IS_AUTH,
                    payload: true
                });

            });
        }

    }

}

export function changeRedirectUrl(url = "") {
    return {
        type: ActionTypes.REDIRECT_URL,
        payload: url
    }
}