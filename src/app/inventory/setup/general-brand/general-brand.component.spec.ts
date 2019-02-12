import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBrandComponent } from './general-brand.component';

describe('GeneralBrandComponent', () => {
  let component: GeneralBrandComponent;
  let fixture: ComponentFixture<GeneralBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
