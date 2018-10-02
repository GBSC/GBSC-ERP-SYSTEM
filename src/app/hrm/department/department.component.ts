import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../systemadministration/service/systemadministration.services';
@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    public deprt: any;
    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {
        await this.SystemAdministrationServiceobj.getBranches();
        this.deprt = this.SystemAdministrationServiceobj.branches;
        console.log(this.deprt);

        await this.SystemAdministrationServiceobj.getDepartments();
        this.SystemAdministrationServiceobj.departments;
        console.log(this.SystemAdministrationServiceobj.departments);

    }


    async addDepartment(value) {
        console.log(value.key);
        await this.SystemAdministrationServiceobj.addDepartment(value.key);
    }

    async updateDepartment(value) {
        console.log(value);
        console.log(value.key);
        await this.SystemAdministrationServiceobj.updateDepartment(value.key);
    }
    async deletDepartment(value) {
        console.log(value);
        console.log(value.key);
        await this.SystemAdministrationServiceobj.deletDepartment(value.key.departmentId);
    }

}
