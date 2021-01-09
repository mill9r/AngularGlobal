import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {CourseDescription} from '../../models';
import {CourseDataService} from '../../services/course-data/course-data.service';
import {localStorageKeys} from '../../constants/localStorageKeys';
import {NavigationService} from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  @Input() public course: CourseDescription = null;

  public form: FormGroup;
  public durationTime: number;
  public navigationUrl: string;

  constructor(
    private fb: FormBuilder,
    private courseDataService: CourseDataService,
    private route: Router,
    private navigationService: NavigationService,
    ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.course?.name ?? ''],
      description: [this.course?.description ?? ''],
      date: [this.course?.date ?? ''],
      duration: [this.course?.length ?? ''],
      authors: ['']
    });

    this.form.valueChanges
      .subscribe(data => {
        this.durationTime = data.duration;
    });

    this.navigationUrl = this.navigationService.getUrl('/courses');
  }

  public storeForm(): void {
    const name = this.form.get('title').value;
    const description = this.form.get('description').value;
    const date = this.form.get('date').value;
    const length = this.form.get('duration').value;
    const course = {
      // TODO check if id is mandatpry field
      id: this.course?.id ?? Math.round((Math.random() * 10000)),
      name,
      date,
      length,
      description,
      authors: [
        { id: 2148, name: 'Joyce', lastName: 'Sparks' },
        { id: 728, name: 'Rosetta', lastName: 'Barton' },
        { id: 3733, name: 'Patti', lastName: 'Sampson' }
      ],
      isTopRated: false,
    };

    if (this.course) {
      this.courseDataService.updateCourse({...course});
    } else {
      this.courseDataService.addCourse({...course});
    }

    this.route.navigateByUrl(this.navigationService.getUrl('/courses'));
  }

  public ngOnDestroy(): void {
    localStorage.setItem(localStorageKeys.courseItemId, '');
  }
}
