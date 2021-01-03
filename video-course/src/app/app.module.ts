import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import {LoginModule} from './course/pages/auth/login/login.module';
import {CoursePageModule} from './course/pages/course-page/course-page.module';
import {SharedModule} from './shared/shared.module';
import {AddCourseModule} from './course/pages/add-course/add-course.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    LoginModule,
    CoursePageModule,
    AddCourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
