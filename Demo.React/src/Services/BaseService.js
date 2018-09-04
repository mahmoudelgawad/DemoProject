import * as ActionTypes from '../Actions/types';

export default class BaseService {

    constructor(){
        this.ROOT_URL = "http://localhost:6619";
        this.SSL_ROOT_URL = "https://localhost:44306";
    }


    dispatchError(error) {
        return function (dispatch) {
            dispatch({
                action: ActionTypes.ERROR_MESSAGE,
                payload: error.Response
            });
        }

    }
}

