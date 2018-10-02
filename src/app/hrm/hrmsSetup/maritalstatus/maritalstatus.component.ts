import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
 

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Component({
    selector: 'app-maritalstatus',
    templateUrl: './maritalstatus.component.html',
    styleUrls: ['./maritalstatus.component.css']
})
export class MaritalStatusComponent implements OnInit {
    public mstatus: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
        // this.dataService.getAllMaritalStatus().subscribe((data)=>this.maritalstatus=data);
        await this.dataService.getAllMaritalStatus();
        this.mstatus = this.dataService.maritalstatus;
        //  console.log(this.mstatus);
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

    addNew() {

    }

    startEdit() {

    }

    deleteMstatus() {

    }


}