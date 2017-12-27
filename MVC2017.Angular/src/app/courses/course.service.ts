import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Course } from './course';

@Injectable()
export class CourseService {
  courseList: Course[] =
    [
        {
            "id":1,
            "name":"mahmoud course",
            "topic":"Angular 5"
        },
        {
            "id":2,
            "name":"karim course",
            "topic":"JQuery"
        },
        {
            "id":3,
            "name":"Jilan course",
            "topic":"HTML"
        }
    ];
  constructor() {

  }

  addCourse(course: Course) {
    this.courseList.push(course);
    console.log('add new course');
  }

  deleteCourse(course: Course) {
    let index = this.courseList.indexOf(course);
    if (index > -1) {
      this.courseList.splice(index);
    }
  }

  getCourses() {
    return this.courseList;
  }

  getCourse(id: number) {

  }


  updateCourse(course: Course) {

  }
}