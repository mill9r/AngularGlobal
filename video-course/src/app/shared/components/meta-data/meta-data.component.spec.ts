import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDataComponent } from './meta-data.component';

describe('MetaDataComponent', () => {
  let component: MetaDataComponent;
  let fixture: ComponentFixture<MetaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDataComponent);
    component = fixture.componentInstance;
    component.message = "text";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should paint correct layout according to input', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.querySelector('span').innerText).toBe('text');
  })
});
