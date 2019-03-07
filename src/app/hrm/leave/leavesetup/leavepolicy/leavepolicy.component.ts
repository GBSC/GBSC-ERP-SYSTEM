import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService, LeaveSetupService, SetupService } from '../../../../core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    public updatingleavePolicy: any;
    public LeavePolicies: any;
    public isPopupVisible: boolean = true;

    constructor(public fb: FormBuilder, public toster: ToastrService, public leavesetupservice: LeaveSetupService,
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
        
        this.leaveTypes = await this.leavesetupservice.getLeaveTypes();

        this.leveDayTypes = await this.leavesetupservice.getLeaveDayTypes();

        this.leaveEligibility = await this.leavesetupservice.getLeaveEligibilities();

        this.groups = await this.hrsetupservice.getAllGroups();

    }

    async addleavepolicy(value) {
        console.log(value);
        
        console.log(value.data.maximumAllowedBalance);
        
        if(value.data.maximumAllowedBalance <= value.data.entitledQuantity && value.data.maximumAtATime <= value.data.entitledQuantity 
            && value.data.minimumAtATime <= value.data.entitledQuantity){  
            await this.leavesetupservice.addLeavePolicy(value.data);
            this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();    
            this.toster.success("Successfully! Leave Policy Add")
        }
        else{
            this.toster.info("error!");
        } 
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
