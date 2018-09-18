import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-salarystructuredetail',
  templateUrl: './salarystructuredetail.component.html',
  styleUrls: ['./salarystructuredetail.component.scss']
})
export class SalarystructuredetailComponent implements OnInit {

  public salaryStructureDetail: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getsalarystructuredetails();
        this.salaryStructureDetail = this.payrollsetupservice.salarystructuredetail;
    }

    async addSalaryStructureDetail(value) {
        await this.payrollsetupservice.addsalarystructuredetail(value.data);
    }

    async updateSalaryStructureDetail(value) {
        console.log(value);
        await this.payrollsetupservice.updatesalarystructuredetail(value);
    }

    async deleteSalaryStructureDetail(value) {
        await this.payrollsetupservice.Deletesalarystructuredetail(value.key);
    }

}