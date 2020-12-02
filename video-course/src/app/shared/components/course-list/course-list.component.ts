import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CourseDescription} from '../../models';
import {CourseDataService} from '../../services/course-data/course-data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() public courses: CourseDescription[];

  @Output() public deleteCourse: EventEmitter<any> = new EventEmitter();

  public editCourse(courseId: number): void {
    console.log('Edit course:', courseId);
  }
}
