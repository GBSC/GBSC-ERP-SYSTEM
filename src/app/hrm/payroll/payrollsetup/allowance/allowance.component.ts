import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.scss']
})
export class AllowanceComponent implements OnInit {
  public allowance: any;
  Allowance: any;

  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getallowances();
    this.allowance = this.payrollsetupservice.allowance;

    await this.payrollsetupservice.getallowancedeductions();
    let allowancededuction = this.payrollsetupservice.allowancededuction;
   
    await this.payrollsetupservice.getallowancecalculationtypes();
    let allowancetype = this.payrollsetupservice.allowancecalculationtype;
  }

  async addallowance(value) {
    await this.payrollsetupservice.addallowance(value.data);
  }

  async updatingallowance(value) { 
   this.Allowance = {...value.oldData, ...value.newData};
  }
  async updateallowance() { 
    await this.payrollsetupservice.updateallowance(this.Allowance);
  }

  async deleteallowance(value) {
    await this.payrollsetupservice.Deleteallowance(value.key);
  }

}
