import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import {OrderByPipe} from "../../pipes/order-by.pipe";

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, OrderByPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    component.courses = [{
      courseId: 2,
      courseTitle: 'Video Course 1. Name tag',
      courserDescription: `Learn about`,
      courseDuration: '1000min',
      publication: '2020-11-28'
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call editCourse method', () => {
    spyOn(component,'editCourse')
      .and
      .callThrough();
    component.editCourse(1);
    expect(component.editCourse).toHaveBeenCalled();
  });

  it('call deleteCourse method', () => {
    spyOn(component,'deleteCourse')
      .and
      .callThrough();
    component.deleteCourse(1);
    expect(component.deleteCourse).toHaveBeenCalled();
  });
});
