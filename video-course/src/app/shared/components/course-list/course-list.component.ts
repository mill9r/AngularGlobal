import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CourseDescription} from '../../models';
import {CourseDataService} from '../../services/course-data/course-data.service';
import {Router} from '@angular/router';
import {localStorageKeys} from "../../constants/localStorageKeys";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() public courses: CourseDescription[];

  @Output() public deleteCourse: EventEmitter<any> = new EventEmitter();

  constructor(private route: Router) {}

  public editCourse(courseId: number): void {
    this.route.navigateByUrl('courses/new-course');
    localStorage.setItem(localStorageKeys.courseItemId, '' + courseId);
  }
}
