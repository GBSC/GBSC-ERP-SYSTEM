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

    constructor(public SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {

        this.deprt = await this.SystemAdministrationServiceobj.getDepartments();

         this.SystemAdministrationServiceobj.getBranches().subscribe(res => {
            this.branch = res
         });
    }


    async addDepartment(value) {
        await this.SystemAdministrationServiceobj.addDepartment(value.key);
        this.deprt = await this.SystemAdministrationServiceobj.getDepartments();
    }

    async updateDepartment(value) {
        await this.SystemAdministrationServiceobj.updateDepartment(value.key);
    }
    async deletDepartment(value) {
        await this.SystemAdministrationServiceobj.deletDepartment(value.key.departmentId);
    }

}
