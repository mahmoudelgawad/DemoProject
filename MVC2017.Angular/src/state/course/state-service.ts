import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store/src/store";
import { IState, initialState } from "../state";
import { Observable } from "rxjs/Observable";
import { Course } from "../../app/courses/course";
import { CourseActions } from "./actions";
import { ICourseState } from "./state";


@Injectable()
export class CourseStateService {

    constructor(private store: Store<ICourseState>) {
    }

    selectCourses(): Observable<Course[]> {
        return this.store.select(c => c.courses);
    }
    selecFilteredCourses(): Observable<Course[]> {
        return this.store.select(c => c.filteredCourses);
    }

    dispatchAddCourse(course: Course): void {
        if (course) {
            this.store.dispatch(new CourseActions.AddCourseAction(course));
        }
    }

    dispatchInputFilterCourses(filterText: string): void {
        if (filterText) {
            this.store.dispatch(new CourseActions.FilterCoursesAction(filterText));
        }
    }

}