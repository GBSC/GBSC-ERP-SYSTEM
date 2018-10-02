import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Component({
    selector: 'app-bloodgroups',
    templateUrl: './bloodgroups.component.html',
    styleUrls: ['./bloodgroups.component.css']
})
export class BloodGroupComponent implements OnInit {


    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    ngOnInit() {
        // this.dataService.getAllBloodGroups().subscribe((data)=>this.bloodgroups=data);
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

    addbldgrops() {

    }

    Editbldgrops() {

    }

    deletebldgrops() {
    }
}