import { Component, OnInit } from '@angular/core';

import {SpinnerService} from '../../../../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {
  public isLoading: boolean;

  constructor(    private spinnerService: SpinnerService,
  ) { }

  public ngOnInit(): void {
    this.isLoading = this.spinnerService.loading;
  }
}
