import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { CourseService } from '../courses/course.service';
import { ADD_COURSE } from './actions';

const initialState: IAppState = {
    courses: (new CourseService()).getCourses()
};

function addCourse(state,action):IAppState{
    return Object.assign({},state,{
        courses:(new CourseService()).addCourse(action.course)
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COURSE:
        return addCourse(state,action);
        default:
            return state;
    }

}