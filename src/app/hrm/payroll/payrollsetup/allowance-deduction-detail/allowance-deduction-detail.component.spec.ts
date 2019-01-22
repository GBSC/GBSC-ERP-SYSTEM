import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceDeductionDetailComponent } from './allowance-deduction-detail.component';

describe('AllowanceDeductionDetailComponent', () => {
  let component: AllowanceDeductionDetailComponent;
  let fixture: ComponentFixture<AllowanceDeductionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowanceDeductionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowanceDeductionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
