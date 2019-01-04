import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view-compensation-transaction',
    templateUrl: './view-compensation-transaction.component.html',
    styleUrls: ['./view-compensation-transaction.component.scss']
})
export class ViewCompensationTransactionComponent implements OnInit {

    public compensationTransaction: any;
    public payrollYears: any;
    public allowances: any;
    public employees: any;
    public payrollTypes: any;
    popupVisible = false;

    constructor(public router: Router, public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.compensationTransaction = await this.payrollsetupservice.getCompensationTransactions();

        this.payrollYears = await this.payrollsetupservice.getPayrollYears();

        this.employees = await this.employeeservice.GetAllEmployees();

        this.payrollTypes = await this.payrollsetupservice.getPayrollTypes();

        this.allowances = await this.payrollsetupservice.getAllowances();
    }


    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.CompensationTransaction.bind(this)
                }
            });
    }

    async CompensationTransaction() {
        this.router.navigate(['hrm/payroll/payrollsetup/compensationtransaction']);
    }
    showInfo() {
        this.popupVisible = true;
    }
}