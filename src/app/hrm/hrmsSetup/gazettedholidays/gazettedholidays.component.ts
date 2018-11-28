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
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
        this.holiday = await this.dataService.getAllGazettedHolidays();
    }


    addHolidays(holiday) {
        this.dataService.addGazettedHolidays(holiday.data);
        this.holiday = this.dataService.getAllGazettedHolidays();
    }

    Editholiday(hday) {
        this.dataService.updateGazettedHolidays(hday);
    }

    deleteholiday(holidays) {
        this.dataService.DeleteGazettedHolidays(holidays.key);
    }

}