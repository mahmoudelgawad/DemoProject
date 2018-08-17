import { REDIRECT_URL } from '../../Actions/types';

const INITIAL_STATE = "";

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REDIRECT_URL:
            return action.payload
    }
    return state;
}
