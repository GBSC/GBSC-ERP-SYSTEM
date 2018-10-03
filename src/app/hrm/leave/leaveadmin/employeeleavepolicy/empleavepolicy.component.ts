import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
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
  
  constructor(private fb: FormBuilder,public leaveservice:LeaveService,public leavesetupservice:LeaveSetupService, 
    public empservice:EmployeeService, public hrsetupservice:SetupService, public router: Router) { }

  async ngOnInit() {

    this.EmployeeleavePolicyForm = this.fb.group({
      LeaveYearId: ['', Validators],   
      UserId: ['', Validators],   
      LeaveTypeId: ['', Validators],
      LeaveDayTypeId: ['', Validators],
      LeaveEligibilityId: ['', Validators],

      IsPeriodic:['', Validators],
      PeriodicFrom:['', Validators],
      PeriodicTill:['', Validators],

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


    await this.leaveservice.getAllleavepolicyemployee();
    this.empleavepolicy = this.leaveservice.leavepolicyemployee 
  
    await this.empservice.GetAllEmployees();
    let employee = this.empservice.employeereg; 

    await this.leavesetupservice.getAllleaveyear();
    let leaveyear = this.leavesetupservice.leaveyear;
    
    await this.leavesetupservice.getAllleavetype();
    let levetype = this.leavesetupservice.leavetype;
    
    await this.leavesetupservice.getAllleavedaytype();
    let levedaytype = this.leavesetupservice.leavedaytype;

    await this.leavesetupservice.getAllleaveeligibility();
    let leaveeligiblity = this.leavesetupservice.leaveeligibility;
  
    await this.hrsetupservice.getAllGroups();
    let groups = this.hrsetupservice.group;
  }

  async addemployeeleavepolicy(empleavepolicy){
    console.log(empleavepolicy);
    this.leaveservice.addleavepolicyemployee(empleavepolicy);
}

}
