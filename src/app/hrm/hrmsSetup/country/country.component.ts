import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetupService, HrmsService } from '../../../core';
@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

    updatingModel: any;
    public countries: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService, public hrmService: HrmsService) { }

    async ngOnInit() {

        this.countries = await this.hrmService.getAllCountries();
    }


    addNewCountry(Country) {
        this.hrmService.addCountry(Country.data)
        this.countries = this.hrmService.getAllCountries();
    }

    UpdatingCountry(value) {

        this.updatingModel = { ...value.oldData, ...value.newData };
    }

    UpdateCountry() {
        this.hrmService.updateCountry(this.updatingModel);
    }

    deleteCountry(countr) {
        this.hrmService.DeleteCountry(countr.key);
    }




}