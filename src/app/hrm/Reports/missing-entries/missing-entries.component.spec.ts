import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingEntriesComponent } from './missing-entries.component';

describe('MissingEntriesComponent', () => {
  let component: MissingEntriesComponent;
  let fixture: ComponentFixture<MissingEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
