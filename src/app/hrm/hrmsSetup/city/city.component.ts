import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HrmsService, SetupService, SystemAdministrationService } from '../../../core';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

    public city: any;
    public updatingModel: any;
    public country: any;
    public company: any;

    constructor(public httpClient: HttpClient,
        public hrmService: HrmsService, public companyService: SystemAdministrationService) { }

    async ngOnInit() {

        this.city = await this.hrmService.getAllCities();

        this.country = await this.hrmService.getAllCountries();

        this.company = await this.companyService.getCompanies();

    }

    async addcity(value) {
        await this.hrmService.addCity(value.data);
        this.city = await this.hrmService.getAllCities();
    }

    UpdatingCity(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
    }

    Updatecity() {
        this.hrmService.updateCity(this.updatingModel)
    }

    deletecity(value) {
        this.hrmService.deleteCity(value.key);
    }

}
