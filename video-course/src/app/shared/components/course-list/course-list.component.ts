import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CourseDescription} from '../../models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() public courses: CourseDescription[]

  public editCourse(courseId: number): void {
    console.log('Edit course:',courseId)
  }

  public deleteCourse(courseId: number): void {
    console.log('Delete course:',courseId)
  }
}
