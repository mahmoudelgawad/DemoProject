import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService:CourseService) {

   }

  ngOnInit() {
  }
  onAddCourse(f:NgForm){
    let index = this.courseService.getCourses().length+1;
    f.value.id=index;
    this.courseService.addCourse(f.value);
  }

}
