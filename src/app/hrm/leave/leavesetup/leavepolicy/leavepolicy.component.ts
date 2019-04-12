import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService, LeaveSetupService, SetupService } from '../../../../core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-leavepolicy',
    templateUrl: './leavepolicy.component.html',
    styleUrls: ['./leavepolicy.component.css']
})
export class LeavepolicyComponent implements OnInit {
    public leavePolicyForm: any;
    public groups: any;
    public leavepolicy: any;
    public leveDayTypes: any;
    public leaveEligibility: any;
    public leaveYears: any;
    public leaveTypes: any;
    public updatingleavePolicy: any;
    public LeavePolicies: any;
    public isPopupVisible: boolean = true;
    submitted = false; 

    constructor(public toastr: ToastrService, public fb: FormBuilder, public toster: ToastrService, public leavesetupservice: LeaveSetupService,
        public empservice: EmployeeService, public hrsetupservice: SetupService, public router: Router) {
            this.leavePolicyForm = this.fb.group({
                LeaveYearId: ['', Validators.required],
                GroupId: ['', Validators.required],
                LeaveTypeId: ['', Validators.required], 
                IsProcessed: [''],
                EntitledQuantity: ['', Validators.required],
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
         }

    async ngOnInit() {
 
        this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();
        
        this.leaveTypes = await this.leavesetupservice.getLeaveTypes();
        
        this.leaveYears = await this.leavesetupservice.getLeaveYears(); 
        this.groups = await this.hrsetupservice.getAllGroups();

    }

    async addleavepolicy(value) { 
        console.log(value);
        
        this.submitted = true;
        if (this.leavePolicyForm.invalid) {
            this.toastr.error("Fill All Required Fields");
        }
        else{
        if(value.MaximumAllowedBalance <= value.EntitledQuantity && value.MaximumAtATime <= value.EntitledQuantity 
            && value.MinimumAtATime <= value.EntitledQuantity){  
            await this.leavesetupservice.addLeavePolicy(value);
            this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();    
            this.toster.success("Successfully! Leave Policy Add")
            } 
            else{

                this.toster.info("Something went wrong!");
            } 
            
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

    get lp() { return this.leavePolicyForm.controls; }

}
