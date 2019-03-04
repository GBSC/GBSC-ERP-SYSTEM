import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-attendancerequesttype',
    templateUrl: './attendancerequesttype.component.html',
    styleUrls: ['./attendancerequesttype.component.scss']
})
export class AttendancerequesttypeComponent implements OnInit {

    public updatingModel: any;
    public attendanceRequesttype: any;

    constructor(public attendancesetupservice: AttendancesetupService) { }

     ngOnInit() {

    this.attendancesetupservice.getAttendanceRequestTypes().subscribe(res => {
        this.attendanceRequesttype = res;
    });
    }

    addRequesttype(value) {
         this.attendancesetupservice.addAttendanceRequestType(value.data).subscribe(r => {
              this.attendancesetupservice.getAttendanceRequestTypes().subscribe(res => {
                this.attendanceRequesttype = res;
            });
         }); 
    }

     updatingRequesttype(value) {
        this.updatingModel = {...value.oldData, ...value.newData};
    }

    updateRequesttype() {
        this.attendancesetupservice.updateAttendanceRequestType(this.updatingModel).subscribe(rt => {
            console.log(rt);
            
        });
    }

    async deleteRequesttype(value) {
        this.attendancesetupservice.DeleteAttendanceRequestType(value.key);
    }

}