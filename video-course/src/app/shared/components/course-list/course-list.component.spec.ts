import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';

describe('CoursesComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
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
