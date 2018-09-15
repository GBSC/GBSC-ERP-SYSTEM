import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-attendance-flag-exemption',
    templateUrl: './attendance-flag-exemption.component.html',
    styleUrls: ['./attendance-flag-exemption.component.scss']
})
export class AttendanceFlagExemptionComponent implements OnInit {

    public attendanceflagExemption: any;
    constructor(public attendanceservice: AttendanceService,public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        await this.attendanceservice.getattendanceflagexemptions();
        this.attendanceflagExemption = this.attendanceservice.attendanceflagexemption
        console.log(this.attendanceflagExemption);

        await this.attendancesetupservice.getattendanceflag();
        let flag = this.attendancesetupservice.attendanceflag;
        
        await this.attendancesetupservice.getflagtypes();
        let flagtype = this.attendancesetupservice.flagtype;


    }

    async addflagExemption(value) {
        this.attendanceservice.addattendanceflagexemption(value.data);
    }

    async updateflagExemption(value) {
        console.log(value);
        this.attendanceservice.updateattendanceflagexemption(value);
    }

    async deleteflagExemption(value) {
        this.attendanceservice.Deleteattendanceflagexemption(value.key);
    }

}