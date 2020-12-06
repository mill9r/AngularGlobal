import { Component, OnInit } from '@angular/core';
import {CourseDataService} from '../../../../shared/services/course-data/course-data.service';
import {CourseDescription} from '../../../../shared/models';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  constructor(private courseService: CourseDataService) { }

  public ngOnInit(): void {
  }

  public storeCourse(course: CourseDescription): void {
    this.courseService.addCourse(course);
  }
}
