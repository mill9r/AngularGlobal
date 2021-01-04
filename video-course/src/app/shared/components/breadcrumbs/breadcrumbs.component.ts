import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseDataService} from '../../services/course-data/course-data.service';
import {filter, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CourseDescription} from '../../models';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  public course$: Observable<CourseDescription>;

  constructor(
    private route: ActivatedRoute,
    private courseDataService: CourseDataService,
  ) { }

  public ngOnInit(): void {
    this.route.params
      .pipe(filter(params => !!Number(params.id)))
      .subscribe(params => {
        this.courseDataService.getCourseById(+params.id);
        this.course$ = this.courseDataService.course$;
    });
  }

}
