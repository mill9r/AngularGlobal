import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from "@angular/core";

import {CourseItemComponent} from './course-item.component';
import {By} from "@angular/platform-browser";
import {MinutesToHoursPipe} from "../../pipes/minutes-to-hours.pipe";

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, MinutesToHoursPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.headerTitle = 'JavaScript course';
    component.description = 'From Zero to Hero';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should paint correct layout according to input', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.querySelector('h2').innerText).toBe('JavaScript course');
    expect(hostElement.querySelector('p').innerText).toBe('From Zero to Hero');
  });

  it('should trigger editCourse output event', () => {
    const hostElement = fixture.nativeElement;
    spyOn(component.editCourse, 'emit');
    const button =  hostElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.editCourse.emit).toHaveBeenCalled();
  });

  it('should trigger deleteCourse output event', () => {
    const hostElement = fixture.nativeElement;
    spyOn(component.deleteCourse, 'emit');
    const button =  hostElement.querySelectorAll('button')[1];
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.deleteCourse.emit).toHaveBeenCalled();
  });
});
