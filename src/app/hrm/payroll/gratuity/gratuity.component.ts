import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../services/payrollsetup.service'; 
import { PayrollService } from '../services/payroll.service';
import { EmployeeService } from '../../employee/services/employee.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gratuity',
  templateUrl: './gratuity.component.html',
  styleUrls: ['./gratuity.component.scss']
})
export class GratuityComponent implements OnInit {

  public Gratuity: any;
  private updatingGratuity: any;
  public gratuities = [];

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  GratuityForm: any;

  constructor(private fb: FormBuilder,public payrollservice: PayrollService, 
    public Employeeservice: EmployeeService, public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() { 
    this.GratuityForm = this.fb.group({
      GratuityAmount: ['', Validators.required],
      TotalSalary: ['', Validators.required],
      From: ['', Validators.required],
      To: ['', Validators.required],
      GratuityTypeId: ['', Validators.required],
      LeavingReasonId: ['', Validators.required],
      UserId: ['', Validators.required],
      FundSetupId: ['', Validators.required]
  });


    await this.payrollservice.getgratuities();
    this.Gratuity = this.payrollservice.getGratuity;

    await this.payrollsetupservice.getleavingreasons();
    let leavingReason = this.payrollsetupservice.leavingreason;
    
    await this.payrollsetupservice.getgratuityslabs();
    let gratuitySlaB = this.payrollsetupservice.gratuityslab;
    
    await this.payrollsetupservice.getgratuitytypes();
    let gratuityType = this.payrollsetupservice.gratuitytype;
   
    await this.payrollsetupservice.getfundsetups();
    let fundSetup = this.payrollsetupservice.fundsetup;
   
    await this.Employeeservice.GetAllEmployees();
    let user = this.Employeeservice.employeereg;

  }

  async addGratuity(value) {
    await this.payrollservice.addgratuity(value.data);
  }

  setAmount(e) {
    console.log(e.target.value);
    if(e.keyCode === 13) {
      this.newAttribute.amount = e.target.value;
      console.log(this.newAttribute);
    }

  }

  addFieldValue(e) {
    console.log(e);
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
    console.log(this.fieldArray);
    
}
deleteFieldValue(title, index) {
    let y = this.fieldArray.filter(l => l.title == title);
    this.payrollsetupservice.gratuityslab.push(y[0]);
    this.fieldArray.splice(index, 1);
}

selectLeaveType(e) {
    console.log(e);
    let x = this.payrollsetupservice.gratuityslab.filter(l => l.gratuitySlabGratuityId == e.target.value);
    console.log(x);
    this.newAttribute = x[0];
    this.payrollsetupservice.gratuityslab = this.payrollsetupservice.gratuityslab.filter(l => l.GratuitySlabGratuityId != e.target.value);
    console.log(this.payrollsetupservice.gratuityslab);
}

  GratuityUpdating(value) {
    this.updatingGratuity = { ...value.oldData, ...value.newData};
  }
  async updateGratuity() {
    await this.payrollservice.updategratuity(this.updatingGratuity);
  }

  async deleteGratuity(value) {
    await this.payrollservice.Deletegratuity(value.key);
  }
}