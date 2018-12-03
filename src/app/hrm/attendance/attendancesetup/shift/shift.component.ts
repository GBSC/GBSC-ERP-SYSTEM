import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendancesetupService } from '../../../../core';
import { AssignRosterShift } from '../../../../core/Models/HRM/assignRosterShift';
import { Shift } from '../../../../core/Models/HRM/shift';
import { UserRosterAttendanceAttendanceFlag } from '../../../../core/Models/HRM/userRosterAttendanceAttendanceFlag';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-shift',
    templateUrl: './shift.component.html',
    styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

    public ShiftForm: FormGroup;
    public shift: any;
    public shifts: any;
    public attendnceFlag: any[] = [];
    public attendanceflag: any;
    private attendanceFlag: UserRosterAttendanceAttendanceFlag[];
    public AssignRosters: any;

    @Input('shiftsId') id: number;
    
    constructor(public toastr: ToastrService, private fb: FormBuilder,
        private activatedRoute: ActivatedRoute, public attendancesetupservice: AttendancesetupService) { }

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
            overTimeRate: ['', Validators],
            description: ['', Validators],
            shiftHours: ['', Validators]

        });

        this.shift = await this.attendancesetupservice.getShifts();

        this.attendanceflag = await this.attendancesetupservice.getAttendanceFlags();

        this.AssignRosters = await this.attendancesetupservice.getAsignRosters();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        if (this.isUpdate() === true) {
            this.attendancesetupservice.getShift(this.id).subscribe(resp => {
                this.shifts = resp;
                let a = this.shifts.UserRosterAttendanceAttendanceFlags;
                // this.attendnceFlag = a.filter(b => {
                //     delete b.leaveRequestDetailId;
                //     delete b.leaveRequestId;
                //     return b;
                // });
                this.patchValues(this.shifts);
            });
        }
    }

    async addAttendanceFlag(value) {
        let data = value.data;
        this.attendanceFlag.push(data);
        console.log(data);
        
    }

    async addshift(value) {
        console.log(value); 
        let shifts = new Shift();
        shifts = { ...shifts, ...value };
        shifts.UserRosterAttendanceAttendanceFlags = this.attendanceFlag;
     let s =await this.attendancesetupservice.addShift(shifts);
         console.log(value); 
         console.log(s); 
 
     
    }

    
    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    async updateLeaverequestDetail(value) {
        console.log(value);
    }

    async update(value) {
        value.shiftsId = this.id;
        value.UserRosterAttendanceAttendanceFlags = this.attendnceFlag;
        this.attendancesetupservice.updateShift(value).subscribe(resp => {
            this.toastr.success("Shift Updated");
            // this.router.navigate(['/hrm/leave/leaverequests']);

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
            ShiftTitle:  shift.shiftTitle,
            StartTime:   shift.startTime,
            EndTime:     shift.endTime,
            GraceTime:    shift.graceTime,
            IsMultiple:   shift.isMultiple,
            OverTimeStartTime:  shift.overTimeStartTime,
            MinimumOverTime:      shift.minimumOverTime,
            InTimeShiftThreshold:   shift.inTimeShiftThreshold,
            OutTimeShiftThreshold:  shift.outTimeShiftThreshold

        })

    }

}