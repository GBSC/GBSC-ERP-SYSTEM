import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService, LeaveService, LeaveSetupService, SetupService } from '../../../../core';

@Component({
    selector: 'app-empleavepolicy',
    templateUrl: './empleavepolicy.component.html',
    styleUrls: ['./empleavepolicy.component.scss']
})
export class EmpleavepolicyComponent implements OnInit {

    public groups: any = [];
    EmployeeleavePolicyForm: FormGroup;
    public empleavepolicy: any;
    public employees: any;
    public leaveyear: any;
    public leavepolicy: any;
    public leaveTypes: any;
    public leaveDayType: any;
    public leaveEligiblity: any;
    public updatingEmpleavePolicy: any;
    public sample: any;
    public selectedLeaveTypes : any ;

    constructor(public fb: FormBuilder, public setupService: SetupService, public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService,
        public empservice: EmployeeService, public hrsetupservice: SetupService, public router: Router) { }

    async ngOnInit() {

        this.EmployeeleavePolicyForm = this.fb.group({
            LeaveYearId: ['', Validators],
            UserId: ['', Validators],
            LeaveTypeId: ['', Validators],
            LeaveDayTypeId: ['', Validators],
            LeaveEligibilityId: ['', Validators],

            IsPeriodic: ['', Validators],
            PeriodicFrom: ['', Validators],
            PeriodicTill: ['', Validators],

            IsProcessed: ['', Validators],
            EntitledQuantity: ['', Validators],
            MaximumAllowedBalance: ['', Validators],
            MaximumAtATime: ['', Validators],
            MinimumAtATime: ['', Validators],
            DayContinuationRestriction: ['', Validators],
            MinimumIntimationPeriod: ['', Validators],
            IsEncashable: ['', Validators],
            EncashmentDays: ['', Validators],
            EncashmentApplicationLimit: ['', Validators],
            IsMale: ['', Validators],
            IsFemale: ['', Validators],
            IsMarried: ['', Validators],
            IsBalanceBroughtForward: ['', Validators],
            BalanceBroughtForwardQuantity: ['', Validators],
            BalanceBroughtForwardValidity: ['', Validators],
            IsFileAttachmentRequired: ['', Validators],
            FileAttachmentDaysLimit: ['', Validators],
            IsShortLeaveAllowed: ['', Validators],
            ShortLeaveLimit: ['', Validators],
            IsAllowedOnlyOnceInService: ['', Validators],
            IsJobPeriodBased: ['', Validators],
            JobPeriodTime: ['', Validators],
            PaidDaysQuantity: ['', Validators],
            HalfPaidDaysQuantity: ['', Validators],
            UnPaidDaysQuantity: ['', Validators],
            IsProrated: ['', Validators],
            IsMonthBased: ['', Validators],
            AllowOnZeroBalance: ['', Validators],
            IsActive: ['', Validators],
            ApplicationLimit: ['', Validators],
            PrintOnPaySlip: ['', Validators]

        });

        this.empleavepolicy = await this.leaveservice.getLeavePolicyEmployee();

        this.leavepolicy = await this.leavesetupservice.getLeavePolicies();

        this.employees = await this.empservice.GetAllEmployees();

        this.leaveyear = await this.leavesetupservice.getLeaveYears();

        this.leaveTypes = await this.leavesetupservice.getLeaveTypes();

        this.leaveDayType = await this.leavesetupservice.getLeaveDayTypes();

        this.leaveEligiblity = await this.leavesetupservice.getLeaveEligibilities();

        this.groups = await this.hrsetupservice.getAllGroups();
    }

    getLeavePolicy(userId) {
        let selectedEmployee = this.employees.find(e => e.userId == userId)
        this.sample = this.leavepolicy.find(e => e.groupId === selectedEmployee.groupId);
        this.patchvalues(this.sample);
    }

    getQuantitybyType(leaveTypeId) {
        this.selectedLeaveTypes = this.leavepolicy.find(e => e.leaveTypeId == leaveTypeId && e.groupId == this.sample.groupId);
        this.patchvalues(this.sample);
    }

    async addemployeeleavepolicy(empleavepolicy) {
        await this.leaveservice.addLeavePolicyEmployee(empleavepolicy);
        this.empleavepolicy = await this.leaveservice.getLeavePolicyEmployee();
    }

    updatingEmpleavepolicy(value) {
        this.updatingEmpleavePolicy = { ...value.oldData, ...value.newData };
    }
    async updateEmpLeavePolicy() {
        await this.leaveservice.updateLeavePolicyEmployee(this.updatingEmpleavePolicy);
    }

    async deleteEmpleavePolicy(value) {
        await this.leaveservice.DeleteLeavePolicyEmployee(value.key);
    }

    patchvalues(policy: any) {
        this.EmployeeleavePolicyForm.patchValue({
            LeaveYearId: policy.leaveYearId,
            LeaveTypeId: policy.leaveTypeId,
            LeaveEligibilityId: policy.leaveEligibilityId,
            LeaveDayTypeId: policy.leaveDayTypeId,
            IsActive: policy.isActive,
            IsAllowedOnlyOnceInService: policy.isAllowedOnlyOnceInService,
            IsBalanceBroughtForward: policy.isBalanceBroughtForward,
            IsEncashable: policy.isEncashable,
            IsFemale: policy.isFemale,
            IsMale: policy.isMale,
            IsJobPeriodBased: policy.isJobPeriodBased,
            IsMarried: policy.isMarried,
            IsMonthBased: policy.isMonthBased

        });
    }
}
