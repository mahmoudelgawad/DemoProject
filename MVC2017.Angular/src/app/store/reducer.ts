
import { Course } from '../courses/course';
import * as CourseActions from './actions';
import { IAppState } from './IAppState';
import { CourseService } from '../courses/course.service';
import { InitialState } from '@ngrx/store/src/models';


export type Action = CourseActions.All;

const initialState: IAppState = {
    courses: (new CourseService()).getCourses(),
    filteredCourses: (new CourseService()).getCourses(),
};

function addCourse(course: Course): Course[] {
    return (new CourseService()).addCourse(course);
}
function filterCourses(filterText: string): Course[] {
    return (new CourseService()).getFilteredCourses(filterText);
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}
export function courseReducer(state: IAppState = initialState, action: Action) {
    switch (action.type) {
        case CourseActions.ADD_COURSE:
            return newState(state, { courses: addCourse(action.payload) });
        case CourseActions.FILTER_COURSES:
            return newState(state, { filteredCourses: filterCourses(action.payload) });
        default:
            return state;
    }

}