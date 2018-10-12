import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendancesetupService } from '../../../../core';
import { AssignRosterShift } from '../../../../core/Models/HRM/assignRosterShift';
import { Shift } from '../../../../core/Models/HRM/shift';

@Component({
    selector: 'app-shift',
    templateUrl: './shift.component.html',
    styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

    public ShiftForm: FormGroup;
    public shift: any;
    private assignRoster: AssignRosterShift[];
    private AssignRosters: any;
    constructor(private fb: FormBuilder, public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.assignRoster = [];

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
            OutTimeShiftThreshold: ['', Validators]

        });

        await this.attendancesetupservice.getshifts();
        this.shift = this.attendancesetupservice.shift


        await this.attendancesetupservice.getattendanceflag();
        let attendanceflag = this.attendancesetupservice.attendanceflag

        this.AssignRosters = await this.attendancesetupservice.getasignrosters();

    }

    async assignroster(value) {
        let data = value.data;
        this.assignRoster.push(data);
        console.log(this.assignRoster);
    }

    async addshift(value) {
        let shifts = new Shift();
        shifts = { ...shifts, ...value };
        console.log(this.assignRoster);
        shifts.AssignRosterShifts = this.assignRoster;
        console.log(shifts);
        let s = await this.attendancesetupservice.addshift(shifts);
        this.ShiftForm.reset();

    }

    async updateshift(value) {
        console.log(value);
        this.attendancesetupservice.updateshift(value);
    }

    async deleteshift(value) {
        this.attendancesetupservice.Deleteshift(value.key);
    }

}