import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraSoundPelvisComponent } from './ultra-sound-pelvis.component';

describe('UltraSoundPelvisComponent', () => {
  let component: UltraSoundPelvisComponent;
  let fixture: ComponentFixture<UltraSoundPelvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltraSoundPelvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraSoundPelvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
