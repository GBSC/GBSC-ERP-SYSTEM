import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService, SetupService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-master-payroll-detail',
    templateUrl: './master-payroll-detail.component.html',
    styleUrls: ['./master-payroll-detail.component.scss']
})
export class MasterPayrollDetailComponent implements OnInit {

    public masterPayrollId: any;
    public employees: any;
    public masterPayroll: any;
    public currency: any;
    public benefit: any;
    public allowance: any;
    public banks: any;
    public payrollType: any;
    public salaryCalculationtype: any;
    public frequency: any;


    constructor(public payrollSetupService: PayrollSetupService, public setupService: SetupService, public employeeService: EmployeeService,
        public router: Router) { }


    async ngOnInit() {

        this.masterPayroll = await this.payrollSetupService.getMasterPayrolls();
        console.log(this.masterPayroll)

        this.employees = await this.employeeService.GetAllEmployees();

        this.allowance = await this.payrollSetupService.getAllowanceDeductions();
        
        this.salaryCalculationtype = await this.payrollSetupService.getSalaryCalculationTypes();

        this.benefit = await this.payrollSetupService.getBenefits();

        this.payrollType = await this.payrollSetupService.getPayrollTypes();
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addmasterpayroll.bind(this)
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

    addmasterpayroll() {
        this.router.navigate(['/hrm/payroll/masterpayroll']);
    }

    getData(d) {
        this.masterPayrollId = d.key;
        this.router.navigate(['hrm/payroll/updatemasterpayroll/' + this.masterPayrollId]);
    }
}
