import { Component, OnInit } from '@angular/core';
import {CourseDescription} from "../../../shared/models";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: CourseDescription[];
  public searchInput: string;

  constructor() { }

  public ngOnInit(): void {
    this.courses = [
      {
        courseId: 1,
        courseTitle: 'Video Course 1. Name tag',
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
        courseTitle: 'Video Course 1. Name tag',
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
        courseTitle: 'Video Course 1. Name tag',
        courserDescription: `Learn about where you can find course descriptions,
         what information they include, how they work, and details about various
         components of a course description. Course descriptions report information
         about a university or college's classes. They're published both in course
         catalogs that outline degree requirements and in course schedules that
         contain descriptions for all courses offered during a particular semester.`,
        courseDuration: '500min',
        publication: '2020-11-05'
      },
    ]
  }

  public executeCourseSearch(input: string): void {
    console.log(input)
  }

  public loadMoreCourses(): void {
    console.log('loadMoreCourses')
  }

}
