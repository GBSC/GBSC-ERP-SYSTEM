import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxsetup-master',
  templateUrl: './taxsetup-master.component.html',
  styleUrls: ['./taxsetup-master.component.css']
})
export class TaxsetupMasterComponent implements OnInit {

  tabs: string[] = ['Tax Year', 'Income Tax Rules', 'Tax Adjustment Reason', 'Tax Benefit', 'Taxable Income Adjustment', 'Tax Relief', 'Tax Schedule'];
 selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
