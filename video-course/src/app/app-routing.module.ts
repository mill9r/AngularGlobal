import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursePageComponent} from "./course/pages/course-page/course-page.component";

const routes: Routes = [
  {path: '', component: CoursePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
