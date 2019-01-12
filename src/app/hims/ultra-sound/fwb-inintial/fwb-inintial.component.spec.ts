import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FWBInintialComponent } from './fwb-inintial.component';

describe('FWBInintialComponent', () => {
  let component: FWBInintialComponent;
  let fixture: ComponentFixture<FWBInintialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FWBInintialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FWBInintialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
