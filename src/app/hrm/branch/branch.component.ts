import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html',
    styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
    pattern: any = /^\d{11}$/i;
    public com: any;
    public branches: any;

    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {

        this.branches = await this.SystemAdministrationServiceobj.getBranches();

        this.com = await this.SystemAdministrationServiceobj.getCompanies();
    }

    async addBranches(value) {
        await this.SystemAdministrationServiceobj.addBranches(value.key);
        this.branches = await this.SystemAdministrationServiceobj.getBranches();
    }

    async updateBranch(value) {
        await this.SystemAdministrationServiceobj.updateBranch(value.key);
    }

    async deletBranch(value) {
        await this.SystemAdministrationServiceobj.deletBranch(value.key.branchId);
    }




}
