import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-flagvalue',
    templateUrl: './flagvalue.component.html',
    styleUrls: ['./flagvalue.component.scss']
})
export class FlagvalueComponent implements OnInit {


    public flagvalue: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

     ngOnInit() {

         this.attendancesetupservice.getFlagValues().subscribe(resp =>{
            this.flagvalue = resp
         });
    }

     addflagvalue(value) {
        this.attendancesetupservice.addFlagValue(value.data).subscribe(r => {console.log(r); });
        this.attendancesetupservice.getFlagValues().subscribe(resp =>{
            this.flagvalue = resp
         });
    }

    async updateflagvalue(value) {
        this.attendancesetupservice.updateFlagValue(value);
    }

    async deleteflagvalue(value) {
        this.attendancesetupservice.DeleteFlagValue(value.key);
    }

}