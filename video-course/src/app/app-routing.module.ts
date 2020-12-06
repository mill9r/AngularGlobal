import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './course/pages/auth/login/pages/login.component';
import { CoursePageComponent } from './course/pages/course-page/pages/course-page.component';
import { AddCoursePageComponent } from './course/pages/add-course/pages/add-course-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'courses', component: CoursePageComponent, pathMatch: 'full' },
  { path: 'courses/new-course', component: AddCoursePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
