import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwbInitialDetailComponent } from './fwb-initial-detail.component';

describe('FwbInitialDetailComponent', () => {
  let component: FwbInitialDetailComponent;
  let fixture: ComponentFixture<FwbInitialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwbInitialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwbInitialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
