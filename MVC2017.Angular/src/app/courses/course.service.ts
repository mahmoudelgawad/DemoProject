import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Course } from './course';

@Injectable()
export class CourseService {
  private static courseList: Course[] =
    [
      {
        "id": 1,
        "name": "mahmoud course",
        "topic": "Angular 5"
      },
      {
        "id": 2,
        "name": "karim course",
        "topic": "JQuery"
      },
      {
        "id": 3,
        "name": "Jilan course",
        "topic": "HTML"
      }
    ];
  constructor() {

  }

  addCourse(course: Course) {
    let index = CourseService.courseList.length + 1;
    course.id = index;
    CourseService.courseList.push(course);
    console.log('addCourse -> Service');
    console.log(CourseService.courseList);
    return CourseService.courseList;
  }

  deleteCourse(course: Course) {
    let index = CourseService.courseList.indexOf(course);
    if (index > -1) {
      CourseService.courseList.splice(index);
    }
  }

  getCourses() {
    console.log('get courses array '+ CourseService.courseList.length);
    return CourseService.courseList;
  }

  getFilteredCourses(filterText:string){
    return CourseService.courseList.filter(c => c.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1);
  }

  getCourse(id: number) {

  }

  updateCourse(course: Course) {

  }
}