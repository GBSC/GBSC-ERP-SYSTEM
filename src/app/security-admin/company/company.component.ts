import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';


@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    // public companies: any;
    // public updatingcompany: any;
    constructor(public SystemAdministrationServiceobj: SystemAdministrationService) {

    }

    async ngOnInit() {

        // this.companies = await this.SystemAdministrationServiceobj.getCompanies();
    }

    async addCompany(value) {
        // await this.SystemAdministrationServiceobj.addCompany(value.data);
        // this.companies = await this.SystemAdministrationServiceobj.getCompanies();
    }


    async updatingCompany(value) {
        // this.updatingcompany = { ...value.oldData, ...value.newData };
    }

    async updateCompany() {
        // await this.SystemAdministrationServiceobj.updateCompany(this.updatingcompany);
    }


    async deleteCompany(value) {
        // await this.SystemAdministrationServiceobj.deletCompany(value.key);
    }

}
