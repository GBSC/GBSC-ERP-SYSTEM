import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-pf-payment',
    templateUrl: './pf-payment.component.html',
    styleUrls: ['./pf-payment.component.css']
})
export class PfPaymentComponent implements OnInit {
<<<<<<< HEAD

    public pfPayment: any;
=======
    public pfPayment: any;
    public leavingReason: any;
    public employees: any;
    public fundSetup: any;
>>>>>>> master
    private updatingPF: any;

    constructor(public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {
<<<<<<< HEAD
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
=======
        this.pfPayment = await this.payrollsetupservice.getPfPayments();

        this.leavingReason = await this.payrollsetupservice.getLeavingReasons();

        this.employees = await this.employeeservice.GetAllEmployees();

        this.fundSetup = await this.payrollsetupservice.getFundSetups();
    }

    async addPFPayment(value) {
        await this.payrollsetupservice.addPfPayment(value.data);
>>>>>>> master
    }

    updatingPFPayment(value) {
        this.updatingPF = { ...value.oldData, ...value.newData };
    }

    async updatePFPayment() {
<<<<<<< HEAD
        await this.payrollsetupservice.updatepfpayment(this.updatingPF);
    }

    async deletePFPayment(value) {
        await this.payrollsetupservice.Deletepfpayment(value.key);
=======
        await this.payrollsetupservice.updatePfPayment(this.updatingPF);
    }

    async deletePFPayment(value) {
        await this.payrollsetupservice.DeletePfPayment(value.key);
>>>>>>> master
    }

}