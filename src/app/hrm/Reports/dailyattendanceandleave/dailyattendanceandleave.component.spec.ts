import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyattendanceandleaveComponent } from './dailyattendanceandleave.component';

describe('DailyattendanceandleaveComponent', () => {
  let component: DailyattendanceandleaveComponent;
  let fixture: ComponentFixture<DailyattendanceandleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyattendanceandleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyattendanceandleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
