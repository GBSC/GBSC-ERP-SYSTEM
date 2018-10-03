import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {

  public payRoll: any;
  public MasterpayRoll: any;
  constructor(public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getpayrolls();
    this.payRoll = this.payrollsetupservice.payroll;

    await this.payrollsetupservice.getmasterpayrolls();
    this.MasterpayRoll = this.payrollsetupservice.masterpayroll;

    await this.employeeservice.GetAllEmployees();
    let user = this.employeeservice.employeereg;
  }

  async addPayroll(value) {
    await this.payrollsetupservice.addpayroll(value.data);
  }

  async updatePayroll(value) {
    console.log(value);
    await this.payrollsetupservice.updatepayroll(value);
  }

  async deletePayroll(value) {
    await this.payrollsetupservice.Deletepayroll(value.key);
  }

}