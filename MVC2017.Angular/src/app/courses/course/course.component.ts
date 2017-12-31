import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { store, AddCourseAction } from '../../store/index';
import { Course } from '../course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
  
  onAddCourse(f:NgForm){
    let newCourse:Course = f.value;
    store.dispatch(AddCourseAction(newCourse));
    console.log('onAddCourse -> CourseComponent');
    f.reset();
  }

}
