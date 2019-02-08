import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysetupMasterComponent } from './companysetup-master.component';

describe('CompanysetupMasterComponent', () => {
  let component: CompanysetupMasterComponent;
  let fixture: ComponentFixture<CompanysetupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanysetupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanysetupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
