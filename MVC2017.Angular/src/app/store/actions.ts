import { Course } from "../courses/course";

export const ADD_COURSE ="course/ADD";
export const FILTER_COURSES="courses/FILTER";


export function AddCourseAction(course:Course){
    return{
        type:ADD_COURSE,
        course
    };
}

export function FilterCoursesAction(filterText:string){
    return{
        type:FILTER_COURSES,
        filterText
    };
}