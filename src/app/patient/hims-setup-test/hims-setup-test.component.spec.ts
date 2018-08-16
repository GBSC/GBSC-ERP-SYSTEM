import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HimsSetupTestComponent } from './hims-setup-test.component';

describe('HimsSetupTestComponent', () => {
  let component: HimsSetupTestComponent;
  let fixture: ComponentFixture<HimsSetupTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HimsSetupTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HimsSetupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
