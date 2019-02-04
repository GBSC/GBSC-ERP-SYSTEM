import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopsalarydetailComponent } from './stopsalarydetail.component';

describe('StopsalarydetailComponent', () => {
  let component: StopsalarydetailComponent;
  let fixture: ComponentFixture<StopsalarydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopsalarydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopsalarydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
