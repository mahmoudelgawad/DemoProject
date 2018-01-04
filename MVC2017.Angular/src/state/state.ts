import { ICourseState, CourseInitialState } from "./course/state";

export interface IState{
course:ICourseState
}

export let  initialState:IState={
    
        course:CourseInitialState
    
};