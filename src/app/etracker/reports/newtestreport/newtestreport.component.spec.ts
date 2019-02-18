import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtestreportComponent } from './newtestreport.component';

describe('NewtestreportComponent', () => {
  let component: NewtestreportComponent;
  let fixture: ComponentFixture<NewtestreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtestreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtestreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
