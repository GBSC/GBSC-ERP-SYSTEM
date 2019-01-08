import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollsetupMasterComponent } from './payrollsetup-master.component';

describe('PayrollsetupMasterComponent', () => {
  let component: PayrollsetupMasterComponent;
  let fixture: ComponentFixture<PayrollsetupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollsetupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollsetupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
