import { Component, OnInit } from '@angular/core';

import { SetupService } from '../../setup/service/setupservices';


@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    constructor(public serviceobj: SetupService) {

    }

    ngOnInit() {
        let abc = this.serviceobj.getCompany();
        this.serviceobj.companies;
        console.log(abc);

        console.log(this.serviceobj.companies);
    }

    async addCompany(value) {
        console.log(value.key);
        await this.serviceobj.addCompany(value.key);
    }


    async updateCompany(value) {
        console.log(value);
        console.log(value.key);
        // console.log(value.key.companyId, value.data);
        // let updatedCompany = value.data;
        // updatedCompany.companyId = value.key.companyId;
        // console.log(updatedCompany);
        await this.serviceobj.updateCompany(value.key);
    }


    async deleteCompany(value) {
        console.log(value.key.companyId);

        await this.serviceobj.deletCompany(value.key.companyId)
    }

}
