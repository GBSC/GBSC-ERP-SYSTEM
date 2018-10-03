import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendanceService, AttendancesetupService, LeaveSetupService, SetupService } from '../../../../core';
import { AttendanceRuleLeaveType } from '../../../../core/Models/HRM/AttendanceRuleLeaveType';
import { AttendanceRule } from '../../../../core/Models/HRM/attendanceRule';

@Component({
    selector: 'app-attendancerule',
    templateUrl: './attendancerule.component.html',
    styleUrls: ['./attendancerule.component.scss']
})
export class AttendanceruleComponent implements OnInit {

    public AttendanceRuleForm;
    public attendancerule: any;
    private leaves : AttendanceRuleLeaveType[]; 
    public attendanceRule: any;

    constructor(private fb: FormBuilder, public attendanceservice: AttendanceService,
        public attendancesetupservice: AttendancesetupService, public leavesetupservice: LeaveSetupService,
        public hrsetupservice: SetupService, ) { }

    async ngOnInit() {

        this.leaves = []; 

        this.AttendanceRuleForm = this.fb.group({
            GroupId: ['', Validators.required],
            AttendanceFlagId: ['', Validators.required],
            FlagCount: ['', Validators.required],
            ExemptFlagCount: ['', Validators.required],
            ExemptMinutes: ['', Validators.required],
            ConditionalExemption: ['', Validators.required],
            EffectQuantity: ['', Validators.required],
            EffectType: ['', Validators.required],
            EffectFrequency: ['', Validators.required],
            Action: ['', Validators.required] 

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

    async attendanceRuleLeave(value) {
        let data = value.data;
        this.leaves.push(data);
        console.log(this.leaves);
      }

    async addattendancerule(value) { 
        console.log(value);
        let attendanceRule = new AttendanceRule();
        attendanceRule = {...attendanceRule, ...value};
        console.log(this.leaves);
        attendanceRule.attendanceRuleLeaveTypes = this.leaves;
        console.log(attendanceRule);
        let r= this.attendanceservice.addattendancerule(attendanceRule);
        console.log(r);

    }

    AttendanceRuleUpdating(value) {
        this.attendanceRule = { ...value.oldData, ...value.newData };
    }

    async updateattendancerule() {
        this.attendanceservice.updateattendancerule(this.attendanceRule);
    }

    async deleteattendancerule(value) {
        this.attendanceservice.Deleteattendancerule(value.key);
    }

}