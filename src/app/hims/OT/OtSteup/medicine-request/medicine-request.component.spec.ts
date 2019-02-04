import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineRequestComponent } from './medicine-request.component';

describe('MedicineRequestComponent', () => {
  let component: MedicineRequestComponent;
  let fixture: ComponentFixture<MedicineRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
