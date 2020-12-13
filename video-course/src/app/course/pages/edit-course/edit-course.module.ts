import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';

@NgModule({
  declarations: [
    EditCourseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class EditCourseModule { }
