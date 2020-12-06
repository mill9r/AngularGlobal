import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import {CoursePageComponent} from './pages/course-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CoursePageComponent],
  exports: [CoursePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class CoursePageModule { }
