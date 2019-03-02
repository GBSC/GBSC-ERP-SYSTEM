import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineRequestDetailComponent } from './medicine-request-detail.component';

describe('MedicineRequestDetailComponent', () => {
  let component: MedicineRequestDetailComponent;
  let fixture: ComponentFixture<MedicineRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineRequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
