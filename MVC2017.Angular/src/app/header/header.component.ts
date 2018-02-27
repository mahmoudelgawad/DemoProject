import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CourseStateService } from '../../state/index';
import { Course } from '../courses/course';
import { IState } from '../../state/state';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    courseCount: number;
    constructor(private courseStateService: CourseStateService) {
    }

    ngOnInit() {
        this.courseStateService.selectCourses().subscribe(c => {
            if (c) {
                this.courseCount = c.length;
            }
            else {
                this.courseCount = 0;
            }

        });
    }

}

