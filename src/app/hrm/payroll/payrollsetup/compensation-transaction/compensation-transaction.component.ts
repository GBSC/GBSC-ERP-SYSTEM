import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-compensation-transaction',
    templateUrl: './compensation-transaction.component.html',
    styleUrls: ['./compensation-transaction.component.scss']
})
export class CompensationTransactionComponent implements OnInit {

    public compensationTransaction: any;
    public CompensationTransactionForm: FormGroup;
    public payrollYears: any;
    public allowances: any;
    public employees: any;
    public payrollTypes: any;
    public updatingTransaction: any;

    constructor(public fb: FormBuilder, public router: Router, public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.compensationTransaction = await this.payrollsetupservice.getCompensationTransactions();

        this.payrollsetupservice.getPayrollYears().subscribe(resp => {
            this.payrollYears = resp;
           console.log(this.payrollYears);
         })

        this.employees = await this.employeeservice.GetAllEmployees();

        this.payrollTypes = await this.payrollsetupservice.getPayrollTypes();

        this.allowances = await this.payrollsetupservice.getAllowanceDeductions();
    }

    async addCompensationTransaction(value) {
        await this.payrollsetupservice.addCompensationTransaction(value.data);
        this.compensationTransaction = await this.payrollsetupservice.getCompensationTransactions();
    }

    updatingCompensationTransaction(value) {
        this.updatingTransaction = { ...value.oldData, ...value.newData };
    }
    async updateCompensationTransact() {
        await this.payrollsetupservice.updateCompensationTransaction(this.updatingTransaction);
    }

    async deleteCompensationTransaction(value) {
        await this.payrollsetupservice.deleteCompensationTransaction(value.key);
    }

}