import {Course} from '../../courses/course';
import { CourseService } from '../../courses/course.service';

export interface ICourseState{
courses:Course[],
filteredCourses:Course[]
}

export const  CourseInitialState:ICourseState={
    courses: (new CourseService()).getCourses(),
    filteredCourses: (new CourseService()).getCourses(),
}