import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Gender } from '../models/gender,interface';

@Component({
    selector: 'app-genders',
    templateUrl: './genders.component.html',
    styleUrls: ['./genders.component.css']
})
export class GenderComponent implements OnInit {


    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    ngOnInit() {
        //  this.dataService.GetAllGender().subscribe((data)=>this.Gender=data);
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

    addgndr() {

    }

    Editgndr() {

    }

    deletegndr() {

    }
}
