import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';
import { EmployeeService } from '../../../employee/services/employee.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  public MasterPayrollForm: any;
  public Masterdetail = [];
  public MasterDetailForm: any;

  constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService) { }

  async ngOnInit() {

    this.MasterPayrollForm = this.fb.group({
      UserId: ['', Validators.required],
      BankTransferCode: ['', Validators.required],
      CurrencyId: ['', Validators.required],
      PayrollBankId: ['', Validators.required]
    })

      this.MasterDetailForm = this.fb.group({
        Value: ['', Validators.required],
        EffectiveDate: ['', Validators.required],
        EndDate: ['', Validators.required],
        AllowanceId: ['', Validators.required],
        FrequencyId: ['', Validators.required],
        PayrollTypeId: ['', Validators.required]
     
    });


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
    console.log(this.MasterDetailForm.value);

    this.Masterdetail.push(
      { "allowanceId": this.newAttribute.allowanceId }
    );
    console.log(this.Masterdetail);

    this.MasterPayrollForm.value = {
      ...this.MasterPayrollForm.value,
      MasterPayrollDetails: this.Masterdetail
    };
    console.log(this.MasterPayrollForm.value);
    this.fieldArray.push(this.newAttribute);
    console.log(this.fieldArray);
  }

  // deleteFieldValue(index) {
  //   let y = this.fieldArray.filter(l => l.title == title);
  //       this.leavesetupservice.leavetype.push(y[0]);
  //       this.fieldArray.splice(index, 1);
  // }

  selectLeaveType(e) {
    let x = this.payrollsetupservice.allowance.filter(a => a.allowanceId == e.target.value);
    this.newAttribute = x[0];
    this.payrollsetupservice.allowance = this.payrollsetupservice.allowance.filter(a => a.allowanceId != e.target.value);

  }


  async addMasterPayrolldetail() {
    await this.payrollsetupservice.addmasterpayroll(this.MasterPayrollForm.value);
  }

  async updateMasterPayroll(value) {
    console.log(value);
    await this.payrollsetupservice.updatemasterpayroll(value);
  }

  async deleteMasterPayroll(value) {
    await this.payrollsetupservice.Deletemasterpayroll(value.key);
  }

}