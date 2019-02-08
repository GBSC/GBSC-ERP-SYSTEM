import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaproscopyFsComponent } from './laproscopy-fs.component';

describe('LaproscopyFsComponent', () => {
  let component: LaproscopyFsComponent;
  let fixture: ComponentFixture<LaproscopyFsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaproscopyFsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaproscopyFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
