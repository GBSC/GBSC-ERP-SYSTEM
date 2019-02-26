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

     ngOnInit() {

    this.attendancesetupservice.getAttendanceRequestTypes().subscribe(res => {
        this.attendanceRequesttype = res;
    });
    }

    addRequesttype(value) {
         this.attendancesetupservice.addAttendanceRequestType(value.data).subscribe(r => {
              console.log(r);
         });
         this.attendancesetupservice.getAttendanceRequestTypes().subscribe(res => {
            this.attendanceRequesttype = res;
        });
    }

    async updateRequesttype(value) {
        this.attendancesetupservice.updateAttendanceRequestType(value);
    }

    async deleteRequesttype(value) {
        this.attendancesetupservice.DeleteAttendanceRequestType(value.key);
    }

}