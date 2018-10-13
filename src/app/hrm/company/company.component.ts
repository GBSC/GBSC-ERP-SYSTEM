import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';


@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    public companies: any;
    public updatingcompany: any;
    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) {

    }

    async ngOnInit() {
        this.companies = await this.SystemAdministrationServiceobj.getCompanies();


    }

    async addCompany(value) {
        await this.SystemAdministrationServiceobj.addCompany(value.data);
    }


<<<<<<< HEAD
    async updateCompany(value) {
        console.log(value);
        console.log(value.key);
        await this.SystemAdministrationServiceobj.updateCompany(value.key);
=======
    async updatingCompany(value) {
        this.updatingcompany = { ...value.oldData, ...value.newData };
    }

    async updateCompany() {
        await this.SystemAdministrationServiceobj.updateCompany(this.updatingcompany);
>>>>>>> master
    }


    async deleteCompany(value) {
        await this.SystemAdministrationServiceobj.deletCompany(value.key)
    }

}
