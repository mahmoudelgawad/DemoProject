import { ICourseState, CourseInitialState } from "./course/state";

export interface IState{
course:ICourseState
}

export function initialState():IState{
    return{
        course:CourseInitialState
    }
}