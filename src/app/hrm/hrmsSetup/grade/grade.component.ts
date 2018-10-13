import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-grade',
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.css']
})
export class GradesComponent implements OnInit {
    public grade: any;


    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
       

    }

}