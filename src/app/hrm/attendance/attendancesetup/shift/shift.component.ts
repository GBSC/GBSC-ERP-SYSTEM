import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-shift',
    templateUrl: './shift.component.html',
    styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {
 
    public ShiftForm: FormGroup;
    public shift: any;
 
    constructor(private fb: FormBuilder,public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.ShiftForm = this.fb.group({
            ShiftCode: ['', Validators],
            ShiftTitle: ['', Validators],
            StartTime: ['', Validators],
            EndTime: ['', Validators],
            GraceTime: ['', Validators],
            IsMultiple: ['', Validators],
            OverTimeStartTime: ['', Validators],
            MinimumOverTime: ['', Validators],
            InTimeShiftThreshold: ['', Validators],
            OutTimeShiftThreshold: ['', Validators],
            AttendanceFlagId: ['']
             
        });

        await this.attendancesetupservice.getshifts();
        this.shift = this.attendancesetupservice.shift


        await this.attendancesetupservice.getattendanceflag();
        let attendanceflag = this.attendancesetupservice.attendanceflag
    }

    async addshift(value) {
        this.attendancesetupservice.addshift(value.data);
    }

    async updateshift(value) {
        console.log(value);
        this.attendancesetupservice.updateshift(value);
    }

    async deleteshift(value) {
        this.attendancesetupservice.Deleteshift(value.key);
    }

}