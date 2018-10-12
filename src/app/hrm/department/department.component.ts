import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';
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

        await this.SystemAdministrationServiceobj.getDepartments();
        this.SystemAdministrationServiceobj.departments;

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
