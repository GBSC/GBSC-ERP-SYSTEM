import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../systemadministration/service/systemadministration.services';

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html',
    styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

    public com: any;

    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {
        await this.SystemAdministrationServiceobj.getCompany();
        this.com = this.SystemAdministrationServiceobj.companies;
        console.log(this.com);

        await this.SystemAdministrationServiceobj.getBranches();
        this.SystemAdministrationServiceobj.branches;
        console.log(this.SystemAdministrationServiceobj.branches);
    }

    async addBranches(value) {
        console.log(value.key);
        await this.SystemAdministrationServiceobj.addBranches(value.key);
    }

    async updateBranch(value) {
        console.log(value);
        console.log(value.key);
        await this.SystemAdministrationServiceobj.updateBranch(value.key);
    }

    async deletBranch(value) {
        console.log(value);
        console.log(value.key);
        await this.SystemAdministrationServiceobj.deletBranch(value.key.branchId);
    }




}
