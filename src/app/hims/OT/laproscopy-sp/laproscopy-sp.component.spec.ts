import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaproscopySpComponent } from './laproscopy-sp.component';

describe('LaproscopySpComponent', () => {
  let component: LaproscopySpComponent;
  let fixture: ComponentFixture<LaproscopySpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaproscopySpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaproscopySpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
