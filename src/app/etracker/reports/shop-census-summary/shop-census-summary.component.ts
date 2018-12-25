import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-census-summary',
  templateUrl: './shop-census-summary.component.html',
  styleUrls: ['./shop-census-summary.component.scss']
})
export class ShopCensusSummaryComponent implements OnInit {
  showHideFilter : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleFilter(){
    this.showHideFilter = !this.showHideFilter;
  }
}
