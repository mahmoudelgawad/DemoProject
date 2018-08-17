import * as ActionTypes from '../../Actions/types';

const STATE_INIT = {
    isAuth: false,
    authErrorMessage: null,
};
export default function (state = STATE_INIT, action) {
    switch (action.type) {
        case ActionTypes.IS_AUTH:
            return { ...state, authErrorMessage: null, isAuth: action.payload };
        case ActionTypes.AUTH_ERROR:
            return { ...state, authErrorMessage: action.payload };
    }
    return state;
}