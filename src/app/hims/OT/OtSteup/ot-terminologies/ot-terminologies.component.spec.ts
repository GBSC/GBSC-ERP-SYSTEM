import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtTerminologiesComponent } from './ot-terminologies.component';

describe('OtTerminologiesComponent', () => {
  let component: OtTerminologiesComponent;
  let fixture: ComponentFixture<OtTerminologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtTerminologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtTerminologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
