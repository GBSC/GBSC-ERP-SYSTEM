import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';
@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    public deprt: any;
    public branch: any;

    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {
        this.branch = await this.SystemAdministrationServiceobj.getBranches();

        this.deprt = await this.SystemAdministrationServiceobj.getDepartments();

    }


    async addDepartment(value) {
        await this.SystemAdministrationServiceobj.addDepartment(value.key);
    }

    async updateDepartment(value) {
        await this.SystemAdministrationServiceobj.updateDepartment(value.key);
    }
    async deletDepartment(value) {
        await this.SystemAdministrationServiceobj.deletDepartment(value.key.departmentId);
    }

}
