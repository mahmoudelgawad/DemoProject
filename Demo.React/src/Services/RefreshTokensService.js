import axios from 'axios';
import * as BaseService from './BaseService';
import * as Routes from '../routes';
import { TOKEN_KEY_NAME } from '../Actions/Authentication/index';

const URL = "/api/refreshtoken";
const API_URL = BaseService.ROOT_URL + URL;


export function getRefreshTokens(config, callback) {
    let token = JSON.parse(localStorage.getItem(TOKEN_KEY_NAME));
    if(!token){
        BaseService.dispatchError('no token found in localstorage');
    }
    axios.get(`${API_URL}`, {
        headers:{'Authorization':`${token.token_type} ${token.access_token}`}
        })
        .then(Response => {
            callback(Response.data);
        })
        .catch(error => {
            BaseService.dispatchError(error);
        });
}