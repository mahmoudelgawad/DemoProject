import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { CourseService } from '../courses/course.service';
import { ADD_COURSE, FILTER_COURSES } from './actions';

const initialState: IAppState = {
    courses: (new CourseService()).getCourses(),
    filteredCourses: (new CourseService()).getCourses(),
};

function addCourse(state, action): IAppState {
    return Object.assign({}, state, {
        courses: (new CourseService()).addCourse(action.course)
    });
}
function filterCourses(state, action): IAppState {
    return Object.assign({}, state, {
        filteredCourses: (new CourseService()).getFilteredCourses(action.filterText)
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COURSE:
            return addCourse(state, action);
        case FILTER_COURSES:
            return filterCourses(state, action);
        default:
            return state;
    }

}