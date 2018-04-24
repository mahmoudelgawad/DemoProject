import {FETCH_WEATHER} from '../../Actions/Weather/index';
export default function(state=[],action){
    // console.log('Reducer run with action', action);

    switch(action.type){
        case FETCH_WEATHER:
        return [action.payload.data,...state];
    }
    return state;
}