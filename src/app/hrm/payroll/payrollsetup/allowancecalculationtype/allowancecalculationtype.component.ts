import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-allowancecalculationtype',
  templateUrl: './allowancecalculationtype.component.html',
  styleUrls: ['./allowancecalculationtype.component.scss']
})
export class AllowancecalculationtypeComponent implements OnInit {
  public allowanceCalculationtype: any;
  newtype: any;

  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getallowancecalculationtypes();
    this.allowanceCalculationtype = this.payrollsetupservice.allowancecalculationtype;
    console.log(this.allowanceCalculationtype);
    
  }

  async addAllowanceCalculationType(value) {
    await this.payrollsetupservice.addallowancecalculationtype(value.data);
  }

  async updateAllowanceCalculationType(value) {
    console.log(value);
    await this.payrollsetupservice.updateallowancecalculationtype(value);
  }

  async deleteallowanceCalculationType(value) {
    await this.payrollsetupservice.Deleteallowancecalculationtype(value.key);
  }

}