import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';


@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    public companies: any;
    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) {

    }

    async ngOnInit() {
        this.companies = await this.SystemAdministrationServiceobj.getCompanies();
        //this.companies = this.SystemAdministrationServiceobj.companies;
        console.log(this.companies);

    }

    async addCompany(value) {
        console.log(value.key);
        await this.SystemAdministrationServiceobj.addCompany(value.key);
    }


    async updateCompany(value) {
        console.log(value);
        console.log(value.key);
        await this.SystemAdministrationServiceobj.updateCompany(value.key);
    }


    async deleteCompany(value) {
        console.log(value.key.companyId);

        await this.SystemAdministrationServiceobj.deletCompany(value.key.companyId)
    }

}
