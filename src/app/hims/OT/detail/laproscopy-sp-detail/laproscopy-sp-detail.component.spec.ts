import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaproscopySpDetailComponent } from './laproscopy-sp-detail.component';

describe('LaproscopySpDetailComponent', () => {
  let component: LaproscopySpDetailComponent;
  let fixture: ComponentFixture<LaproscopySpDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaproscopySpDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaproscopySpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
