import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRosterExcelsheetComponent } from './assign-roster-excelsheet.component';

describe('AssignRosterExcelsheetComponent', () => {
  let component: AssignRosterExcelsheetComponent;
  let fixture: ComponentFixture<AssignRosterExcelsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRosterExcelsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRosterExcelsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
