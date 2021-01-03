import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageComponent } from './course-page.component';

describe('CoursePageComponent', () => {
  let component: CoursePageComponent;
  let fixture: ComponentFixture<CoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call executeCourseSearch method', () => {
    spyOn(component,'executeCourseSearch')
      .and
      .callThrough();
    component.executeCourseSearch('course1');
    expect(component.executeCourseSearch).toHaveBeenCalled();
  });

  it('call loadMoreCourses method', () => {
    spyOn(component,'loadMoreCourses')
      .and
      .callThrough();
    component.loadMoreCourses();
    expect(component.loadMoreCourses).toHaveBeenCalled();
  });
});
