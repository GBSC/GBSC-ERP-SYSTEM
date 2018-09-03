import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsetupComponent } from './fundsetup.component';

describe('FundsetupComponent', () => {
  let component: FundsetupComponent;
  let fixture: ComponentFixture<FundsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
