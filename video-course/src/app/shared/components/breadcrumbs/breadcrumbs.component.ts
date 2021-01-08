import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {CourseDataService} from '../../services/course-data/course-data.service';
import {CourseDescription} from '../../models';
import {NavigationService} from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  public course$: Observable<CourseDescription>;
  public navigationUrl: string;

  constructor(
    private route: ActivatedRoute,
    private courseDataService: CourseDataService,
    private navigationService: NavigationService,
  ) { }

  public ngOnInit(): void {
    this.course$ = this.courseDataService.course$;

    this.navigationUrl = this.navigationService.getUrl('/courses');
  }

}
