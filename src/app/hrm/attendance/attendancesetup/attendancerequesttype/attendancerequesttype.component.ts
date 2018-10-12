import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-attendancerequesttype',
    templateUrl: './attendancerequesttype.component.html',
    styleUrls: ['./attendancerequesttype.component.scss']
})
export class AttendancerequesttypeComponent implements OnInit {

    public attendanceRequesttype: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.attendanceRequesttype = await this.attendancesetupservice.getAttendanceRequestTypes();
    }

    async addRequesttype(value) {
        this.attendancesetupservice.addAttendanceRequestType(value.data);
    }

    async updateRequesttype(value) {
        this.attendancesetupservice.updateAttendanceRequestType(value);
    }

    async deleteRequesttype(value) {
        this.attendancesetupservice.DeleteAttendanceRequestType(value.key);
    }

}