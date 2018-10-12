import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';

@Component({
    selector: 'app-bloodgroups',
    templateUrl: './bloodgroups.component.html',
    styleUrls: ['./bloodgroups.component.css']
})
export class BloodGroupComponent implements OnInit {


    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    ngOnInit() {
    }


   
    
}