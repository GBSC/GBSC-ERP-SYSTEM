import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxsetupMasterComponent } from './taxsetup-master.component';

describe('TaxsetupMasterComponent', () => {
  let component: TaxsetupMasterComponent;
  let fixture: ComponentFixture<TaxsetupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxsetupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxsetupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
