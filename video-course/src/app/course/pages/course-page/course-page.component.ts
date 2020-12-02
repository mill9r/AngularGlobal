import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CourseDescription} from '../../../shared/models';
import {CourseDataService} from '../../../shared/services/course-data/course-data.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: CourseDescription[];
  public searchInput: string;

  constructor(private courseData: CourseDataService) { }

  public ngOnInit(): void {
    this.courses =  this.courseData.getCourseList();
  }

  public executeCourseSearch(input: string): void {
    console.log(input);
  }

  public loadMoreCourses(): void {
    console.log('loadMoreCourses');
  }

  public deleteCourse(courseId: number): void {
    this.courseData.deleteCourse(courseId);
    this.courses = this.courseData.getCourseList();
  }
}
