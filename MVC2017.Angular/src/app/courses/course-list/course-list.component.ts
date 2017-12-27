import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { store } from '../../store';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

   courses: Course[]=[];

  constructor(private _courseService: CourseService) {
  }

  getCourses() {
    // this._courseService.getCourses()
    //   .subscribe(courses => {
    //     this.courses = this.filteredCourses = courses;
    //   });
  }


  updateFromState() {
    const allState = store.getState();
    this.courses=allState.courses;
  }

  ngOnInit() {
     // this.getCourses();
     this.updateFromState();
     store.subscribe(()=>{
       this.updateFromState();
     });
  }


}
