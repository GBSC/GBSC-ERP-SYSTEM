import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';
import { Religion } from '../models/religion,interface';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-religion',
    templateUrl: './religion.component.html',
    styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {

    public religion: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }
 
    async ngOnInit() {
        await this.dataService.getAllReligions();
        this.religion = this.dataService.religion;
 
    }


    addNewreligion(religon) {
        this.dataService.addReligion(religon.data);
    }

<<<<<<< HEAD
    updatereligion(relign) {
        console.log(relign);
        this.dataService.updateReligion(relign);
=======
    updatereligion(religon) {
        this.dataService.updateReligion(religon);
>>>>>>> 101e24f1c0723e12b4993caf674e3b62e636c45a
    }

    deletereligion(religon) {
        this.dataService.DeleteReligion(religon.key);
    }

}