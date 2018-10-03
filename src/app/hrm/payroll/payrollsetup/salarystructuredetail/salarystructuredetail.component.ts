import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

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
       
        await this.payrollsetupservice.getsalarycalculationtypes();
        let salaryCalculationtype = this.payrollsetupservice.salarycalculationtype;
        
        await this.payrollsetupservice.getbenefits();
        let benefit = this.payrollsetupservice.benefits;
        
        await this.payrollsetupservice.getallowances();
        let allowance = this.payrollsetupservice.allowance;
        
        await this.payrollsetupservice.getsalarystructures();
        let salarystructure = this.payrollsetupservice.salarystructure;
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