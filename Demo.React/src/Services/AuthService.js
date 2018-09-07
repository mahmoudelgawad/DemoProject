import axios from 'axios';
import * as BaseService from './BaseService';
import * as Routes from '../routes';

const OAUTH_REDIRECT_URL = BaseService.CURRENT_URL + Routes.EXTERNAL_SIGNIN_CALLBACK;
const CLIENT_ID = "DemoReact";
const URL = "/api/auth";
const API_URL = BaseService.ROOT_URL + URL;
const SSL_API_URL = BaseService.SSL_ROOT_URL + URL;

export function postExternalRegister(data, callback) {
    axios.post(`${API_URL}/register/external`, data)
        .then(Response => {
            callback(Response.data);
        })
        .catch(error => {
            BaseService.dispatchError(error);
        });
}

export function getExternalToken(config, callback) {
    axios.get(`${API_URL}/token/external`, config)
        .then(Response => {
            callback(Response.data);
        })
        .catch(error => {
            BaseService.dispatchError(error);
        });
}

export function serverExternalLoginURL(provider) {
    let rootUrl = (provider.toLocaleLowerCase() === "google") ? this.API_URL : this.SSL_API_URL;
    var externalProviderUrl = `${rootUrl}/login/external?provider=${provider}&response_type=token&client_id=${CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URL}`;
    return externalProviderUrl;
}
