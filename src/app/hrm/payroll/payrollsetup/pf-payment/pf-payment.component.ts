import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-pf-payment',
    templateUrl: './pf-payment.component.html',
    styleUrls: ['./pf-payment.component.css']
})
export class PfPaymentComponent implements OnInit {

    public pfPayment: any;
    private updatingPF: any;
    constructor(public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getpfpayments();
        this.pfPayment = this.payrollsetupservice.pfpayment;

        await this.payrollsetupservice.getleavingreasons();
        let leavingreason = this.payrollsetupservice.leavingreason;

        await this.employeeservice.GetAllEmployees();
        let user = this.employeeservice.employeereg;

        await this.payrollsetupservice.getfundsetups();
        let fundSetup = this.payrollsetupservice.fundsetup;
    }

    async addPFPayment(value) {
        await this.payrollsetupservice.addpfpayment(value.data);
    }

    updatingPFPayment(value) {
        this.updatingPF = { ...value.oldData, ...value.newData };
    }

    async updatePFPayment() {
        await this.payrollsetupservice.updatepfpayment(this.updatingPF);
    }

    async deletePFPayment(value) {
        await this.payrollsetupservice.Deletepfpayment(value.key);
    }

}