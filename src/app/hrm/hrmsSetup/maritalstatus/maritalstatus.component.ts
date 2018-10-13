import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


import { BehaviorSubject } from 'rxjs';
import { SetupService } from '../../../core';
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
        await this.dataService.getAllMaritalStatus();
        this.mstatus = this.dataService.maritalstatus;
    }
   

}