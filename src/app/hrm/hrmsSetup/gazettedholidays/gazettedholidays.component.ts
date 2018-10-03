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
        await this.dataService.getAllGazettedHolidays();
        this.holiday = this.dataService.gazetholidays;
        console.log(this.holiday);
        // this.dataService.getAllGazettedHolidays().subscribe((data)=>this.GazettedHolidays=data);
    }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addHolidays(holiday) {
        this.dataService.addGazettedHolidays(holiday.data);
    }

    Editholiday(hday) {
        this.dataService.updateGazettedHolidays(hday);
    }

    deleteholiday(holidays) {
        this.dataService.DeleteGazettedHolidays(holidays.key);
    }

}