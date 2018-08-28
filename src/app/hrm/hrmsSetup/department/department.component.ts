import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';
import { Department } from '../models/department.interface';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    public departments: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    //  logEvent(department) {
    //       this.events.unshift(department);
    //   }

    async ngOnInit() {
        // this.dataService.getAllDepartments().subscribe((data)=>this.departments=data);
        await this.dataService.getAllDepartments();
        this.departments = this.dataService.department;
        console.log(this.departments);

    }

    addNewDep() {

    }
} 