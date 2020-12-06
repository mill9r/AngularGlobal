import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {CourseDescription} from '../../../../shared/models';
import {CourseDataService} from '../../../../shared/services/course-data/course-data.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: CourseDescription[];
  public searchInput: string;
  public courseWillBeDeleted: number;

  @ViewChild('modalDialog')
  public modalDialog: TemplateRef<any>;

  constructor(
    private courseData: CourseDataService,
    private matDialog: MatDialog,
    ) { }

  public ngOnInit(): void {
    this.courses =  this.courseData.getCourseList();
  }

  public executeCourseSearch(input: string): void {
    console.log(input);
  }

  public loadMoreCourses(): void {
    console.log('loadMoreCourses');
  }

  public openDeleteCourseDialog(courseId: number): void {
    this.courseWillBeDeleted = courseId;
    const dialogRef = this.matDialog.open(this.modalDialog);
    dialogRef.afterClosed().subscribe( value => {
      if (value) {
        this.courseData.deleteCourse(courseId);
        this.courses = this.courseData.getCourseList();
      }
    });
  }
}
