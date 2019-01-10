import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimesetupMasterComponent } from './overtimesetup-master.component';

describe('OvertimesetupMasterComponent', () => {
  let component: OvertimesetupMasterComponent;
  let fixture: ComponentFixture<OvertimesetupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertimesetupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimesetupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
