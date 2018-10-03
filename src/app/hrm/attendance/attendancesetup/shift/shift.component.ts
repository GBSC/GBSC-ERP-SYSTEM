import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendancesetupService } from '../../services/attendancesetup.service';
import { Shift } from '../../../model/shift';
import { AssignRosterShift } from '../../../model/assignRosterShift';

@Component({
    selector: 'app-shift',
    templateUrl: './shift.component.html',
    styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {
 
    public ShiftForm: FormGroup;
    public shift: any;
    private assignRoster: AssignRosterShift[];
    private AssignRosters : any;
 
    constructor(private fb: FormBuilder,public attendancesetupservice: AttendancesetupService) { }

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
        //let rosterAssign = this.attendancesetupservice
    }

    async assignroster(value) {
        let data = value.data;
        this.assignRoster.push(data);
        console.log(this.assignRoster);
      }

    async addshift(value) { 
      let shifts = new Shift();
      shifts = {...shifts, ...value}; 
      shifts.AssignRosterShifts = this.assignRoster; 
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