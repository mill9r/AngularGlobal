import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {icons} from '../../../material/constants/icons';
import {Icon} from '../../models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
  @Input() public headerTitle: string;
  @Input() public description: string;
  @Input() public courseDuration: string;
  @Input() public publication: string;
  @Input() public isTopRated: boolean;

  @Output() public deleteCourse: EventEmitter<boolean> = new EventEmitter();
  @Output() public editCourse: EventEmitter<void> = new EventEmitter();

  public icons: Icon = icons;
}
