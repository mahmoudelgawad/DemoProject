
import * as CourseActions from './actions';
import { ICourseState } from './state';
//import { InitialState } from '@ngrx/store/src/models';


export type Action = CourseActions.All;

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}
export function courseReducer(state: ICourseState, action: Action):ICourseState {
    switch (action.type) {
        case CourseActions.ADD_COURSE:
            return newState(state, { courses: action.payload });
        case CourseActions.FILTER_COURSES:
            return newState(state, { filteredCourses: action.payload });
        default:
            return state;
    }
}