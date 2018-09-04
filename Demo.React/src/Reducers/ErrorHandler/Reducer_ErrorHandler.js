import * as ActionTypes from '../../Actions/types';
export default function (state = null, action) {
    switch (action.type) {
        case ActionTypes.ERROR_MESSAGE:
            return action.payload;
    }
    return state;
}