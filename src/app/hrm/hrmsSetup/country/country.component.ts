import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';
@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

    currentCountry: any;
    public countries: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() { 
        await this.dataService.getAllCountries();
        this.countries = this.dataService.country; 

    }


    addNewCountry(Country) {

        this.dataService.addCountry(Country.data)

    }

    EditNewCountry(country) { 

        this.dataService.updateCountry(country);

    }

    getCountryToUpdate(country) {
        this.currentCountry = country;
    }


    deleteCountry(countr) { 
        this.dataService.DeleteCountry(countr.key);
    }




}