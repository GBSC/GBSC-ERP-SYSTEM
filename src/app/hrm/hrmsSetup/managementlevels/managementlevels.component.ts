import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ManagementLevel } from '../models/managementlevel,interface';

@Component({
    selector: 'app-managementlevels',
    templateUrl: './managementlevels.component.html',
    styleUrls: ['./managementlevels.component.css']
})
export class ManagementLevelsComponent implements OnInit {


    public managlevel: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {
        await this.dataService.getAllManagementlevels();
        this.managlevel = this.dataService.managementlevel;
        // console.log(this.managlevel);
        // this.dataService.getAllManagementlevels().subscribe((data)=>this.managementlevels=data);
    }


    addNewManagementLevels(mnglevel) {

        this.dataService.addManagementLevel(mnglevel.data);
    }

    EditManagementLevel(manglevel) {

        this.dataService.updateManagementLevel(manglevel);
    }

    deleteManagementLevel(mng) {

        this.dataService.DeleteManagementLevel(mng.key);
    }
}