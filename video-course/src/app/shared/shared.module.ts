import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {CourseItemComponent} from './components/course-item/course-item.component';
import {CourseListComponent} from './components/course-list/course-list.component';
import {HeaderComponent} from './components/header/header.component';
import {MetaDataComponent} from './components/meta-data/meta-data.component';
import {MinutesToHoursPipe} from './pipes/minutes-to-hours.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {CreationDateDirective} from './directives/creation-date.directive';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import { CourseFormComponent } from './components/course-form/course-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    FooterComponent,
    BreadcrumbsComponent,
    CourseItemComponent,
    CourseListComponent,
    HeaderComponent,
    MetaDataComponent,
    MinutesToHoursPipe,
    OrderByPipe,
    CreationDateDirective,
    CourseFormComponent,
  ],
  exports: [
    FooterComponent,
    BreadcrumbsComponent,
    CourseItemComponent,
    CourseListComponent,
    HeaderComponent,
    MetaDataComponent,
    MinutesToHoursPipe,
    OrderByPipe,
    CreationDateDirective,
    MaterialModule,
    FlexLayoutModule,
    CourseFormComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
