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
  public form: FormGroup;
  public durationTime: string;
  public course: CourseDescription = null;

  constructor(
    private fb: FormBuilder,
    private courseDataService: CourseDataService,
    private route: Router,
    ) {}

  public ngOnInit(): void {
    const courseId = localStorage.getItem(localStorageKeys.courseItemId);
    if (courseId){
      this.course = this.courseDataService.getCourseById(+courseId)[0];
    }
    this.form = this.fb.group({
      title: [this.course?.courseTitle ?? ''],
      description: [this.course?.courserDescription ?? ''],
      date: [this.course?.publication ?? ''],
      duration: [this.course?.courseDuration ?? ''],
      authors: ['']
    });

    this.form.valueChanges
      .subscribe(data => {
        this.durationTime = data.duration;
    });
  }

  public storeForm(): void {
    const courseTitle = this.form.get('title').value;
    const courserDescription = this.form.get('description').value;
    const publication = this.form.get('date').value;
    const courseDuration = this.form.get('duration').value;
    const course = {
      courseId: this.course?.courseId ?? Math.random() * 100,
      courseTitle,
      courserDescription,
      publication,
      courseDuration,
    };

    if (this.course) {
      this.courseDataService.updateCourse(course);
    }
    this.courseDataService.addCourse(course);

    this.route.navigateByUrl('/courses');
  }

  public ngOnDestroy(): void {
    localStorage.setItem(localStorageKeys.courseItemId, '');
  }
}
