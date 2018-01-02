import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store/src/store";
import { IState } from "../state";
import { Observable } from "rxjs/Observable";
import { Course } from "../../courses/course";


@Injectable()
export class CourseStateService{

    constructor(private store: Store<IState>){
    }

    selectCourses():Observable<{'courses'}>{
        return this.store.select(c => c.course);
    }
}