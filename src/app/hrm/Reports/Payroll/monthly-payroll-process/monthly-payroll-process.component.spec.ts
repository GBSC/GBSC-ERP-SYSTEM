import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPayrollProcessComponent } from './monthly-payroll-process.component';

describe('MonthlyPayrollProcessComponent', () => {
  let component: MonthlyPayrollProcessComponent;
  let fixture: ComponentFixture<MonthlyPayrollProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPayrollProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPayrollProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
