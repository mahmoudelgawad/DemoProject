import { Component } from '@angular/core';
import { store } from '../store/index';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor() {
    }
    getCoursesCount() {
        let coursesCount = store.getState().courses.length;
        return coursesCount;
    }
}

