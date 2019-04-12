import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService, LeaveService, LeaveSetupService, SetupService } from '../../../../core';
import { ToastrService } from 'ngx-toastr';

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
    public empLeavePolicy: any;
    public leaveDayType: any;
    public leaveEligiblity: any;
    public updatingEmpleavePolicy: any;
    public sample: any;
    public selectedLeaveTypes : any ;
    @Input('leavePolicyEmployeeWiseId') id: number;

    constructor(public fb: FormBuilder, public activatedRoute: ActivatedRoute, public setupService: SetupService, public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService,
        public empservice: EmployeeService, public hrsetupservice: SetupService, public router: Router) {
            this.EmployeeleavePolicyForm = this.fb.group({
                LeaveYearId: ['', Validators.required],
                UserId: [''],
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
                IsActive: ['']
    
            });
         }

    async ngOnInit() { 
        this.empleavepolicy = await this.leaveservice.getLeavePolicyEmployee();

        this.leavepolicy = await this.leavesetupservice.getLeavePolicies();

        this.employees = await this.empservice.GetAllEmployees();

        this.leaveyear = await this.leavesetupservice.getLeaveYears();

        this.leaveTypes = await this.leavesetupservice.getLeaveTypes();

        this.leaveDayType = await this.leavesetupservice.getLeaveDayTypes();

        this.leaveEligiblity = await this.leavesetupservice.getLeaveEligibilities();

        this.groups = await this.hrsetupservice.getAllGroups();

        this.activatedRoute.params.subscribe((params) => {
            this.id = +params['id'];
            if (this.isUpdate() === true) {
                this.leaveservice.getEmpPolicyById(this.id).subscribe(resp => {
                    this.empLeavePolicy = resp
                    console.log(resp);
                    this.patchvalues(resp); 
                    console.log(resp);
                });
            }
        });
    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }
    selectedEmployee : any
    getLeavePolicy(userId) { 
        // this.sample = {}
        this.selectedEmployee = this.employees.find(e => e.userId == userId)
        this.sample = this.leavepolicy.find(e => e.groupId ===  this.selectedEmployee.groupId); 
        // if(this.sample != undefined || this.sample != null){
            this.patchvalues(this.sample);
            console.log(this.sample);
        // }  
    }

    getQuantitybyType(leaveTypeId) {  
        this.selectedLeaveTypes = this.leavepolicy.find(e => e.leaveTypeId == leaveTypeId && e.groupId == this.sample.groupId);
        this.patchvalues(this.sample);
    }

    async addemployeeleavepolicy(value) { 
        console.log( this.selectedEmployee.userId);
        
        value.UserId =  this.selectedEmployee.userId 
        await this.leaveservice.addLeavePolicyEmployee(value);
        this.empleavepolicy = await this.leaveservice.getLeavePolicyEmployee();
    } 

    async updateEmpLeavePolicy(value) {
        console.log(value); 
        // value.UserId =  this.selectedEmployee.userId 
        value.leavePolicyEmployeeWiseId = this.id 
        // await this.leaveservice.updateLeavePolicyEmployee(value);
        console.log(value); 
    }

    async deleteEmpleavePolicy(value) {
        await this.leaveservice.DeleteLeavePolicyEmployee(value.key);
    }

    patchvalues(policy: any) {
        this.EmployeeleavePolicyForm.patchValue({
            LeaveYearId: policy.leaveYearId,
            UserId: policy.userId,
            LeaveTypeId: policy.leaveTypeId,
            IsProcessed: policy.isProcessed,
            EntitledQuantity: policy.entitledQuantity,
            MaximumAllowedBalance: policy.maximumAllowedBalance,
            MaximumAtATime: policy.maximumAtATime,
            MinimumAtATime: policy.minimumAtATime,
            DayContinuationRestriction: policy.dayContinuationRestriction,
            MaximumMinimumIntimationPeriodAtATime: policy.minimumIntimationPeriod,
            IsEncashable: policy.isEncashable,
            EncashmentDays: policy.encashmentDays,
            IsMale: policy.isMale,
            EncashmentApplicationLimit: policy.encashmentApplicationLimit,
            IsFemale: policy.isFemale,
            IsMarried: policy.isMarried,
            IsBalanceBroughtForward: policy.isBalanceBroughtForward,
            BalanceBroughtForwardQuantity: policy.balanceBroughtForwardQuantity,
            BalanceBroughtForwardValidity: policy.balanceBroughtForwardValidity,
            IsFileAttachmentRequired: policy.isFileAttachmentRequiredemale,
            FileAttachmentDaysLimit: policy.fileAttachmentDaysLimit,
            IsShortLeaveAllowed: policy.isShortLeaveAllowed,
            ShortLeaveLimit: policy.shortLeaveLimit,
            IsAllowedOnlyOnceInService: policy.isAllowedOnlyOnceInService,
            IsJobPeriodBased: policy.isJobPeriodBased,
            JobPeriodTime: policy.jobPeriodTime,
            PaidDaysQuantity: policy.paidDaysQuantity,
            HalfPaidDaysQuantity: policy.halfPaidDaysQuantity,
            UnPaidDaysQuantity: policy.unPaidDaysQuantity,
            IsProrated: policy.isProrated,  
            IsActive: policy.isActive,
            LeavePolicyEmployeeWiseId: this.id

        });
    }
}