import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCensusDeatilReportComponent } from './shop-census-deatil-report.component';

describe('ShopCensusDeatilReportComponent', () => {
  let component: ShopCensusDeatilReportComponent;
  let fixture: ComponentFixture<ShopCensusDeatilReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCensusDeatilReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCensusDeatilReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
