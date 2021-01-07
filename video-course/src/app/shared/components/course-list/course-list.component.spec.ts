import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../../../material/material.module';

import { CourseListComponent } from './course-list.component';
import {OrderByPipe} from '../../pipes/order-by.pipe';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, OrderByPipe ],
      imports: [HttpClientTestingModule, RouterTestingModule, MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    component.courses = [{
      id: 2,
      name: 'Video Course 1. Name tag',
      description: `Learn about`,
      length: 1000,
      date: '2020-11-28'
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call editCourse method', () => {
    spyOn(component, 'editCourse')
      .and
      .callThrough();
    component.editCourse(1);
    expect(component.editCourse).toHaveBeenCalled();
  });

  // it('call deleteCourse method', () => {
  //   spyOn(component, 'deleteCourse')
  //     .and
  //     .callThrough();
  //   component.deleteCourse(1);
  //   expect(component.deleteCourse).toHaveBeenCalled();
  // });
});
