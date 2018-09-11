import { Component, OnInit } from '@angular/core';
import { Company, DashboardService } from '../dashboard.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AccountService } from '../../account/service.service';
=======
>>>>>>> 101e24f1c0723e12b4993caf674e3b62e636c45a

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
<<<<<<< HEAD
  public dataSource: any = [];
  public availableModules = [];
  constructor(service: DashboardService, private router: Router, private accountService: AccountService) {
    this.dataSource = service.getCompanies();
  }


  ngOnInit() {
    this.availableModules = this.accountService.getAvailableModules();
    this.dataSource = this.accountService.accessibleModules;

  }

  selectionChanged(e) {

    let route: any;

    e.component.collapseAll(-1);
    route = this.availableModules.find(m => {
      return m.module === e.selectedRowsData[0].Description; 
    });

    this.router.navigate([`${route.route}`]);
    
=======
  dataSource: Company[];

  constructor(service: DashboardService) {
      this.dataSource = service.getCompanies();
  }
 

  ngOnInit() {
>>>>>>> 101e24f1c0723e12b4993caf674e3b62e636c45a
  }

}
