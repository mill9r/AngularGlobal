import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { FooterComponent } from './footer.component';
import {MaterialModule} from '../../../material/material.module';

describe('FooterComponent', () => {
  const footer = new FooterComponent();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],

      imports: [HttpClientTestingModule, RouterTestingModule, MaterialModule, TranslateModule.forRoot()]
    })
      .compileComponents();
  }));

  it('should create', () => {
    expect(footer).toBeTruthy();
  });
});
