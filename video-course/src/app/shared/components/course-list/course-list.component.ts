import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseDescription} from '../../models';
import {Router} from '@angular/router';

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
    this.route.navigateByUrl(`courses/${courseId}`);
  }
}
