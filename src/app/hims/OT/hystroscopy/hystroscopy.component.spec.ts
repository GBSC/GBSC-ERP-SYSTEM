import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HystroscopyComponent } from './hystroscopy.component';

describe('HystroscopyComponent', () => {
  let component: HystroscopyComponent;
  let fixture: ComponentFixture<HystroscopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HystroscopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HystroscopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
