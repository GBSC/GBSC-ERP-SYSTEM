import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HrmsService } from '../services/hrms.service';
import { Roster } from '../models/roster,interface';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-roster',
    templateUrl: './roster.component.html',

    styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {


    public roster: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        await this.dataService.getAllRosters();
        this.roster = this.dataService.roster;
        // console.log(this.roster);
        // this.dataService.getAllRosters().subscribe((data)=>this.roster=data);
    }

    addNewRoster(roster) {
        this.dataService.addRoster(roster.data);
    }

    RosterEdit(rostr) {
        this.dataService.updateRoster(rostr);
    }

    deleteRoster(rstr) {
        this.dataService.DeleteRoster(rstr.key);
    }
}