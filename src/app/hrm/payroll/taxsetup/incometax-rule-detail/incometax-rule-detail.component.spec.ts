import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncometaxRuleDetailComponent } from './incometax-rule-detail.component';

describe('IncometaxRuleDetailComponent', () => {
  let component: IncometaxRuleDetailComponent;
  let fixture: ComponentFixture<IncometaxRuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncometaxRuleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncometaxRuleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
