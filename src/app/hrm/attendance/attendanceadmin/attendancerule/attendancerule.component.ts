import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendanceService, AttendancesetupService, LeaveSetupService, SetupService } from '../../../../core';
import { AttendanceRuleLeaveType } from '../../../../core/Models/HRM/AttendanceRuleLeaveType';
import { AttendanceRule } from '../../../../core/Models/HRM/attendanceRule';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-attendancerule',
    templateUrl: './attendancerule.component.html',
    styleUrls: ['./attendancerule.component.scss']
})
export class AttendanceruleComponent implements OnInit {

    public AttendanceRuleForm;
    public attendancerule: any;
    public LeaveTypes: any;
    public ruleofAttendannce: any;
    private leaves: AttendanceRuleLeaveType[];
    public RuleDetail: any[] = [];
    public attendanceRule: any;
    public attendanceflag: any;
    public groups: any;
    @Input('attendanceRuleId') id: number;

    constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, public attendanceservice: AttendanceService,
        public attendancesetupservice: AttendancesetupService,public router : Router, public leavesetupservice: LeaveSetupService,
        public hrsetupservice: SetupService,public toastr:ToastrService, ) { }

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
       
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
          });
          if (this.isUpdate() === true) {
            this.attendanceservice.getAttendanceRule(this.id).subscribe(resp => {
              this.ruleofAttendannce = resp;
                this.RuleDetail = this.ruleofAttendannce.AttendanceRuleLeaveTypes;
                 this.patchValues(this.ruleofAttendannce);
            });
          }
    }

    async attendanceRuleLeave(value) {
        let data = value.data;
        await this.leaves.push(data);
    }

    async addattendancerule(value) {
        let attendanceRule = new AttendanceRule();
        attendanceRule = { ...attendanceRule, ...value };
        attendanceRule.attendanceRuleLeaveTypes = this.leaves;
        await this.attendanceservice.addAttendanceRule(attendanceRule);
        this.toastr.success("Attendance Rule Submit Successfully");
        this.AttendanceRuleForm.reset();
        this.router.navigate(['/hrm/attendance/attendanceadmin/attendanceruledetail']);
    }


    isUpdate(): boolean {

        if (this.id > 0) {
          return true;
        }
        else
          return false;
      }

       updateattendancerule(value) {
        console.log(value);
      }
    
      async update(value) { 
          console.log(value); 
        value.attendanceRuleId = this.id;
        value.attendanceRuleLeaveTypes = this.RuleDetail;
        await this.attendanceservice.updateAttendanceRule(value).subscribe(resp => {
          this.toastr.success("Attendance Rule Detail Updated"); 
                this.router.navigate(['/hrm/attendance/attendanceadmin/attendanceruledetail']);
    
        });
      }  
    async deleteattendancerule(value) {
        await this.attendanceservice.DeleteAttendanceRule(value.key);
    }

    patchValues(rule: any) {

        this.AttendanceRuleForm.patchValue({
    
            GroupId: rule.groupId,
            AttendanceFlagId: rule.attendanceFlagId,
            FlagCount: rule.flagCount,
            ExemptFlagCount: rule.exemptFlagCount,
            ExemptMinutes: rule.exemptMinutes,
            ConditionalExemption: rule.conditionalExemption,
            EffectQuantity: rule.effectQuantity,
            EffectType: rule.effectType,
            EffectFrequency: rule.effectFrequency,
            Action: rule.action
        })
    
      }

}