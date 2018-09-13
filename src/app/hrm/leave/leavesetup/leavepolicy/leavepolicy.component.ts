import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
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
    public leavePolicyForm:FormGroup;
    public groups: any = []; 

    constructor(private fb: FormBuilder,public leavesetupservice:LeaveSetupService, 
        public empservice:EmployeeService, public hrsetupservice:SetupService, public router: Router) { }

    async ngOnInit() {
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

 
          await this.leavesetupservice.getAllleaveyear();
          let leaveyear = this.leavesetupservice.leaveyear;
          
          await this.leavesetupservice.getAllleavetype();
          let levetype = this.leavesetupservice.leavetype;
          
          await this.leavesetupservice.getAllleavedaytype();
          let levedaytype = this.leavesetupservice.leavedaytype;
        
          await this.hrsetupservice.getAllGroups();
          let groups = this.hrsetupservice.group;
  
        // this.groups = [
        //     { checked: false, index: '01', name: 'N/A' },
        //     { checked: true, index: '02', name: 'N/A' },
        //     { checked: false, index: '03', name: 'N/A' },
        //     { checked: false, index: '04', name: 'N/A' },
        //     { checked: false, index: '05', name: 'N/A' }
        // ]
    }

     async addleavepolicy(policy){
        console.log(policy);
            this.leavesetupservice.addleavepolicy(policy); 
    }
}
