import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraSoundMasterDetailComponent } from './ultra-sound-master-detail.component';

describe('UltraSoundMasterDetailComponent', () => {
  let component: UltraSoundMasterDetailComponent;
  let fixture: ComponentFixture<UltraSoundMasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltraSoundMasterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraSoundMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
