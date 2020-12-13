import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseDataService} from '../../services/course-data/course-data.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  public courseTitle: string;

  constructor(
    private route: ActivatedRoute,
    private courseDataService: CourseDataService,
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseTitle = this.courseDataService.getCourseById(+params.id)[0].courseTitle;
    });
  }

}
