import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

import {CourseDescription} from '../../models';
import {NavigationService} from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() public courses: CourseDescription[];

  @Output() public deleteCourse: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: Router,
    private navigationService: NavigationService,
    ) {}

  public editCourse(courseId: number): void {
    this.route.navigateByUrl(this.navigationService.getUrl( `/courses/${courseId}`));
  }
}
