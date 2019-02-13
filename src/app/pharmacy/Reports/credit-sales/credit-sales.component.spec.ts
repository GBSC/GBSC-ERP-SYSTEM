import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSalesComponent } from './credit-sales.component';

describe('CreditSalesComponent', () => {
  let component: CreditSalesComponent;
  let fixture: ComponentFixture<CreditSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
