import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-report',
  templateUrl: './location-report.component.html',
  styleUrls: ['./location-report.component.scss']
})
export class LocationReportComponent implements OnInit {

  showHideFilter : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleFilter(){
    this.showHideFilter = !this.showHideFilter;
  }

}
