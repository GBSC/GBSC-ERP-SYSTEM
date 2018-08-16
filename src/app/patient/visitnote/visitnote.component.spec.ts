import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitnoteComponent } from './visitnote.component';

describe('VisitnoteComponent', () => {
  let component: VisitnoteComponent;
  let fixture: ComponentFixture<VisitnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
