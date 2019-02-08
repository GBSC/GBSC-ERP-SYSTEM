import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HystroscopyDetailComponent } from './hystroscopy-detail.component';

describe('HystroscopyDetailComponent', () => {
  let component: HystroscopyDetailComponent;
  let fixture: ComponentFixture<HystroscopyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HystroscopyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HystroscopyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
