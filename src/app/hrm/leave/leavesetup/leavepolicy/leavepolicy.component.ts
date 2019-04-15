import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService, LeaveSetupService, SetupService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
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
    public leavePolicy: any; 
    public leaveTypes: any;
    public updatingleavePolicy: any;
    public LeavePolicies: any;
    public isPopupVisible: boolean = true;
    submitted = false;

    @Input('leavePolicyId') id: number;

 
    constructor(public toastr: ToastrService, public activatedRoute: ActivatedRoute, public fb: FormBuilder, public toster: ToastrService, public leavesetupservice: LeaveSetupService,
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

        this.activatedRoute.params.subscribe((params) => {
            this.id = +params['id']; 
            console.log(this.id);
            if (this.isUpdate() === true) {
                this.leavesetupservice.getLeavePoliciy(this.id).subscribe(resp => {
    
                    this.leavePolicy = resp 
                    this.patchValues(resp);
                    
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

    get lp() { return this.leavePolicyForm.controls; }

    async addleavepolicy(value) {
        this.submitted = true;
        if (this.leavePolicyForm.invalid) {
            this.toastr.error("Fill All Required Fields");
        }
        else {
            if (value.MaximumAllowedBalance <= value.EntitledQuantity) {

                if (value.MaximumAtATime <= value.EntitledQuantity) {
                    if (value.MinimumAtATime <= value.EntitledQuantity) {

                        await this.leavesetupservice.addLeavePolicy(value);
                        this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();
                        this.toster.success("Successfully! Leave Policy Add")
                    }
                    else {

                        this.toster.info("Minimum can be Taken Value Invalid");
                    }
                }
                else {

                    this.toster.info("Maximum can be Taken Value Invalid");
                }
            }
            else {

                this.toster.info("Maximum Allowed Value Invalid");
            }
        }
    }
 
    async updateLeavePolicy(value) {
        this.submitted = true;
        if (this.leavePolicyForm.invalid) {
            this.toastr.error("Fill All Required Fields");
        }
        else {
            if (value.MaximumAllowedBalance <= value.EntitledQuantity) {

                if (value.MaximumAtATime <= value.EntitledQuantity) {
                    if (value.MinimumAtATime <= value.EntitledQuantity) {

                        value.leavePolicyId = this.id;
                        await this.leavesetupservice.updateLeavePolicy(value);
                        this.router.navigate(['hrm/leave/leavepolicydetail/']);
                        this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();
                        this.toster.success("Successfully! Leave Policy Updated")
                    }
                    else {

                        this.toster.info("Minimum at a Time Value Invalid");
                    }
                }
                else {

                    this.toster.info("Maximum at a Time Value Invalid");
                }
            }
            else {

                this.toster.info("Maximum Allowed Value Invalid");
            }
        }
    }  

    async deleteleavePolicy(value) {

        await this.leavesetupservice.deleteLeavPolicy(value.key);
    }

    patchValues(policy: any) {

        this.leavePolicyForm.patchValue({

            LeaveYearId: policy.leaveYearId,
            GroupId: policy.groupId,
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
            IsFileAttachmentRequired: policy.isFIsFileAttachmentRequiredemale,
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
            IsMonthBased: policy.isMonthBased,
            AllowOnZeroBalance: policy.allowOnZeroBalance,
            IsActive: policy.isActive,
            ApplicationLimit: policy.applicationLimit,
            PrintOnPaySlip: policy.printOnPaySlip,
            leavePolicyId: this.id 
        })

    }
}
