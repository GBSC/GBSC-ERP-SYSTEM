import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaproscopyFsDetailComponent } from './laproscopy-fs-detail.component';

describe('LaproscopyFsDetailComponent', () => {
  let component: LaproscopyFsDetailComponent;
  let fixture: ComponentFixture<LaproscopyFsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaproscopyFsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaproscopyFsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
