import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../../services/payroll.service';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-stopsalary',
  templateUrl: './stopsalary.component.html',
  styleUrls: ['./stopsalary.component.scss']
})
export class StopsalaryComponent implements OnInit {

  public StopSalary: any;
  private updatingstopsalary: any;

  constructor(public payrollservice: PayrollService, public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollservice.getstopsalaries();
    this.StopSalary = this.payrollservice.stopsalary;

    await this.payrollsetupservice.getpayrolltypes();
    let PayrollType = this.payrollsetupservice.payrolltype;
  }

  async addStopSalary(value) {
    await this.payrollservice.addstopsalary(value.data);
  }

  StopSalaryUpdating(value) {
    this.updatingstopsalary = { ...value.oldData, ...value.newData};
  }
  async updateStopSalary() {
    await this.payrollservice.updatestopsalary(this.updatingstopsalary);
  }

  async deleteStopSalary(value) {
    await this.payrollservice.Deletestopsalary(value.key);
  }
}