import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService, AuthService } from '../../core';
import { Department } from '../../core/Models/HRM/department';
import { Branch } from '../../core/Models/HRM/branch';
@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    public deprt: any;
    public branch: any;

    constructor(public SystemAdministrationServiceobj: SystemAdministrationService, private authService : AuthService) { }

    async ngOnInit() {

        this.SystemAdministrationServiceobj.getDepartmentsByCompanyId(this.authService.getUserCompanyId()).subscribe((res : Department[]) => {
            this.deprt = res;
        });

        this.SystemAdministrationServiceobj.getBranchesByComapnyId(this.authService.getUserCompanyId()).subscribe((res : Branch[]) => {
            this.branch = res;
        });
    }


    async addDepartment(value) {
        // console.log(value);
        value.key.companyId = this.authService.getUserCompanyId();
        await this.SystemAdministrationServiceobj.addDepartment(value.key);
        this.SystemAdministrationServiceobj.getDepartmentsByCompanyId(this.authService.getUserCompanyId()).subscribe((res : Department[]) => {
            this.deprt = res;
        });
    }

    async updateDepartment(value) {
        value.key.companyId = this.authService.getUserCompanyId();
        await this.SystemAdministrationServiceobj.updateDepartment(value.key);
    }
    async deletDepartment(value) {
        await this.SystemAdministrationServiceobj.deletDepartment(value.key.departmentId);
    }

}
