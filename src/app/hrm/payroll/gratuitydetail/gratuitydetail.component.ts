import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayrollSetupService, EmployeeService, PayrollService } from '../../../core';

@Component({
    selector: 'app-gratuitydetail',
    templateUrl: './gratuitydetail.component.html',
    styleUrls: ['./gratuitydetail.component.scss']
})
export class GratuitydetailComponent implements OnInit {

    public gratuityId: any;
    public gratuity: any;
    public employees: any;
    public gratuityTypes: any;
    public leavingReasons: any;
    public fundSetups: any;
    public gratuitySlabs: any;
    public paySlip: any;

    constructor(public router: Router, public payrollservice: PayrollService,
        public employeeservice: EmployeeService, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.gratuity = await this.payrollservice.getGratuities();

        this.leavingReasons = await this.payrollsetupservice.getLeavingReasons();

        this.gratuitySlabs = await this.payrollsetupservice.getGratuitySlabs();

        this.gratuityTypes = await this.payrollsetupservice.getGratuityTypes();

        this.fundSetups = await this.payrollsetupservice.getFundSetups();

        this.employees = await this.employeeservice.GetAllEmployees();

        this.paySlip = await this.payrollservice.getPayslips();
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addgratuity.bind(this)
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

    addgratuity() {
        this.router.navigate(['/hrm/payroll/gratuity']);
    }

    getData(d) {
        this.gratuityId = d.key;
        this.router.navigate(['hrm/payroll/updategratuity/' + this.gratuityId]);
    }

}
