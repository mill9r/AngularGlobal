import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {CourseDescription} from '../../../../shared/models';
import {CourseDataService} from '../../../../shared/services/course-data/course-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses$: Observable<CourseDescription[]>;
  public searchInput: string;
  public courseWillBeDeleted: number;
  private coursePage = 0;

  @ViewChild('modalDialog')
  public modalDialog: TemplateRef<any>;

  constructor(
    private courseData: CourseDataService,
    private matDialog: MatDialog,
    private courseDataService: CourseDataService,
    ) { }

  public ngOnInit(): void {
    this.courseData.getCourseList(`${this.coursePage}`);
    this.courses$ = this.courseData.courses$;
  }

  public executeCourseSearch(input: string): void {
    this.courseDataService.searchCourse(input);
  }

  public loadMoreCourses(): void {
    this.courseData.getCourseList(`${++this.coursePage}`);
  }

  public openDeleteCourseDialog(courseId: number): void {
    this.courseWillBeDeleted = courseId;
    const dialogRef = this.matDialog.open(this.modalDialog);
    dialogRef.afterClosed().subscribe( value => {
      if (value) {
        this.courseData.deleteCourse(courseId);
      }
    });
  }
}
