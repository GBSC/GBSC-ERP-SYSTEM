import { Component, OnInit } from '@angular/core';
import { LeaveSetupService, EmployeeService } from '../../../../core';

@Component({
  selector: 'app-leaveapprover',
  templateUrl: './leaveapprover.component.html',
  styleUrls: ['./leaveapprover.component.scss']
})
export class LeaveapproverComponent implements OnInit {
 public leaveapprover: any;

  constructor(public leavesetupservice:LeaveSetupService,public employeeservice:EmployeeService) { }

  async ngOnInit() {
 
    await this.leavesetupservice.getleaveapprover(); 
    this.leaveapprover = this.leavesetupservice.leaveapprover
    console.log(this.leaveapprover);
    
    await this.employeeservice.GetAllEmployees();
    let employe = this.employeeservice.employeereg;

  }

  
  async addapprover(value) { 
    this.leavesetupservice.addleaveapprover(value.data);
  }
  
  async updateapprover(value) { 
    this.leavesetupservice.updateleaveapprover(value);  
 
  }

  async deleteapprover(value) {  
    this.leavesetupservice.Deleteleaveapprover(value.key);  
  }
}
