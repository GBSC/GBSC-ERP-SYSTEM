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
    public LeaveTypes: any;
    public message: any;
    public leaves: AttendanceRuleLeaveType[];
    public attendanceRule: any;
    public attendanceflag: any;
    public groups: any;

    constructor(public fb: FormBuilder, public attendanceservice: AttendanceService,
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

        this.attendancerule = await this.attendanceservice.getAttendanceRules();

        this.groups = await this.hrsetupservice.getAllGroups();

        this.attendanceflag = await this.attendancesetupservice.getAttendanceFlags();

        this.LeaveTypes = await this.leavesetupservice.getLeaveTypes();

    }

    async attendanceRuleLeave(value) {
        let data = value.data;
        await this.leaves.push(data);
    }

    async addattendancerule(value) {
        let attendanceRule = new AttendanceRule();
        attendanceRule = { ...attendanceRule, ...value };
        attendanceRule.attendanceRuleLeaveTypes = this.leaves;
        let r = await this.attendanceservice.addAttendanceRule(attendanceRule);
        this.AttendanceRuleForm.reset();
    }

    AttendanceRuleUpdating(value) {
        this.attendanceRule = { ...value.oldData, ...value.newData };
    }

    async updateattendancerule() {
        this.attendanceservice.updateAttendanceRule(this.attendanceRule);
    }

    async deleteattendancerule(value) {
        this.attendanceservice.DeleteAttendanceRule(value.key);
    }

}