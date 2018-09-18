import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-compensation-transaction',
  templateUrl: './compensation-transaction.component.html',
  styleUrls: ['./compensation-transaction.component.scss']
})
export class CompensationTransactionComponent implements OnInit {
 
  public compensationTransaction: any; 
 
  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getcompensationtransactions();
    this.compensationTransaction = this.payrollsetupservice.compensationtransaction;
  }

  async addCompensationTransaction(value) {
    await this.payrollsetupservice.addcompensationtransaction(value.data);
  }

  async updateCompensationTransaction(value) {
    console.log(value);
    await this.payrollsetupservice.updatecompensationtransaction(value);
  }

  async deleteCompensationTransaction(value) {
    await this.payrollsetupservice.Deletecompensationtransaction(value.key);
  }

}