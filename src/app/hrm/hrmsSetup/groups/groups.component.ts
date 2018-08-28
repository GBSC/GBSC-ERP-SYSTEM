import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Group } from '../models/group,interface';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css']
})
export class GroupComponent implements OnInit {

    public group: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {

        await this.dataService.getAllGroups();
        this.group = this.dataService.group;
        // console.log(this.group);
        // this.dataService.getAllGroups().subscribe((data)=>this.groups=data);
    }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addNewGroups(grp) {
        this.dataService.addGroup(grp.data);
    }

    EditGroup(grop) {
        this.dataService.updateGroup(grop);
    }

    deleteGroup(grup) {
        this.dataService.DeleteGroup(grup.key);
    }

}