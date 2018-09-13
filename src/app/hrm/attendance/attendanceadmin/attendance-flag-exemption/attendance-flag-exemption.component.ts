import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';

@Component({
    selector: 'app-attendance-flag-exemption',
    templateUrl: './attendance-flag-exemption.component.html',
    styleUrls: ['./attendance-flag-exemption.component.scss']
})
export class AttendanceFlagExemptionComponent implements OnInit {

    public attendanceflagExemption: any;
    constructor(public attendanceservice: AttendanceService) { }

    async ngOnInit() {
        await this.attendanceservice.getattendanceflagexemptions();
        this.attendanceflagExemption = this.attendanceservice.attendanceflagexemption
        console.log(this.attendanceflagExemption);

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