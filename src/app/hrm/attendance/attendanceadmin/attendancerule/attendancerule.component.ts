import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { AttendancesetupService } from '../../services/attendancesetup.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SetupService } from '../../../hrmsSetup/services/setup.service';
import { LeaveSetupService } from '../../../leave/leaveSetup.service';
import { LeaveType } from '../../../hrmsSetup/models/leavetype.interface';

@Component({
    selector: 'app-attendancerule',
    templateUrl: './attendancerule.component.html',
    styleUrls: ['./attendancerule.component.scss']
})
export class AttendanceruleComponent implements OnInit {

    public AttendanceRuleForm;
    public attendancerule: any;
    public leaves = [];

    private fieldArray: Array<any> = [];
    private newAttribute: any = null;
    public attendanceRule: any;

    constructor(private fb: FormBuilder, public attendanceservice: AttendanceService,
        public attendancesetupservice: AttendancesetupService, public leavesetupservice: LeaveSetupService,
        public hrsetupservice: SetupService, ) { }

    async ngOnInit() {

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
            //LeaveTypeId: ['', Validators.required]

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
        //this.b = this.a;

    }

    addFieldValue() { 
        this.leaves.push(
            { "leaveTypeId" : this.newAttribute.leaveTypeId }
        );
        console.log(this.leaves);
        
        this.AttendanceRuleForm.value = {
            ...this.AttendanceRuleForm.value,
            AttendanceRuleLeaveTypes: this.leaves
        }; 
        console.log(this.AttendanceRuleForm.value); 
        this.fieldArray.push(this.newAttribute); 
        console.log(this.fieldArray); 
    }

    deleteFieldValue(title, index) {
        let y = this.fieldArray.filter(l => l.title == title);
        this.leavesetupservice.leavetype.push(y[0]);
        this.fieldArray.splice(index, 1);
    } 
    selectLeaveType(e) { 
        let x = this.leavesetupservice.leavetype.filter(l => l.leaveTypeId == e.target.value);
        this.newAttribute = x[0]; 
        this.leavesetupservice.leavetype = this.leavesetupservice.leavetype.filter(l => l.leaveTypeId != e.target.value);
         
    }

    async addattendancerule() { 
         
        this.attendanceservice.addattendancerule(this.AttendanceRuleForm.value);
        console.log(this.AttendanceRuleForm.value);

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

    // getLeaves(e) {

    //     this.leaves.push(
    //         { LeaveTypeId: e.target.value }
    //     );
    //     console.log(this.leaves);
    //     this.AttendanceRuleForm.value = {
    //         ...this.AttendanceRuleForm.value,
    //         AttendanceRuleLeaveTypes: this.leaves
    //     };

    //     console.log(this.AttendanceRuleForm.value);
    // }

}