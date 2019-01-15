import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraSoundPelvisDetailComponent } from './ultra-sound-pelvis-detail.component';

describe('UltraSoundPelvisDetailComponent', () => {
  let component: UltraSoundPelvisDetailComponent;
  let fixture: ComponentFixture<UltraSoundPelvisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltraSoundPelvisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraSoundPelvisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
