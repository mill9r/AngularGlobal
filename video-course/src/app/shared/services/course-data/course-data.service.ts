import { Injectable } from '@angular/core';
import {CourseDescription} from '../../models';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  public courses$: BehaviorSubject<CourseDescription[]> = new BehaviorSubject<CourseDescription[]>(null);
  public course$: BehaviorSubject<CourseDescription> = new BehaviorSubject<CourseDescription>(null);

  private readonly courses = `${environment.API_URL}/courses`;

  public constructor(private http: HttpClient) {}

  public getCourseList(start: string = '0', textFragment: string = '', sort: string = ''): void {
    this.http.get<CourseDescription[]>(`${this.courses}?start=${start}&count=10`)
      .subscribe(courses => this.courses$.next(courses));
  }

  public addCourse(course: CourseDescription): void {
    this.http.post(this.courses, { ...course })
      .subscribe(() => {
        this.getCourseList();
      }, (error => { console.log(error); }));
  }

  public updateCourse(course: CourseDescription): void {
    this.http.patch(`${this.courses}/${course.id}`, { ...course })
      .subscribe(() => {
        this.getCourseList();
      }, (error => { console.log(error); }));
  }

  public deleteCourse(id: number): void {
    this.http.delete<void>(`${this.courses}/${id}`)
      .subscribe(() => {
        this.getCourseList();
      });
  }

  public searchCourse(textFragment: string = ''): void {
    this.http.get<CourseDescription[]>(`${this.courses}?start=0&count=10&textFragment=${textFragment}`)
      .subscribe(courses => this.courses$.next(courses));
  }

  public getCourseById(id: number): void {
    this.http.get<CourseDescription>(`${this.courses}/${id}`)
      .subscribe(course => this.course$.next(course));
  }
}
