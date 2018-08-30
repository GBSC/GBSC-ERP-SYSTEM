import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceDeductionComponent } from './allowance-deduction.component';

describe('AllowanceDeductionComponent', () => {
  let component: AllowanceDeductionComponent;
  let fixture: ComponentFixture<AllowanceDeductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowanceDeductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowanceDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
