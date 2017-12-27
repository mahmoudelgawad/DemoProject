import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"
import { CourseComponent } from './courses/course/course.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';

const routes: Routes = [
  { path: '', redirectTo: "/recipes",pathMatch:'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopingList', component: ShopingListComponent },
  { path: "courses", component: CourseComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

