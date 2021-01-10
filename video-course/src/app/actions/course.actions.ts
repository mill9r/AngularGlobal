import {Action} from '@ngrx/store';
import {CourseDescription} from '../shared/models';

export enum CoursesActionTypes {
  LoadCourses = 'Load courses'
}

export class CoursesAction implements Action {
  type: string;
  payload: {
    courses: CourseDescription[]
  };
}

export class LoadCourses implements Action {
  readonly type = CoursesActionTypes.LoadCourses;

  constructor(readonly payload: {courses: CourseDescription[]}) {
  }
}


export type ActionsUnion= LoadCourses;
