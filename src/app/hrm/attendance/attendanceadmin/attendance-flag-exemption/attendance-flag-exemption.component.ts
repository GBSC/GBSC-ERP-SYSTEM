import { Component, OnInit } from '@angular/core';
import { AttendancesetupService, AttendanceService } from '../../../../core';

@Component({
    selector: 'app-attendance-flag-exemption',
    templateUrl: './attendance-flag-exemption.component.html',
    styleUrls: ['./attendance-flag-exemption.component.scss']
})
export class AttendanceFlagExemptionComponent implements OnInit {

    public attendanceflagExemption: any;
    public attendanceFlag: any;
    public flagType: any;

    constructor(public attendanceservice: AttendanceService, public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        this.attendanceflagExemption = await this.attendanceservice.getAttendanceFlagExemptions();

        this.attendanceFlag = await this.attendancesetupservice.getAttendanceFlags();

        this.flagType = await this.attendancesetupservice.getFlagTypes(); 
    }

    async addflagExemption(value) {
        this.attendanceservice.addAttendanceFlagExemption(value.data);
    }

    async updateflagExemption(value) {
        this.attendanceservice.updateAttendanceFlagExemption(value);
    }

    async deleteflagExemption(value) {
        this.attendanceservice.DeleteAttendanceFlagExemption(value.key);
    }

}