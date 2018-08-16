import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShdComponent } from './shd.component';

describe('ShdComponent', () => {
  let component: ShdComponent;
  let fixture: ComponentFixture<ShdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
