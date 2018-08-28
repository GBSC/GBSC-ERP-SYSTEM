import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';
import { Department } from '../models/department.interface';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Shift } from '../models/shift,interface';


@Component({
    selector: 'app-shift',
    templateUrl: './shift.component.html',
    styleUrls: ['./shift.component.css']
})

export class ShiftComponent implements OnInit {

    public shift: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {
        // this.dataService.getAllShifts().subscribe((data)=>this.shift=data);
        await this.dataService.getAllShifts();
        this.shift = this.dataService.shift;
        console.log(this.shift);
    }

    addNewshift(shft) {
        this.dataService.addShift(shft.data);
    }

    Editshift(shift) {
        this.dataService.updateShift(shift);
    }

    deleteshift(shf) {
        this.dataService.DeleteShift(shf.key);
    }

}