import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStatusDeailReportComponent } from './shop-status-deail-report.component';

describe('ShopStatusDeailReportComponent', () => {
  let component: ShopStatusDeailReportComponent;
  let fixture: ComponentFixture<ShopStatusDeailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopStatusDeailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopStatusDeailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
