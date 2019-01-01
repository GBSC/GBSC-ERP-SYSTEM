import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, DashboardService, eTrackerUserService } from '../../core';
import { Employee } from '../../core/Models/HRM/employee';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public dataSource: any = [];
    public availableModules = [];
    private User : Employee;
    constructor(service: DashboardService, public router: Router, public accountService: AuthService, private UserService : eTrackerUserService) {
        this.dataSource = service.getCompanies();
    }


    ngOnInit() {
        this.UserService.getUser(this.accountService.getUserId()).subscribe(res => {
            this.User = res;
            console.log(res, this.User);
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
