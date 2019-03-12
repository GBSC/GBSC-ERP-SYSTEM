import { NgModule, Component, OnInit } from '@angular/core';
import { SystemAdministrationService, UserData } from '../../../../src/app/core/Services/HRM/systemadministration.services';
import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  userData: UserData[];

  constructor(service: SystemAdministrationService) {
    this.userData = service.getUserData();
  }


  ngOnInit() {
  }
}
