import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
  selector: 'app-loantype',
  templateUrl: './loantype.component.html',
  styleUrls: ['./loantype.component.scss']
})
export class LoantypeComponent implements OnInit {
  private UpdatedModel : any;

  public LoanType: any;

  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getloantypes();
    this.LoanType = this.payrollsetupservice.loantype;
   
  }

  async addLoanType(value) {
    await this.payrollsetupservice.addloantype(value.data);
  }

  
  UpdateModel(value) { 
    this.UpdatedModel = {...value.oldData, ...value.newData}; 
  }

  async updateLoanType() {
    return await this.payrollsetupservice.updateloantype(this.UpdatedModel);
  }

  async deleteLoanType(value) {
    await this.payrollsetupservice.Deleteloantype(value.key);
  }
}