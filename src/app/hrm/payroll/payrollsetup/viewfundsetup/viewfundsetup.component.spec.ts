import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfundsetupComponent } from './viewfundsetup.component';

describe('ViewfundsetupComponent', () => {
  let component: ViewfundsetupComponent;
  let fixture: ComponentFixture<ViewfundsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfundsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfundsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
