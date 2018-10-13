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
<<<<<<< HEAD
        await this.attendanceservice.getattendanceflagexemptions();
        this.attendanceflagExemption = this.attendanceservice.attendanceflagexemption
        console.log(this.attendanceflagExemption);

        await this.attendancesetupservice.getattendanceflag();
        let flag = this.attendancesetupservice.attendanceflag;

        await this.attendancesetupservice.getflagtypes();
        let flagtype = this.attendancesetupservice.flagtype;
=======
        this.attendanceflagExemption = await this.attendanceservice.getAttendanceFlagExemptions();
>>>>>>> master

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