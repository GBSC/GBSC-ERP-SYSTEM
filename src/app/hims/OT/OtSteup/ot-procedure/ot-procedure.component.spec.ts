import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtProcedureComponent } from './ot-procedure.component';

describe('OtProcedureComponent', () => {
  let component: OtProcedureComponent;
  let fixture: ComponentFixture<OtProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
