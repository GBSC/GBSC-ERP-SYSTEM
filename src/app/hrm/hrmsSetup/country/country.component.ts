import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; 
import { SetupService } from '../services/setup.service';
import { HttpClient } from '@angular/common/http';
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
        // this.loadData();
        await this.dataService.getAllCountries();
        this.countries = this.dataService.country;
        console.log(this.countries);

    }


    addNewCountry(Country) {

        this.dataService.addCountry(Country.data)

    }

    EditNewCountry(country) {
        console.log(country);

        this.dataService.updateCountry(country);

    }

    getCountryToUpdate(country) {
        this.currentCountry = country;
    }


    deleteCountry(countr) {
        console.log(countr);

        this.dataService.DeleteCountry(countr.key);
    }




}