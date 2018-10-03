import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
  selector: 'app-master-payroll-detail',
  templateUrl: './master-payroll-detail.component.html',
  styleUrls: ['./master-payroll-detail.component.scss']
})
export class MasterPayrollDetailComponent implements OnInit {

  public masterPayrollDetail: any; 
    constructor(public payrollsetupservice: PayrollSetupService) { }

   async ngOnInit() {
        await this.payrollsetupservice.getmasterpayrolldetails();
        this.masterPayrollDetail = this.payrollsetupservice.masterpayrolldetail;
      }
    
      async addMasterPayrollDetail(value) {
        await this.payrollsetupservice.addmasterpayrolldetail(value.data);
      }
    
      async updateMasterPayrollDetail(value) {
        console.log(value);
        await this.payrollsetupservice.updatemasterpayrolldetail(value);
      }
    
      async deleteMasterPayrollDetail(value) {
        await this.payrollsetupservice.Deletemasterpayrolldetail(value.key);
      }
    
    }