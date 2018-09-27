import { Component, OnInit } from '@angular/core';
import { Company, DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { AccountService } from '../../account/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dataSource: any = [];
  public availableModules = [];
  constructor(service: DashboardService, private router: Router, private accountService: AccountService) {
    this.dataSource = service.getCompanies();
  }


  ngOnInit() {
    this.availableModules = this.accountService.getAvailableModules();
    this.dataSource = this.accountService.accessibleModules;

    console.log(this.dataSource);

  }

  selectionChanged(e) {

    let route: any;

    e.component.collapseAll(-1);
    route = this.availableModules.find(m => {
      return m.module === e.selectedRowsData[0].Description;
    });

    this.router.navigate([`${route.route}`]);

  }

}
