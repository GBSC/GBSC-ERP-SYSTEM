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
    public groups: any = [];
    public leavepolicy: any;
    public leavetype: any;
    private updatingleavePolicy: any;
    private LeavePolicies : any;

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


        this.LeavePolicies = await this.leavesetupservice.getAllleavepolicy();
        console.log(this.LeavePolicies);
        
        //this.leavepolicy = this.leavesetupservice.leavepolicy;

        await this.leavesetupservice.getAllleaveyear();
        let leaveyear = this.leavesetupservice.leaveyear;

        this.leavetype = await this.leavesetupservice.getAllleavetype();
        //let levetype = this.leavesetupservice.leavetype;

        await this.leavesetupservice.getAllleavedaytype();
        let levedaytype = this.leavesetupservice.leavedaytype;
        
        await this.leavesetupservice.getAllleaveeligibility();
        let leaveEligibility = this.leavesetupservice.leaveeligibility;

        await this.hrsetupservice.getAllGroups();
        let groups = this.hrsetupservice.group;
   
    }

    async addleavepolicy() {
        await this.leavesetupservice.addleavepolicy(this.leavePolicyForm.value);
        this.LeavePolicies = await this.leavesetupservice.getAllleavepolicy();
    }

    updatingleavepolicy(value) {
        // console.log(value);
        this.updatingleavePolicy = { ...value.oldData, ...value.newData };
        console.log(this.updatingleavePolicy);
  
    }
    async updateLeavePolicy() {
        await this.leavesetupservice.updateleavepolicy(this.updatingleavePolicy);
    }

   async deleteleavePolicy(value){

    await this.leavesetupservice.Deleteleavpolicy(value.key);
    }
}
