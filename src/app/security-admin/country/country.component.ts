import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HrmsService } from '../../../app/core/Services/HRM/Setup/hrms.service';
import { AuthService } from '../../core';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

    public updatingModel: any;
    public countries: any;

    constructor(public httpClient: HttpClient, public hrmService: HrmsService, public authService : AuthService) { }

    async ngOnInit() {

        this.hrmService.getCountriesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : any[]) => {
            this.countries = res;
        });
    }


    async addNewCountry(Country) {
        // console.log(Country);
        Country.data.companyId = this.authService.getUserCompanyId();
        await this.hrmService.addCountry(Country.data);
        this.hrmService.getCountriesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : any[]) => {
            this.countries = res;
        });
    }

    UpdatingCountry(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
        this.updatingModel.companyId = this.authService.getUserCompanyId();
    }

    async UpdateCountry() {
        await this.hrmService.updateCountry(this.updatingModel);
    }

    async deleteCountry(countr) {
        await this.hrmService.DeleteCountry(countr.key);
    }




}