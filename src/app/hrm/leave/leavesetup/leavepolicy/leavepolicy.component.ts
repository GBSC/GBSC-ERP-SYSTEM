import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveSetupService } from '../../leaveSetup.service';
import { EmployeeService } from '../../../employee/services/employee.service';
import { Router } from '@angular/router';
import { SetupService } from '../../../hrmsSetup/services/setup.service';

@Component({
    selector: 'app-leavepolicy',
    templateUrl: './leavepolicy.component.html',
    styleUrls: ['./leavepolicy.component.css']
})
export class LeavepolicyComponent implements OnInit {
    public leavePolicyForm: FormGroup;
    public groups: any = [];
<<<<<<< HEAD
    public leavePolicyForm: any;
    constructor(public fb: FormBuilder, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService, public router: Router) { }
=======
    public leavepolicy: any;
    private updatingleavePolicy: any;
    private LeavePolicies : any;

    constructor(private fb: FormBuilder, public leavesetupservice: LeaveSetupService,
        public empservice: EmployeeService, public hrsetupservice: SetupService, public router: Router) { }
>>>>>>> master

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

        await this.leavesetupservice.getAllleavetype();
        let levetype = this.leavesetupservice.leavetype;

        await this.leavesetupservice.getAllleavedaytype();
        let levedaytype = this.leavesetupservice.leavedaytype;
        
        await this.leavesetupservice.getAllleaveeligibility();
        let leaveEligibility = this.leavesetupservice.leaveeligibility;

        await this.hrsetupservice.getAllGroups();
        let groups = this.hrsetupservice.group;
      

<<<<<<< HEAD
        this.leavePolicyForm = this.fb.group({
            LeaveYearId: ['', Validators],
            GroupId: ['', Validators],
            LeaveTypeId: ['', Validators],
            LeaveDayTypeId: ['', Validators],
            LeaveEligibilityId: ['', Validators],
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


        this.groups = [
            { checked: false, index: '01', name: 'N/A' },
            { checked: true, index: '02', name: 'N/A' },
            { checked: false, index: '03', name: 'N/A' },
            { checked: false, index: '04', name: 'N/A' },
            { checked: false, index: '05', name: 'N/A' }
        ]
=======
        // this.groups = [
        //     { checked: false, index: '01', name: 'N/A' },
        //     { checked: true, index: '02', name: 'N/A' },
        //     { checked: false, index: '03', name: 'N/A' },
        //     { checked: false, index: '04', name: 'N/A' },
        //     { checked: false, index: '05', name: 'N/A' }
        // ]
    }

    async addleavepolicy() {
        await this.leavesetupservice.addleavepolicy(this.leavePolicyForm.value);
        this.LeavePolicies = await this.leavesetupservice.getAllleavepolicy();
>>>>>>> master
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
