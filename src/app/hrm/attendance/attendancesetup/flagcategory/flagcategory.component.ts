import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-flagcategory',
    templateUrl: './flagcategory.component.html',
    styleUrls: ['./flagcategory.component.scss']
})
export class FlagcategoryComponent implements OnInit {


    public flagcategory: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        this.flagcategory = await this.attendancesetupservice.getFlagCategories();

    }

    async addflagcategory(value) {
        await this.attendancesetupservice.addFlagCategory(value.data);
        this.flagcategory = await this.attendancesetupservice.getFlagCategories();
    }

    async updateflagcategory(value) {
        await this.attendancesetupservice.updateFlagCategory(value);
    }

    async deleteflagcategory(value) {
        await this.attendancesetupservice.DeleteFlagCategory(value.key);
    }

}