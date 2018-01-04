import { Action } from "@ngrx/store";
import { Course } from "../../app/courses/course";

export namespace CourseActions {
    export const ADD_COURSE = "course/ADD";
    export const FILTER_COURSES = "courses/FILTER";


    export class AddCourseAction implements Action {
        readonly type = ADD_COURSE;
        constructor(public payload: Course) {
        }
    }

    export class FilterCoursesAction implements Action {
        readonly type = FILTER_COURSES;
        constructor(public payload: string) {
        }
    }
}


