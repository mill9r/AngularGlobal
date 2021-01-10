import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './course/pages/auth/login/pages/login.component';
import { CoursePageComponent } from './course/pages/course-page/pages/course-page.component';
import { AddCoursePageComponent } from './course/pages/add-course/pages/add-course-page.component';
import { EditCourseComponent } from './course/pages/edit-course/pages/edit-course/edit-course.component';
import { NotFoundComponent } from './course/pages/not-found/pages/not-found/not-found.component';
import {AppLayoutComponent} from './course/pages/app-layout/app-layout.component';
import {UserGuard} from './course/pages/auth/guard/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'user/:userId',
    component: AppLayoutComponent,
    canActivate: [UserGuard],
    children : [
      { path: 'courses', component: CoursePageComponent, pathMatch: 'full' },
      { path: 'courses/new-course', component: AddCoursePageComponent },
      { path: 'courses/:id', component: EditCourseComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
