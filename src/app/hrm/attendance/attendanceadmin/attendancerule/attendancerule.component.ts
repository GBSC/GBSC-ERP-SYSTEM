import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { AttendancesetupService } from '../../services/attendancesetup.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SetupService } from '../../../hrmsSetup/services/setup.service';
import { LeaveSetupService } from '../../../leave/leaveSetup.service';

@Component({
    selector: 'app-attendancerule',
    templateUrl: './attendancerule.component.html',
    styleUrls: ['./attendancerule.component.scss']
})
export class AttendanceruleComponent implements OnInit {

    public AttendanceRuleForm: FormGroup;
    public attendancerule: any;

    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    
    constructor(private fb: FormBuilder,public attendanceservice: AttendanceService, 
        public attendancesetupservice: AttendancesetupService,public leavesetupservice: LeaveSetupService,
        public hrsetupservice: SetupService,) { }

    async ngOnInit() {

        this.AttendanceRuleForm = this.fb.group({
            GroupId: ['', Validators],
            AttendanceFlagId: ['', Validators],
            FlagCount: ['', Validators],
            ExemptFlagCount: ['', Validators],
            ExemptMinutes: ['', Validators],
            ConditionalExemption: ['', Validators], 
            EffectQuantity: ['', Validators],
            EffectType: ['', Validators],
            EffectFrequency: ['', Validators],
            Action: ['', Validators],
            LeaveTypeId: ['', Validators]



        });

        await this.attendanceservice.getattendancerules();
        this.attendancerule = this.attendanceservice.attendancerule
        console.log(this.attendancerule);

        await this.hrsetupservice.getAllGroups();
        let groups = this.hrsetupservice.group;
        
        await this.attendancesetupservice.getattendanceflag();
        let attendanceflag = this.attendancesetupservice.attendanceflag;

        await this.leavesetupservice.getAllleavetype();
        let leavetype = this.leavesetupservice.leavetype; 


    }

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }


    async addattendancerule(value) {
        this.attendanceservice.addattendancerule(value.data);
    }

    async updateattendancerule(value) {
        console.log(value);
        this.attendanceservice.updateattendancerule(value);
    }

    async deleteattendancerule(value) {
        this.attendanceservice.Deleteattendancerule(value.key);
    }

}