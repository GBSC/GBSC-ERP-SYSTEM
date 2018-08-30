import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementtransactionComponent } from './incrementtransaction.component';

describe('IncrementtransactionComponent', () => {
  let component: IncrementtransactionComponent;
  let fixture: ComponentFixture<IncrementtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
