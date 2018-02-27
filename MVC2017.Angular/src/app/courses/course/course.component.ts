import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Store } from '@ngrx/store';
import { CourseStateService } from '../../../state/index';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { debug } from 'util';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courseForm: FormGroup;
  constructor(private courseStateService: CourseStateService) {
  }

  ngOnInit() {
    this.createCourseForm();
  }

  createCourseForm() {
    this.courseForm = new FormGroup(
      {
        id: new FormControl(), 
        name: new FormControl(null,[Validators.required]),
        topic: new FormControl(null,[Validators.required])
      }
    );
  }
  onAddCourse() {
    const newCourse: Course = this.courseForm.value;
    this.courseStateService.dispatchAddCourse(newCourse);
    console.log('onAddCourse -> CourseComponent');
    this.courseForm.reset();
    this.courseForm.markAsUntouched();
  }

}
