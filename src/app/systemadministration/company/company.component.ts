import { Component, OnInit } from '@angular/core';

import { SystemAdministrationService } from '../../systemadministration/service/systemadministration.services';


@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) {

    }

    ngOnInit() {
        let abc = this.SystemAdministrationServiceobj.getCompany();
        this.SystemAdministrationServiceobj.companies;
        console.log(abc);

        console.log(this.SystemAdministrationServiceobj.companies);
    }

    async addCompany(value) {
        console.log(value.key);
        await this.SystemAdministrationServiceobj.addCompany(value.key);
    }


    async updateCompany(value) {
        console.log(value);
        console.log(value.key);
        // console.log(value.key.companyId, value.data);
        // let updatedCompany = value.data;
        // updatedCompany.companyId = value.key.companyId;
        // console.log(updatedCompany);
        await this.SystemAdministrationServiceobj.updateCompany(value.key);
    }


    async deleteCompany(value) {
        console.log(value.key.companyId);

        await this.SystemAdministrationServiceobj.deletCompany(value.key.companyId)
    }

}
