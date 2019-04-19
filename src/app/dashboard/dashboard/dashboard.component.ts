import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, DashboardService, eTrackerUserService } from '../../core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public dataSource: any = [];
    public availableModules = [];
    public User : any;
    constructor(service: DashboardService, public router: Router, public accountService: AuthService, public UserService : eTrackerUserService) {
        this.dataSource = service.getCompanies();
    }


    ngOnInit() {
        this.UserService.getUser(this.accountService.getUserId()).subscribe(res => {
            this.User = res;
         });
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

    }

}
