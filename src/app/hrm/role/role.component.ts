import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../systemadministration/service/systemadministration.services';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
    public role: any;
    public featuremodule: any;
    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) { }

    async  ngOnInit() {



        await this.SystemAdministrationServiceobj.getDepartments();
        this.role = this.SystemAdministrationServiceobj.departments;
        console.log(this.role);

        await this.SystemAdministrationServiceobj.getRoles();
        let y = this.SystemAdministrationServiceobj.roles;
        console.log(y);




        await this.SystemAdministrationServiceobj.GetmyModulesWithFeatures();
        this.featuremodule = this.SystemAdministrationServiceobj.data
        console.log(this.featuremodule);


    }

    async addRole(value) {
        console.log(value);
        await this.SystemAdministrationServiceobj.addRole(value.key)

    }


    async updateRole(value) {
        console.log(value.key);
        await this.SystemAdministrationServiceobj.updateRole(value.key);
    }

    async deletRole(value) {
        console.log(value);
        console.log(value.key);
        await this.SystemAdministrationServiceobj.deletRole(value.key.roleId);
    }
}
