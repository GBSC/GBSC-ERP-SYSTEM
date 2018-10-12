import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.CompensationTransactionForm = this.fb.group({
            PayrollyearId: ['', Validators],
            Month: ['', Validators],
            UserId: ['', Validators],
            PayrollTypeId: ['', Validators],
            AllowanceId: ['', Validators],
            Amount: ['', Validators],
            Remarks: ['', Validators],
            IsTaxableIncome: ['', Validators]
        });

        this.compensationTransaction = await this.payrollsetupservice.getCompensationTransactions();

        this.payrollYears = await this.payrollsetupservice.getPayrollYears(); 

        this.employees = await this.employeeservice.GetAllEmployees(); 

        this.payrollTypes = await this.payrollsetupservice.getPayrollTypes(); 

        this.allowances = await this.payrollsetupservice.getAllowances(); 
    }

    async addCompensationTransaction() {
        await this.payrollsetupservice.addCompensationTransaction(this.CompensationTransactionForm.value);
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