import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../setup/service/setupservices';
@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    public deprt: any;
    constructor(private SetupServiceobj: SetupService) { }

    async ngOnInit() {
        await this.SetupServiceobj.getBranches();
        this.deprt = this.SetupServiceobj.branches;
        console.log(this.deprt);

        await this.SetupServiceobj.getDepartments();
        this.SetupServiceobj.departments;
        console.log(this.SetupServiceobj.departments);

    }


    async addDepartment(value) {
        console.log(value.key);
        await this.SetupServiceobj.addDepartment(value.key);
    }

    async updateDepartment(value) {
        console.log(value);
        console.log(value.key);
        await this.SetupServiceobj.updateDepartment(value.key);
    }
    async deletDepartment(value) {
        console.log(value);
        console.log(value.key);
        await this.SetupServiceobj.deletDepartment(value.key.departmentId);
    }

}
