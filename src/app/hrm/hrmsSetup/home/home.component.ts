import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
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

    }

}