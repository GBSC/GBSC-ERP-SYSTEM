import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetupService, HrmsService } from '../../../core';
@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

    currentCountry: any;
    public countries: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService, public hrmService: HrmsService) { }

    async ngOnInit() {

        this.countries = await this.hrmService.getAllCountries();
    }


    addNewCountry(Country) {

        this.hrmService.addCountry(Country.data)

    }

    EditNewCountry(country) {

        this.hrmService.updateCountry(country);
    }

    getCountryToUpdate(country) {
        this.currentCountry = country;
    }


    deleteCountry(countr) {
        this.hrmService.DeleteCountry(countr.key);
    }




}