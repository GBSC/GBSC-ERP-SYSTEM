import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollyearComponent } from './payrollyear.component';

describe('PayrollyearComponent', () => {
  let component: PayrollyearComponent;
  let fixture: ComponentFixture<PayrollyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
