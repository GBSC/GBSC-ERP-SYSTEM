import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendancesetupService } from '../../../../core';
import { AssignRosterShift } from '../../../../core/Models/HRM/assignRosterShift';
import { Shift } from '../../../../core/Models/HRM/shift';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftAttendanceFlag } from '../../../../core/Models/HRM/userRosterAttendanceAttendanceFlag';
import { log } from 'util';

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
    public attendanceFlag: ShiftAttendanceFlag[];
    public AssignRosters: any;
    submitted = false;


    @Input('shiftsId') id: number;

    constructor(public toastr: ToastrService, public fb: FormBuilder,
        public activatedRoute: ActivatedRoute, public router: Router, public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.attendanceFlag = [];

        this.ShiftForm = this.fb.group({
            ShiftCode: [''],
            ShiftTitle: ['', Validators.required],
            StartTime: ['', Validators.required],
            EndTime: ['', Validators.required],
            GraceTime: [''],
            IsMultiple: [''],
            OverTimeStartTime: [''],
            MinimumOverTime: [''],
            InTimeShiftThreshold: [''],
            OutTimeShiftThreshold: [''],
            OverTimeRate: [''],
            Description: [''],
            ShiftHours: [''],
            ShiftAttendanceFlags: this.fb.array([])

        });

        this.shift = await this.attendancesetupservice.getShifts();
        console.log(this.shift);
        this.attendancesetupservice.getAttendanceFlags().subscribe(rsp => {
            this.attendanceflag = rsp
        });

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

    formatDate(date: Date) {
        return (date.getHours() + 1) + "-" + date.getMinutes() + "-" + date.getMilliseconds();
    }

    async addAttendanceFlag(value) {
        let data = value.data;
        this.attendanceFlag.push(data);
        console.log(data);
        console.log(value);

    }

    get f() { return this.ShiftForm.controls; }

    async addshift(value) {
        this.submitted = true;
        if (this.ShiftForm.invalid) {
            this.toastr.error("Fill All Required Fields");
        }
        else {
            this.ShiftForm.value.ShiftAttendanceFlags = this.attendanceFlag;
            console.log(value)
            await this.attendancesetupservice.addShift(value);
            this.toastr.success("Shift Added");
            this.router.navigate(['/hrm/attendance/shifts']);
        }
    }


    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    updateAttendanceFlag(value) {
        console.log(value);
    }

    update(value) {
        value.shiftsId = this.id;
        this.ShiftForm.value.ShiftAttendanceFlags = this.Flag;
        this.attendancesetupservice.updateShift(value).subscribe(resp => {
            console.log(resp)
            this.toastr.success("Shift Updated");
            this.router.navigate(['/hrm/attendance/shifts']);
        });
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
            OverTimeRate: shift.overTimeRate,
            Description: shift.description,
            ShiftHours: shift.shiftHours

        })

    }

}