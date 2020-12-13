import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddCoursePageComponent} from './pages/add-course-page.component';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AddCoursePageComponent],
  exports: [AddCoursePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class AddCourseModule { }
