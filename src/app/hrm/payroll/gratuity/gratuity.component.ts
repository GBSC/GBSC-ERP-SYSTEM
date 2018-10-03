import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { GratuitySlabGratuity } from '../../model/gratuitySlabGratuity';
import { GratuitySlab } from '../../model/gratuitySlab';
import { EmployeeService, PayrollService, PayrollSetupService } from '../../../core';

@Component({
  selector: 'app-gratuity',
  templateUrl: './gratuity.component.html',
  styleUrls: ['./gratuity.component.scss']
})
export class GratuityComponent implements OnInit {

  public Gratuity: any;
  private updatingGratuity: any;
  private gratuityslab : GratuitySlabGratuity[];
 
  public GratuityForm: any;

  constructor(private fb: FormBuilder,public payrollservice: PayrollService, 
    public Employeeservice: EmployeeService, public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() { 

    this.gratuityslab = []; 

    this.GratuityForm = this.fb.group({
      GratuityAmount: ['', Validators],
      TotalSalary: ['', Validators],
      From: ['', Validators],
      To: ['', Validators],
      GratuityTypeId: ['', Validators],
      LeavingReasonId: ['', Validators],
      UserId: ['', Validators],
      FundSetupId: ['', Validators]
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

  async gratuitySlab(value) {
    let data = value.data;
    this.gratuityslab.push(data);
    console.log(this.gratuityslab);
  }

  async addGratuity(value) {
    console.log(value);
    let pushslab = new GratuitySlab();
    pushslab = {...pushslab, ...value};
    console.log(this.gratuityslab);
    pushslab.gratuitySlabGratuities = this.gratuityslab;
    console.log(pushslab); 
   let x= await this.payrollservice.addgratuity(pushslab);
   console.log(x);
   this.GratuityForm.reset();
   
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