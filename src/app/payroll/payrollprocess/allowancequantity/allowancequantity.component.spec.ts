import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancequantityComponent } from './allowancequantity.component';

describe('AllowancequantityComponent', () => {
  let component: AllowancequantityComponent;
  let fixture: ComponentFixture<AllowancequantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowancequantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowancequantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
