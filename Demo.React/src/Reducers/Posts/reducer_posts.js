import { FETCH_POSTS } from '../../Actions/Posts/index';
import { FETCH_POST } from '../../Actions/Posts/index';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        case FETCH_POST:
            return { ...state, post: action.payload.data }
        default:
            return state;
    }
}
