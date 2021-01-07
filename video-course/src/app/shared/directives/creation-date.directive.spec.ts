import {CreationDateDirective} from './creation-date.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {MinutesToHoursPipe} from '../pipes/minutes-to-hours.pipe';
import {CourseItemComponent} from '../components/course-item/course-item.component';

describe('CreationDateDirective', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreationDateDirective,
        CourseItemComponent,
        MinutesToHoursPipe,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.headerTitle = 'Video Course 1. Name tag';
    component.description = `Learn about`;
    component.courseDuration = 1000;
    component.isTopRated = true;
    component.publication = '2030-11-28';
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should change color to blue', () => {
    const appliedCssClass = fixture.debugElement.query(By.css('.border--blue'));
    expect(appliedCssClass.classes['border--blue']).toBeTruthy();
  });
});
