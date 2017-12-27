import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Course } from './course';

@Injectable()
export class CourseService {
  courseList: Course[] = [];
  constructor() {

  }

  addCourse(course: Course) {
    this.courseList.push(course);
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