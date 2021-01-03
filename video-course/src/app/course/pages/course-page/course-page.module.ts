import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import {CoursePageComponent} from './pages/course-page.component';

@NgModule({
  declarations: [CoursePageComponent],
  exports: [CoursePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class CoursePageModule { }
