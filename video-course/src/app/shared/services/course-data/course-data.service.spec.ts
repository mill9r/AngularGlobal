import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { CourseDataService } from './course-data.service';

describe('CourseDataService', () => {
  let service: CourseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(CourseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
