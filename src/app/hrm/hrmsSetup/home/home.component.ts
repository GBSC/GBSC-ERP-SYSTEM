import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';
import { Country } from '../models/country,interface';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HrmSetupHomeComponent implements OnInit {

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    ngOnInit() {
        // this.loadData();
    }


    // GetAllCountries(){
    //   this.dashboardService.getAllContries()
    //   .subscribe((result : Country) => {
    //      this.countries = result
    //   },
    //   error => {
    //     console.log(error);
    //     //this.notificationService.printErrorMessage(error);
    //   });
    // }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addNewCountry() {

    }

    EditNewCountry() {

    }


    deleteNewCountry() {
    }


}