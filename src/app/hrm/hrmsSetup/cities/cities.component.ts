import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';

@Component({
    selector: 'app-cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.css']
})
export class CityComponent implements OnInit {

    public country: any;
    public city: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {

        await this.dataService.getAllCountries();
        this.country = this.dataService.country;
        console.log(this.country);

        await this.dataService.getAllCities();
        this.city = this.dataService.city;
        console.log(this.city);
        // this.dataService.GetAllCities().subscribe((data)=>this.City=data);
    }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addCity(cty) {
        this.dataService.addCity(cty.data);
    }

    EditCity(city) {
        this.dataService.updateCity(city);
    }

    deleteCity(cty) {
        this.dataService.DeleteCity(cty.key);
    }

}