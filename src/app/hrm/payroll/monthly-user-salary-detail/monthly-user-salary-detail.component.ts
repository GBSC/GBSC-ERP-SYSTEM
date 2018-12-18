import { Component, OnInit } from '@angular/core';
import { PayrollService, EmployeeService, PayrollSetupService } from '../../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-monthly-user-salary-detail',
    templateUrl: './monthly-user-salary-detail.component.html',
    styleUrls: ['./monthly-user-salary-detail.component.scss']
})
export class MonthlyUserSalaryDetailComponent implements OnInit {

    public stopSalary: any;
    public monthlySalary: any;
    public paySlip: any;
    public employees: any;
    public userSalary: any;
    public monthlyUserSalary: any;
    public pfPayment: any;
    public payroll: any;
    public userSalaryId: any;

    constructor(public payrollservice: PayrollService, public Employeeservice: EmployeeService, public router: Router,
        public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.monthlySalary = await this.payrollservice.getMonthlySalaries();

        this.stopSalary = await this.payrollservice.getStopSalaries();

        this.employees = await this.Employeeservice.GetAllEmployees();

        this.userSalary = await this.payrollsetupservice.getUserSalaries();

        this.pfPayment = await this.payrollsetupservice.getPfPayments();

        this.payroll = await this.payrollsetupservice.getPayrolls();

        this.paySlip = await this.payrollservice.getPayslips();
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addmonthlysalary.bind(this)
                }
            });
    }


    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(-1);
    }

    selectionChanged(e) {
        e.component.collapseAll(-0);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    addmonthlysalary() {
        this.router.navigate(['/hrm/payroll/monthlyusersalary']);
    }

    getData(d) {
        this.userSalaryId = d.key;
        this.router.navigate(['hrm/payroll/updatemonthlysalary/' + this.userSalaryId]);
    }
}
