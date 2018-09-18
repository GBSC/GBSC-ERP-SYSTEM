import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../hrm/payroll/services/payrollsetup.service';

@Component({
  selector: 'app-gratuityslab',
  templateUrl: './gratuityslab.component.html',
  styleUrls: ['./gratuityslab.component.css']
})
export class GratuityslabComponent implements OnInit {

  public gratuitySlab: any;
  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getgratuityslabs();
    this.gratuitySlab = this.payrollsetupservice.gratuityslab;
  }

  async addGratuitySlab(value) {
    await this.payrollsetupservice.addgratuityslab(value.data);
  }

  async updateGratuitySlab(value) {
    console.log(value);
    await this.payrollsetupservice.updategratuityslab(value);
  }

  async deleteGratuitySlab(value) {
    await this.payrollsetupservice.Deletegratuityslab(value.key);
  }

}