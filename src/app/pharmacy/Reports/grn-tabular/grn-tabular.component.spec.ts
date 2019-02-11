import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnTabularComponent } from './grn-tabular.component';

describe('GrnTabularComponent', () => {
  let component: GrnTabularComponent;
  let fixture: ComponentFixture<GrnTabularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnTabularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnTabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
