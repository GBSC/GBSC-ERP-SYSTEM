import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
    public role: any;
    public departments: any;
    public featuremodule: any;

    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {



        this.departments = await this.SystemAdministrationServiceobj.getDepartments();

        this.role = await this.SystemAdministrationServiceobj.getRoles();

        this.featuremodule = await this.SystemAdministrationServiceobj.GetmyModulesWithFeatures();

    }

    async addRole(value) {
        await this.SystemAdministrationServiceobj.addRole(value.key)
    }


    async updateRole(value) {
        await this.SystemAdministrationServiceobj.updateRole(value.key);
    }

    async deletRole(value) {
        await this.SystemAdministrationServiceobj.deletRole(value.key.roleId);
    }
}
