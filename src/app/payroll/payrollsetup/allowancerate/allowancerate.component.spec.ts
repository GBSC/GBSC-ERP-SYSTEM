import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancerateComponent } from './allowancerate.component';

describe('AllowancerateComponent', () => {
  let component: AllowancerateComponent;
  let fixture: ComponentFixture<AllowancerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowancerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowancerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
