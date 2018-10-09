import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
  selector: 'app-master-payroll-detail',
  templateUrl: './master-payroll-detail.component.html',
  styleUrls: ['./master-payroll-detail.component.scss']
})
export class MasterPayrollDetailComponent implements OnInit {

  public masterPayrollDetail: any; 
  public masterdetailupdating: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

   async ngOnInit() {
        await this.payrollsetupservice.getmasterpayrolldetails();
        this.masterPayrollDetail = this.payrollsetupservice.masterpayrolldetail;
      }
    
      async addMasterPayrolldetail(value) {

        let x = await this.payrollsetupservice.addmasterpayroll(value.data);
      }
    
      updatingMasterDetail(value) {
        this.masterdetailupdating = { ...value.oldData, ...value.newData };
        console.log(value);
    
      }
      async updateMasterDetail() {
        await this.payrollsetupservice.updatemasterpayrolldetail(this.masterdetailupdating);
      }
    
    }