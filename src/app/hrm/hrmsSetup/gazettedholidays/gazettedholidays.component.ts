import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-gazettedholidays',
    templateUrl: './gazettedholidays.component.html',
    styleUrls: ['./gazettedholidays.component.css']
})
export class GazettedHolidaysComponent implements OnInit {

    public holiday: any;
    public modelUpdating: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }


    async ngOnInit() {
        this.holiday = await this.dataService.getAllGazettedHolidays();
    }


    async addHolidays(holiday) {
        await this.dataService.addGazettedHolidays(holiday.data);
        this.holiday = await this.dataService.getAllGazettedHolidays();
    }

    Editholiday(value) {
        this.modelUpdating = {...value.oldData, ...value.newData};
    }

    async updatingholiday() {
        await this.dataService.updateGazettedHolidays(this.modelUpdating);
    }

    async deleteholiday(holidays) {
        await this.dataService.DeleteGazettedHolidays(holidays.key);
    }

}