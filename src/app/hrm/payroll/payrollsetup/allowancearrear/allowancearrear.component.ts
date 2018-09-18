import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-allowancearrear',
  templateUrl: './allowancearrear.component.html',
  styleUrls: ['./allowancearrear.component.scss']
})
export class AllowancearrearComponent implements OnInit {
  public allowancearrear: any;

  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getallowancearrears();
    this.allowancearrear = this.payrollsetupservice.allowancearrear;

  }

  async addallowancearrear(value) {
    await this.payrollsetupservice.addallowancearrear(value.data);
  }

  async updateallowancearrear(value) {
    console.log(value);
    await this.payrollsetupservice.updateallowancearrear(value);
  }

  async deleteallowancearrear(value) {
    await this.payrollsetupservice.Deleteallowancearrear(value.key);
  }

}