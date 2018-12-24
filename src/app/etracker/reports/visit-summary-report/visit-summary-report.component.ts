import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-summary-report',
  templateUrl: './visit-summary-report.component.html',
  styleUrls: ['./visit-summary-report.component.scss']
})
export class VisitSummaryReportComponent implements OnInit {
  showHideFilter : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleFilter(){
    this.showHideFilter = !this.showHideFilter;
  }
}
