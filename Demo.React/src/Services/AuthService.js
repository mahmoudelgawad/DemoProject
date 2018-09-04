import axios from 'axios';
import BaseService from './BaseService';

const CURRENT_PORT = (window.location.port) ? `:${window.location.port}` : ``;
const CURRENT_URL = `${window.location.protocol}//${window.location.hostname}${CURRENT_PORT}`;
const OAUTH_REDIRECT_URL = CURRENT_URL + "/signin/external";
const CLIENT_ID = "DemoReact";

export default class AuthService extends BaseService {
    constructor(){
        super();
        this.URL = "/api/auth";
        this.API_URL = this.ROOT_URL + this.URL;
        this.SSL_API_URL = this.SSL_ROOT_URL + this.URL;
    }

     postExternalRegister(data, callback) {
        axios.post(`${this.API_URL}/register/external`, data)
            .then(Response => {
                console.log("external register response", Response);
                callback(Response.data);
            })
            .catch(error => {
                console.log("external register error", error);
                super.dispatchError(error);
            });
    }

     getExternalToken(config, callback) {
        axios.get(`${this.API_URL}/token/external`, config)
            .then(Response => {
                console.log("get token response", Response);
                callback(Response.data);
            })
            .catch(error => {
                console.log("get token error", error);
                super.dispatchError(error);
            });
    }

     serverExternalLoginURL(provider) {
        let rootUrl = (provider.toLocaleLowerCase() === "google") ? this.API_URL : this.SSL_API_URL;
        var externalProviderUrl = `${rootUrl}/login/external?provider=${provider}&response_type=token&client_id=${CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URL}`;
        return externalProviderUrl;
    }

}