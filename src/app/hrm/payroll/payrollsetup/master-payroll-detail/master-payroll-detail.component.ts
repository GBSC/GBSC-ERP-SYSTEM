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

        this.masterPayrollDetail =  await this.payrollsetupservice.getMasterPayrollDetails();  
    }

    async addMasterPayrolldetail(value) {

         await this.payrollsetupservice.addMasterPayrollDetail(value.data);
    }

    updatingMasterDetail(value) {
        this.masterdetailupdating = { ...value.oldData, ...value.newData }; 

    }
    async updateMasterDetail() {
        await this.payrollsetupservice.updateMasterPayrollDetail(this.masterdetailupdating);
    }

}