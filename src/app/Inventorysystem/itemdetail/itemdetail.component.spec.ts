import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailComponent } from './itemdetail.component';

describe('ItemdetailComponent', () => {
  let component: ItemdetailComponent;
  let fixture: ComponentFixture<ItemdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
