import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuityslabComponent } from './gratuityslab.component';

describe('GratuityslabComponent', () => {
  let component: GratuityslabComponent;
  let fixture: ComponentFixture<GratuityslabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratuityslabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratuityslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
