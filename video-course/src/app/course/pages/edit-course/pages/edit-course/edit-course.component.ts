import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';

import { CourseDescription } from '../../../../../shared/models';
import { CourseDataService } from '../../../../../shared/services/course-data/course-data.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public course$: Observable<CourseDescription>;

  constructor(
    private router: ActivatedRoute,
    private courseDataService: CourseDataService,
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.courseDataService.getCourseById(params.id);
      this.course$ = this.courseDataService.course$;
    });
  }
}
