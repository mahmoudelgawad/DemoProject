import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { store, FilterCoursesAction } from '../../store';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  //courses: Course[] = [];
  filteredCourses$:Observable<Course>

  constructor() {
  }

  // getCourses() {
  //   this._courseService.getCourses()
  //      .subscribe(courses => {
  //       this.courses = this.filteredCourses = courses;
  //     });
  // }


  updateFromState() {
    //const allState = store.getState();
    //this.courses = allState.courses;
  }

  ngOnInit() {
    // this.getCourses();
    
    // this.updateFromState();
    // store.subscribe(() => {
    //   this.updateFromState();
    // });
  }

  onCoursesFilter(filterText:string) {
    store.dispatch(FilterCoursesAction(filterText));
    //this.courses = store.getState().filteredCourses;
  }

}
