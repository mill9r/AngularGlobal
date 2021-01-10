import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {mergeMap, map} from 'rxjs/operators';

import {AppState} from '../reducers';
import {CourseDataService} from '../shared/services/course-data/course-data.service';
import {LoadCourses, CoursesActionTypes} from '../actions/course.actions';

@Injectable({
  providedIn: 'root'
})
export class CoursesEffects {
  @Effect()
  $loadCourses$ = this.actions$.pipe(
    ofType<LoadCourses>(CoursesActionTypes.LoadCourses),
    mergeMap((action) => this.courseDataService.getCourseList()
      .pipe(
        map( (courses) => {
          return new LoadCourses({courses});
        }),
      ))
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private courseDataService: CourseDataService,
  ) {
  }
}
