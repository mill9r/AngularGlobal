import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CourseDescription} from '../../models';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() public course: CourseDescription;

  @Output() public storeCourse: EventEmitter<CourseDescription> = new EventEmitter();

  public form: FormGroup;
  public durationTime: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      date: [''],
      duration: [''],
      authors: ['']
    });

    this.form.valueChanges
      .subscribe(data => {
        this.durationTime = data.duration;
    });
  }

  public storeForm(): void {
    const courseTitle = this.form.get('title');
    const courserDescription = this.form.get('description');
    const publication = this.form.get('date');
    const courseDuration = this.form.get('duration');
    console.log({
      courseTitle,
      courserDescription,
      publication,
      courseDuration,
    });
  }
}
