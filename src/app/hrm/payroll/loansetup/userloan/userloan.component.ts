import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';
import { EmployeeService } from '../../../employee/services/employee.service';

@Component({
  selector: 'app-userloan',
  templateUrl: './userloan.component.html',
  styleUrls: ['./userloan.component.scss']
})
export class UserloanComponent implements OnInit {

  public UserLoan: any;
  public Updateloan: any;

  constructor(public payrollsetupservice: PayrollSetupService,public employeeservice : EmployeeService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getuserloans();
    this.UserLoan = this.payrollsetupservice.userloan;
    
    await this.payrollsetupservice.getloantypes();
    let Loantype = this.payrollsetupservice.loantype;

    
    await this.employeeservice.GetAllEmployees();
    let employee = this.employeeservice.employeereg;
  }

  async addUserLoan(value) {
    await this.payrollsetupservice.adduserloan(value.data);
  }

  Updatingloan(value) { 
    this.Updateloan = {...value.oldData, ...value.newData}; 
  }

  async updateUserLoan() { 
    await this.payrollsetupservice.updateuserloan(this.Updateloan);
  }

  async deleteUserLoan(value) {
    await this.payrollsetupservice.Deleteuserloan(value.key);
  }
}