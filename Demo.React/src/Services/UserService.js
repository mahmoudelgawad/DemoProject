import axios from 'axios';
import * as BaseService from '../Services/BaseService';

const URL ="/api/users";
const API_URL = BaseService.ROOT_URL + URL;

export function getUsers(config,callback){
    axios.get(API_URL,config)
    .then(Response => {
        callback(Response.data);
    })
    .catch(error => {
        BaseService.dispatchError(error);
    });
}