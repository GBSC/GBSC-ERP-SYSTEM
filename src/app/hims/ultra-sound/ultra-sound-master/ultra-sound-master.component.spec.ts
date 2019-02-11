import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraSoundMasterComponent } from './ultra-sound-master.component';

describe('UltraSoundMasterComponent', () => {
  let component: UltraSoundMasterComponent;
  let fixture: ComponentFixture<UltraSoundMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltraSoundMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraSoundMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
