import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AddCourseAction, IAppState, FilterCoursesAction } from '../../store/index';
import { Course } from '../course';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private store:Store<IAppState>) {
   }

  ngOnInit() {
  }
  
  onAddCourse(f:NgForm){
    let newCourse:Course = f.value;
    this.store.dispatch(new AddCourseAction(newCourse));
    console.log('onAddCourse -> CourseComponent');
    f.reset();
  }

}
