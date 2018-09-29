import { store } from '../index';
import * as ActionTypes from '../Actions/types';

export const CURRENT_PORT = (window.location.port) ? `:${window.location.port}` : ``;
export const CURRENT_URL = `${window.location.protocol}//${window.location.hostname}${CURRENT_PORT}`;
export const ROOT_URL = "http://localhost:6619";
export const SSL_ROOT_URL = "https://localhost:44306";

export function dispatchError(error) {
    console.log("BaseService", error);
    debugger
    store.dispatch({
        type: ActionTypes.ERROR_MESSAGE,
        payload: (error.response) ? error.response.data.message : "Network Error Request"
    });
}

