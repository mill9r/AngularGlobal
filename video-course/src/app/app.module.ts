import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {LoginModule} from './course/pages/auth/login/login.module';
import { CoursePageModule } from './course/pages/course-page/course-page.module';
import { SharedModule } from './shared/shared.module';
import { AddCourseModule } from './course/pages/add-course/add-course.module';
import { EditCourseModule } from './course/pages/edit-course/edit-course.module';
import { NotFoundModule } from './course/pages/not-found/not-found.module';
import { AppLayoutComponent } from './course/pages/app-layout/app-layout.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../environments/environment';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
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
    AddCourseModule,
    EditCourseModule,
    NotFoundModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (http) => new TranslateHttpLoader(http, './assets/translations/', '.json'),
          deps: [HttpClient],
        },
      }),
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
