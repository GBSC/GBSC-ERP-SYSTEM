import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonologistComponent } from './sonologist.component';

describe('SonologistComponent', () => {
  let component: SonologistComponent;
  let fixture: ComponentFixture<SonologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
