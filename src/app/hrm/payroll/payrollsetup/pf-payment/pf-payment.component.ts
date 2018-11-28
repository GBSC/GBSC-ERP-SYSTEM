import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-pf-payment',
    templateUrl: './pf-payment.component.html',
    styleUrls: ['./pf-payment.component.css']
})
export class PfPaymentComponent implements OnInit {
    public pfPayment: any;
    public leavingReason: any;
    public employees: any;
    public fundSetup: any;
    private updatingPF: any;

    constructor(public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {
        this.pfPayment = await this.payrollsetupservice.getPfPayments();

        this.leavingReason = await this.payrollsetupservice.getLeavingReasons();

        this.employees = await this.employeeservice.GetAllEmployees();

        this.fundSetup = await this.payrollsetupservice.getFundSetups();
    }

    async addPFPayment(value) {
        await this.payrollsetupservice.addPfPayment(value.data);
        this.pfPayment = await this.payrollsetupservice.getPfPayments();
    }

    updatingPFPayment(value) {
        this.updatingPF = { ...value.oldData, ...value.newData };
    }

    async updatePFPayment() {
        await this.payrollsetupservice.updatePfPayment(this.updatingPF);
    }

    async deletePFPayment(value) {
        await this.payrollsetupservice.DeletePfPayment(value.key);
    }

}