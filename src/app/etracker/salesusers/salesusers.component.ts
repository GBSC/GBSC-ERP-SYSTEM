import { Component, OnInit } from '@angular/core';
import { eTrackerUserService, AuthService } from '../../../app/core';

@Component({
    selector: 'app-salesusers',
    templateUrl: './salesusers.component.html',
    styleUrls: ['./salesusers.component.scss']
})
export class SalesusersComponent implements OnInit {

    public companyId: any;
    public users: any;

    constructor(private authService: AuthService, private userService: eTrackerUserService) {

        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.userService.getSalesUsersByCompany(this.companyId).subscribe(u => {

            this.users = u;
        })
    }

}
