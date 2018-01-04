
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducer } from "./reducer";
import { IState } from "./state";
import { CourseStateService } from "./index";
import { NgModule } from "@angular/core";
import { Store } from "@ngrx/store/src/store";
import { StoreModule } from "@ngrx/store/src/store_module";
import { reduce } from "rxjs/operator/reduce";
import { ICourseState, CourseInitialState } from "./course/state";


@NgModule({
    imports: [
        StoreModule.forRoot({
            mainRed:CourseInitialState
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        })
    ],
    providers: [
        CourseStateService,
    ],
})
export class StateModule {
    constructor(private store: Store<ICourseState>) {
        store.subscribe(s => console.log(s));
    }
}