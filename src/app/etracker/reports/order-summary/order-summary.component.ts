import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  showHideFilter : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleFilter(){
    this.showHideFilter = !this.showHideFilter;
  }
}
