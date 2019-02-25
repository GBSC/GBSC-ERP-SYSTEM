import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService, AuthService, HrmsService } from '../../core';
import { Branch } from '../../core/Models/HRM/branch';
import { City } from '../../core/Models/HRM/city';

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html',
    styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
    pattern: any = /^\d{3}-\d{8}$/i;
    public cities: any[] = [];
    public branches: any[] = [];

    constructor(public SystemAdministrationServiceobj: SystemAdministrationService, public hrmService: HrmsService, public authService : AuthService) { }

    async ngOnInit() {

        this.SystemAdministrationServiceobj.getBranchesByComapnyId(this.authService.getUserCompanyId()).subscribe((res : Branch[]) => {
            this.branches = res;
        });

        this.hrmService.GetCitiesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : City[]) => {
            this.cities = res;
        });
    }

    async addBranches(value) {
        console.log(value);
        
        value.key.companyId = this.authService.getUserCompanyId();
        await this.SystemAdministrationServiceobj.addBranches(value.key);
        this.SystemAdministrationServiceobj.getBranchesByComapnyId(this.authService.getUserCompanyId()).subscribe((res : Branch[]) => {
            this.branches = res;
        });
    }

    async updateBranch(value) {
        value.key.companyId = this.authService.getUserCompanyId();
        await this.SystemAdministrationServiceobj.updateBranch(value.key);
    }

    async deletBranch(value) {
        await this.SystemAdministrationServiceobj.deletBranch(value.key.branchId);
    }
}
