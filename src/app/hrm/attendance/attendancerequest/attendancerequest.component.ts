import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';

@Component({
    selector: 'app-attendancerequest',
    templateUrl: './attendancerequest.component.html',
    styleUrls: ['./attendancerequest.component.scss']
})
export class AttendancerequestComponent implements OnInit {
 
    public attendancerequest: any;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    
    constructor(public attendanceservice: AttendanceService) { }

    async ngOnInit() {
        await this.attendanceservice.getattendancerequests();
        this.attendancerequest = this.attendanceservice.attendancerequest
        console.log(this.attendancerequest);

    }

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

    async addattendancerequest(value) {
        this.attendanceservice.addattendancerequest(value.data);
    }

    async updateattendancerequest(value) {
        console.log(value);
        this.attendanceservice.updateattendancerequest(value);
    }

    async deleteattendancerequest(value) {
        this.attendanceservice.Deleteattendancerequest(value.key);
    }

}