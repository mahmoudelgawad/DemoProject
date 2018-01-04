import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Course } from '../course';
import { Store } from '@ngrx/store';
import { CourseStateService } from '../../../state/index';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseStateService: CourseStateService) {
  }

  ngOnInit() {
  }

  onAddCourse(f: NgForm) {
    let newCourse: Course = f.value;
    this.courseStateService.dispatchAddCourse(newCourse);
    console.log('onAddCourse -> CourseComponent');
    f.reset();
  }

}
