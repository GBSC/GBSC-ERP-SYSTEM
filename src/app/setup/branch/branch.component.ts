import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../setup/service/setupservices';

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html',
    styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

    public com: any;

    constructor(private SetupServiceobj: SetupService) { }

    async ngOnInit() {
        await this.SetupServiceobj.getCompany();
        this.com = this.SetupServiceobj.companies;
        console.log(this.com);

        await this.SetupServiceobj.getBranches();
        this.SetupServiceobj.branches;
        console.log(this.SetupServiceobj.branches);
    }

    async addBranches(value) {
        console.log(value.key);
        await this.SetupServiceobj.addBranches(value.key);
    }

    async updateBranch(value) {
        console.log(value);
        console.log(value.key);
        await this.SetupServiceobj.updateBranch(value.key);
    }

    async deletBranch(value) {
        console.log(value);
        console.log(value.key);
        await this.SetupServiceobj.deletBranch(value.key.branchId);
    }




}
