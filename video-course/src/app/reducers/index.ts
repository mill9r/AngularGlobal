import {CourseDescription, UserInfo, UserLogin} from '../shared/models';
import {CoursesAction, CoursesActionTypes} from '../actions/course.actions';
import {ActionReducerMap} from '@ngrx/store';

export interface CoursesState {
  courses: CourseDescription[] | null;
}

const initialCoursesState: CoursesState = {
  courses: null
};

export interface CourseState {
  course: CourseDescription | null;
}

const initialCourseState: CourseState = {
  course: null
};

export interface UserInfoState {
   userInfo: UserInfo | null;
}

const initialUserInfoState: UserInfoState = {
  userInfo: null
};

export interface UserLoginState {
  userLogin: UserLogin | null;
}

const initialUserLoginState: UserLoginState = {
  userLogin: null
};

export interface AppState {
  courses: CoursesState;
  course?: CourseState;
  userInfo?: UserInfoState;
  userLogin?: UserLoginState;
}

export function CoursesReducer(state: CoursesState = initialCoursesState, action: CoursesAction): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.LoadCourses:
      return {
        courses: action.payload.courses
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  courses: CoursesReducer
};

export const selectCourses = (state: AppState) => state.courses.courses;
