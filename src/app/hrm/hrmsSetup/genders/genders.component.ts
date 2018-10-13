import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-genders',
    templateUrl: './genders.component.html',
    styleUrls: ['./genders.component.css']
})
export class GenderComponent implements OnInit {


    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    ngOnInit() {
    }



}
