import { Course } from "../courses/course";

export const ADD_COURSE ="course/ADD";


export function AddCourseAction(course:Course){
    return{
        type:ADD_COURSE,
        course
    };
}