import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendancesetupService } from '../../../../core';
import { AssignRosterShift } from '../../../../core/Models/HRM/assignRosterShift';
import { Shift } from '../../../../core/Models/HRM/shift';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftAttendanceFlag } from '../../../../core/Models/HRM/userRosterAttendanceAttendanceFlag';

@Component({
    selector: 'app-shift',
    templateUrl: './shift.component.html',
    styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {
    public ShiftForm: FormGroup;
    public shift: any;
    public flagCategory: any;
    public shifts: any;
    public flagType: any;
    public Flag: any[] = [];
    public attendanceflag: any;
    private attendanceFlag: ShiftAttendanceFlag[];
    public AssignRosters: any;

    @Input('shiftsId') id: number;

    constructor(public toastr: ToastrService, private fb: FormBuilder,
        private activatedRoute: ActivatedRoute, public router: Router, public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.attendanceFlag = [];

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
            OutTimeShiftThreshold: [''],
            OverTimeRate: ['', Validators],
            Description: ['', Validators],
            ShiftHours: ['', Validators]

        });

        this.shift = await this.attendancesetupservice.getShifts();

        this.attendanceflag = await this.attendancesetupservice.getAttendanceFlags();

        this.flagType = await this.attendancesetupservice.getFlagTypes();

        this.flagCategory = await this.attendancesetupservice.getFlagCategories();

        this.AssignRosters = await this.attendancesetupservice.getAsignRosters();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });

        if (this.isUpdate() === true) {
            this.attendancesetupservice.getShift(this.id).subscribe(resp => {
                this.shifts = resp;
                let a = this.shifts.shiftAttendanceFlags;
                this.Flag = a.filter(b => {
                    delete b.shiftAttendanceFlagId;
                    delete b.shiftsId;
                    return b;
                });
                this.patchValues(this.shifts);
            });
        }
    }

    async addAttendanceFlag(value) {
        let data = value.data;
        this.attendanceFlag.push(data);

    }

    async addshift(value) {
        let shifts = new Shift();
        shifts = { ...shifts, ...value };
        shifts.ShiftAttendanceFlags = this.attendanceFlag;
        console.log(shifts);
        await this.attendancesetupservice.addShift(shifts);
        this.toastr.success("Shift Added");
        this.router.navigate(['/hrm/attendance/attendancesetup/shifts']);
    }


    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    async updateAttendanceFlag(value) {
        console.log(value);
    }

     update(value) {
        value.shiftsId = this.id;
        value.shiftAttendanceFlags = this.Flag;
        this.attendancesetupservice.updateShift(value).subscribe(resp => {
            this.toastr.success("Shift Updated"); 

        });
    }
    async updateshift(value) {
        this.attendancesetupservice.updateShift(value);
    }

    async deleteshift(value) {
        this.attendancesetupservice.DeleteShift(value.key);
    }

    patchValues(shift: any) {

        this.ShiftForm.patchValue({

            ShiftCode: shift.shiftCode,
            ShiftTitle: shift.shiftTitle,
            StartTime: shift.startTime,
            EndTime: shift.endTime,
            GraceTime: shift.graceTime,
            IsMultiple: shift.isMultiple,
            OverTimeStartTime: shift.overTimeStartTime,
            MinimumOverTime: shift.minimumOverTime,
            InTimeShiftThreshold: shift.inTimeShiftThreshold,
            OutTimeShiftThreshold: shift.outTimeShiftThreshold,
            OverTimeRate: shift.OverTimeRate,
            Description: shift.Description,
            ShiftHours: shift.ShiftHours

        })

    }

}