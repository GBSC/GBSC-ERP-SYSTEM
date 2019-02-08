import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtEquipmentComponent } from './ot-equipment.component';

describe('OtEquipmentComponent', () => {
  let component: OtEquipmentComponent;
  let fixture: ComponentFixture<OtEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
