import {Course} from '../courses/course';
import {IAppState} from './IAppState';

const initialState: IAppState = {
courses:[
    {
        "id":1,
        "name":"mahmoud course",
        "topic":"Angular 5"
    },
    {
        "id":2,
        "name":"karim course",
        "topic":"JQuery"
    },
    {
        "id":3,
        "name":"Jilan course",
        "topic":"HTML"
    }
]
};

export function reducer(state= initialState,action){
    return state;
}