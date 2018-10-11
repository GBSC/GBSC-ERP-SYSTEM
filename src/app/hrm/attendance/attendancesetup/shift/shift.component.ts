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
    public attendanceflag: any;
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

        this.shift = await this.attendancesetupservice.getShifts();

        this.attendanceflag = await this.attendancesetupservice.getAttendanceFlags(); 

        this.AssignRosters = await this.attendancesetupservice.getAsignRosters();

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
        let s = await this.attendancesetupservice.addShift(shifts);
        this.ShiftForm.reset();

    }

    async updateshift(value) {
        console.log(value);
        this.attendancesetupservice.updateShift(value);
    }

    async deleteshift(value) {
        this.attendancesetupservice.DeleteShift(value.key);
    }

}