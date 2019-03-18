import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-census-deatil-report',
  templateUrl: './shop-census-deatil-report.component.html',
  styleUrls: ['./shop-census-deatil-report.component.css']
})
export class ShopCensusDeatilReportComponent implements OnInit {

  public Data : [];
// @Input("dayone") dayone : string;
  constructor() { }

  ngOnInit() {
    this.Data= JSON.parse( sessionStorage.getItem("previewData"));
    console.log(this.Data)
    // console.log(this.dayone)
  }

}
