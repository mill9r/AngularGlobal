import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {icons} from "../../../material/constants/icons";
import {Icon} from "../../models";

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

  public icons: Icon = icons;
}
