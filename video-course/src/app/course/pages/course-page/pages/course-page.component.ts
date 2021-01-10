import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import {CourseDescription} from '../../../../shared/models';
import {CourseDataService} from '../../../../shared/services/course-data/course-data.service';
import {SpinnerService} from '../../../../shared/services/spinner/spinner.service';
import { Store, select } from '@ngrx/store';
import {AppState, selectCourses} from 'src/app/reducers';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses$: Observable<CourseDescription[]>;
  public searchInput: FormControl;
  public courseWillBeDeleted: number;
  public isLoading: boolean;

  private coursePage = 0;

  @ViewChild('modalDialog')
  public modalDialog: TemplateRef<any>;

  constructor(
    private courseData: CourseDataService,
    private matDialog: MatDialog,
    private courseDataService: CourseDataService,
    private spinnerService: SpinnerService,
    private store: Store<AppState>
    ) { }

  public ngOnInit(): void {
    this.isLoading = this.spinnerService.loading;
    this.courses$ = this.store.pipe(select(selectCourses));
    this.searchInput = new FormControl();
    this.searchInput.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data) => this.courseDataService.searchCourse(data));
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
