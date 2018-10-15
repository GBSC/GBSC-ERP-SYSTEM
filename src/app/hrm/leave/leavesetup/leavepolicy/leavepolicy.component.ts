import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService, LeaveSetupService, SetupService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leavepolicy',
    templateUrl: './leavepolicy.component.html',
    styleUrls: ['./leavepolicy.component.css']
})
export class LeavepolicyComponent implements OnInit {
    public leavePolicyForm: FormGroup;
    public groups: any;
    public leavepolicy: any;
    public leveDayTypes: any;
    public leaveEligibility: any;
    public leaveYears: any;
    public leaveTypes: any;
    private updatingleavePolicy: any;
    private LeavePolicies: any;

    constructor(private fb: FormBuilder, public leavesetupservice: LeaveSetupService,
        public empservice: EmployeeService, public hrsetupservice: SetupService, public router: Router) { }

    async ngOnInit() {
        this.leavePolicyForm = this.fb.group({
            LeaveYearId: [''],
            GroupId: [''],
            LeaveTypeId: [''],
            LeaveDayTypeId: [''],
            LeaveEligibilityId: [''],
            IsProcessed: [''],
            EntitledQuantity: [''],
            MaximumAllowedBalance: [''],
            MaximumAtATime: [''],
            MinimumAtATime: [''],
            DayContinuationRestriction: [''],
            MinimumIntimationPeriod: [''],
            IsEncashable: [''],
            EncashmentDays: [''],
            EncashmentApplicationLimit: [''],
            IsMale: [''],
            IsFemale: [''],
            IsMarried: [''],
            IsBalanceBroughtForward: [''],
            BalanceBroughtForwardQuantity: [''],
            BalanceBroughtForwardValidity: [''],
            IsFileAttachmentRequired: [''],
            FileAttachmentDaysLimit: [''],
            IsShortLeaveAllowed: [''],
            ShortLeaveLimit: [''],
            IsAllowedOnlyOnceInService: [''],
            IsJobPeriodBased: [''],
            JobPeriodTime: [''],
            PaidDaysQuantity: [''],
            HalfPaidDaysQuantity: [''],
            UnPaidDaysQuantity: [''],
            IsProrated: [''],
            IsMonthBased: [''],
            AllowOnZeroBalance: [''],
            IsActive: [''],
            ApplicationLimit: [''],
            PrintOnPaySlip: ['']

        });


        this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();

        this.leaveYears = await this.leavesetupservice.getLeaveYears();

        this.leaveTypes = await this.leavesetupservice.getLeaveTypes();

        this.leveDayTypes = await this.leavesetupservice.getLeaveDayTypes();

        this.leaveEligibility = await this.leavesetupservice.getLeaveEligibilities();

        this.groups = await this.hrsetupservice.getAllGroups();

    }

    async addleavepolicy() {
        await this.leavesetupservice.addLeavePolicy(this.leavePolicyForm.value);
        this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();
    }

    updatingleavepolicy(value) {
        this.updatingleavePolicy = { ...value.oldData, ...value.newData };

    }
    async updateLeavePolicy() {
        await this.leavesetupservice.updateLeavePolicy(this.updatingleavePolicy);
    }

    async deleteleavePolicy(value) {

        await this.leavesetupservice.deleteLeavPolicy(value.key);
    }
}
