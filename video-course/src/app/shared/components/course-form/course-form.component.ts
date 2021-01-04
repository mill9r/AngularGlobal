import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {CourseDescription} from '../../models';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CourseDataService} from '../../services/course-data/course-data.service';
import {localStorageKeys} from '../../constants/localStorageKeys';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  @Input() public course: CourseDescription[] = null;

  public form: FormGroup;
  public durationTime: string;

  private editableCourse: CourseDescription;

  constructor(
    private fb: FormBuilder,
    private courseDataService: CourseDataService,
    private route: Router,
    ) {}

  public ngOnInit(): void {
    if (this.course.length) {
      this.editableCourse = this.course[0];
    }
    // const courseId = localStorage.getItem(localStorageKeys.courseItemId);
    // if (courseId){
    //   this.course = this.courseDataService.getCourseById(+courseId)[0];
    // }
    this.form = this.fb.group({
      title: [this.editableCourse?.name ?? ''],
      description: [this.editableCourse?.description ?? ''],
      date: [this.editableCourse?.date ?? ''],
      duration: [this.editableCourse?.length ?? ''],
      authors: ['']
    });

    this.form.valueChanges
      .subscribe(data => {
        this.durationTime = data.duration;
    });
  }

  public storeForm(): void {
    const name = this.form.get('title').value;
    const description = this.form.get('description').value;
    const date = this.form.get('date').value;
    const length = this.form.get('duration').value;
    const course = {
      // TODO check if id is mandatpry field
      id: this.editableCourse?.id ?? Math.round((Math.random() * 10000)),
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

    if (this.editableCourse) {
      this.courseDataService.updateCourse({...course});
    }
    this.courseDataService.addCourse({...course});

    this.route.navigateByUrl('/courses');
  }

  public ngOnDestroy(): void {
    localStorage.setItem(localStorageKeys.courseItemId, '');
  }
}
