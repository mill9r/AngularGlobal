import {Injectable} from '@angular/core';
import {CourseDescription} from '../../models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  public courses$: BehaviorSubject<CourseDescription[]> = new BehaviorSubject<CourseDescription[]>(null);
  public course$: BehaviorSubject<CourseDescription> = new BehaviorSubject<CourseDescription>(null);

  private readonly coursesUrl = `${environment.API_URL}/courses`;
  private readonly count: number = 5;

  public constructor(private http: HttpClient) {}

  public getCourseList(start: string = '0', textFragment: string = '', sort: string = ''): void {
    this.http.get<CourseDescription[]>(`${this.coursesUrl}?start=${start}&count=${this.count}`)
      .subscribe(courses => this.courses$.next(courses));
  }

  public addCourse(course: CourseDescription): void {
    this.http.post(this.coursesUrl, { ...course })
      .subscribe(() => {
        this.getCourseList();
      }, (error => { console.log(error); }));
  }

  public updateCourse(course: CourseDescription): void {
    this.http.patch(`${this.coursesUrl}/${course.id}`, { ...course })
      .subscribe(() => {
        this.getCourseList();
      }, (error => { console.log(error); }));
  }

  public deleteCourse(id: number): void {
    this.http.delete<void>(`${this.coursesUrl}/${id}`)
      .subscribe(() => {
        this.getCourseList();
      });
  }

  public searchCourse(textFragment: string = ''): void {
    this.http.get<CourseDescription[]>(`${this.coursesUrl}?start=0&count=${this.count}&textFragment=${textFragment}`)
      .subscribe(courses => this.courses$.next(courses));
  }

  public getCourseById(id: number): void {
    this.http.get<CourseDescription>(`${this.coursesUrl}/${id}`)
      .subscribe(course => this.course$.next(course));
  }
}
