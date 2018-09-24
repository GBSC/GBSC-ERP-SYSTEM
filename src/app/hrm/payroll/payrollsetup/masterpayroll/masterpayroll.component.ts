import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';
import { EmployeeService } from '../../../employee/services/employee.service';

@Component({
  selector: 'app-masterpayroll',
  templateUrl: './masterpayroll.component.html',
  styleUrls: ['./masterpayroll.component.scss']
})
export class MasterpayrollComponent implements OnInit {

  public masterPayroll: any;
  public masterPayrollDetail: any;

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  constructor(public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getmasterpayrolls();
    this.masterPayroll = this.payrollsetupservice.masterpayroll;

    await this.payrollsetupservice.getmasterpayrolldetails();
    this.masterPayrollDetail = this.payrollsetupservice.masterpayrolldetail;

    await this.empservice.GetAllEmployees();
    let users = this.empservice.employeereg;

    await this.payrollsetupservice.getCurrencies();
    let currency = this.payrollsetupservice.Currency;

    await this.payrollsetupservice.getallowances();
    let allowance = this.payrollsetupservice.allowance;

    await this.payrollsetupservice.getfrequencies();
    let frequency = this.payrollsetupservice.frequency;

    await this.payrollsetupservice.getpayrolltypes();
    let payrolltype = this.payrollsetupservice.payrolltype;
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  async addMasterPayrolldetail(value) {

    await this.payrollsetupservice.addmasterpayroll(value.data);

    await this.payrollsetupservice.addmasterpayrolldetail(value.data);
  }

  async updateMasterPayroll(value) {
    console.log(value);
    await this.payrollsetupservice.updatemasterpayroll(value);
  }

  async deleteMasterPayroll(value) {
    await this.payrollsetupservice.Deletemasterpayroll(value.key);
  }

}