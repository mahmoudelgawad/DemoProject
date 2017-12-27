import {Course} from '../courses/course';
import {IAppState} from './IAppState';
import { CourseService } from '../courses/course.service';

const initialState: IAppState = {
    courses:(new CourseService()).getCourses()
};

export function reducer(state= initialState,action){
    return state;
}