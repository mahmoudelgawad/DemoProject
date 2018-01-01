import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/index';
import { Observable } from 'rxjs/Observable';
interface AppState{
    courseState:IAppState
}
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    courseState: Observable<IAppState>;
    courseCount:number;
    constructor(private store:Store<AppState>) {
        this.courseState = this.store.select('courseState');
        this.courseState.subscribe(s =>{
            this.courseCount = s.courses.length;
        });
    }
}

