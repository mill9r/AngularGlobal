import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './course/pages/auth/login/pages/login.component';
import { CoursePageComponent } from './course/pages/course-page/pages/course-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'courses', component: CoursePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
