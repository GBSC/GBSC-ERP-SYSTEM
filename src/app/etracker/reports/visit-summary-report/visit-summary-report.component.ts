import { Component, OnInit } from '@angular/core';
import { AuthService, InventorysystemService } from '../../../../app/core';

@Component({
  selector: 'app-visit-summary-report',
  templateUrl: './visit-summary-report.component.html',
  styleUrls: ['./visit-summary-report.component.scss']
})
export class VisitSummaryReportComponent implements OnInit {
  showHideFilter : boolean = false;
  public userLevel : string;

  constructor(public authService : AuthService, public inventoryService : InventorysystemService) {
    this.userLevel = this.authService.getUserLevel();
    console.log(this.userLevel);
   }

  ngOnInit() {
  }
  toggleFilter(){
    this.showHideFilter = !this.showHideFilter;
  }
}
