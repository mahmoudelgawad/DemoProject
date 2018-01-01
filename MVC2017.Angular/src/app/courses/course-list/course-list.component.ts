import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppState, AddCourseAction, FilterCoursesAction } from '../../store/index';

interface Appstate{
  courseState:IAppState
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseState: Observable<IAppState>

  constructor(private store:Store<Appstate>) {
    this.courseState = this.store.select('courseState');
  }

  ngOnInit() {
    // this.getCourses();

    // this.updateFromState();
    // store.subscribe(() => {
    //   this.updateFromState();
    // });
  }

  onCoursesFilter(filterText: string) {
    this.store.dispatch(new FilterCoursesAction(filterText));
    console.log("filter -> "+filterText);
  }

}
