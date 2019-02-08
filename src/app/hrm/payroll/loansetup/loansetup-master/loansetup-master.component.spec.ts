import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansetupMasterComponent } from './loansetup-master.component';

describe('LoansetupMasterComponent', () => {
  let component: LoansetupMasterComponent;
  let fixture: ComponentFixture<LoansetupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansetupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansetupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
