import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { CourseListComponent } from './shared/components/course-list/course-list.component';
import { CoursePageComponent } from './course/pages/course-page/course-page.component';
import { CourseItemComponent } from './shared/components/course-item/course-item.component';
import { MetaDataComponent } from './shared/components/meta-data/meta-data.component';
import { MaterialModule } from "./material/material.module";
import { FormsModule } from '@angular/forms';
import { CreationDateDirective } from './shared/directives/creation-date.directive';
import { MinutesToHoursPipe } from './shared/pipes/minutes-to-hours.pipe';
import { OrderByPipe } from './shared/pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CourseListComponent,
    CoursePageComponent,
    CourseItemComponent,
    MetaDataComponent,
    CreationDateDirective,
    MinutesToHoursPipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
