import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CourseStateService } from '../../../state/index';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCourses$: Observable<Course[]>

  constructor(private courseStateService:CourseStateService) {
    this.filteredCourses$= this.courseStateService.selecFilteredCourses();
  }

  ngOnInit() {
  }

  onCoursesFilter(filterText: string) {
    this.courseStateService.dispatchInputFilterCourses(filterText);
    console.log("filter -> "+filterText);
  }

}
