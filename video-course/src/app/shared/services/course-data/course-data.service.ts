import { Injectable } from '@angular/core';
import {CourseDescription} from '../../models';

@Injectable()
export class CourseDataService {
  private courses: CourseDescription[] = [
    {
      courseId: 1,
      courseTitle: 'Video Course 1. CSS',
      courserDescription: `Learn about where you can find course descriptions,
         what information they include, how they work, and details about various
         components of a course description. Course descriptions report information
         about a university or college's classes. They're published both in course
         catalogs that outline degree requirements and in course schedules that
         contain descriptions for all courses offered during a particular semester.`,
      courseDuration: '90min',
      publication: '2020-08-28',
      isCourseTopRated: true
    },
    {
      courseId: 2,
      courseTitle: 'Video Course 2. HTML',
      courserDescription: `Learn about where you can find course descriptions,
         what information they include, how they work, and details about various
         components of a course description. Course descriptions report information
         about a university or college's classes. They're published both in course
         catalogs that outline degree requirements and in course schedules that
         contain descriptions for all courses offered during a particular semester.`,
      courseDuration: '1000min',
      publication: '2020-11-28'
    },
    {
      courseId: 3,
      courseTitle: 'Video Course 3. JavaScript',
      courserDescription: `Learn about where you can find course descriptions,
         what information they include, how they work, and details about various
         components of a course description. Course descriptions report information
         about a university or college's classes. They're published both in course
         catalogs that outline degree requirements and in course schedules that
         contain descriptions for all courses offered during a particular semester.`,
      courseDuration: '500min',
      publication: '2020-11-05'
    },
  ];

  public getCourseList(): CourseDescription[] {
    return this.courses;
  }

  public addCourse(course: CourseDescription): void {
    this.courses = [...this.courses, course];
  }

  public updateCourse(course: CourseDescription): void {
    const courseIndex = this.courses.findIndex( courseItem => course.courseId === courseItem.courseId);
    this.courses[courseIndex] = course;
    this.courses = [...this.courses];
  }

  public deleteCourse(courseId: number): void {
    this.courses = this.courses.filter( courseItem => courseItem.courseId !== courseId);
    console.log(this.courses);
  }

  public getCourseById(id: number): CourseDescription[] {
    return this.courses.filter(course => course.courseId === id);
  }
}
