import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesetupMasterComponent } from './leavesetup-master.component';

describe('LeavesetupMasterComponent', () => {
  let component: LeavesetupMasterComponent;
  let fixture: ComponentFixture<LeavesetupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavesetupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesetupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
