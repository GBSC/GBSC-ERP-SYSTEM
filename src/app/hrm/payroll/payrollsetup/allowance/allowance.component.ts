import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.scss']
})
export class AllowanceComponent implements OnInit {
  public allowance: any;

  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getallowances();
    this.allowance = this.payrollsetupservice.allowance;

    await this.payrollsetupservice.getallowancedeductions();
    let allowancededuction = this.payrollsetupservice.allowancededuction;
  }

  async addallowance(value) {
    await this.payrollsetupservice.addallowance(value.data);
  }

  async updateallowance(value) {
    console.log(value);
    await this.payrollsetupservice.updateallowance(value);
  }

  async deleteallowance(value) {
    await this.payrollsetupservice.Deleteallowance(value.key);
  }

}
