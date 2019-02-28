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
    public updatingModel: any;

    constructor(public SystemAdministrationServiceobj: SystemAdministrationService, public authService : AuthService) { }

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

    updatingDepartment(value){

        this.updatingModel = {...value.oldData, ...value.newData};
        this.updatingModel.companyId = this.authService.getUserCompanyId(); 
    }

    async updateDepartment() { 
        
        await this.SystemAdministrationServiceobj.updateDepartment(this.updatingModel);
    }
    async deletDepartment(value) {
        console.log(value);
        
        // await this.SystemAdministrationServiceobj.deletDepartment(value.key.departmentId);
    }

}
