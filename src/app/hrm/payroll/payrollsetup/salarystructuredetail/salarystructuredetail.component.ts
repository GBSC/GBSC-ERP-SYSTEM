import { Component, OnInit } from '@angular/core';
import { SetupService, PayrollSetupService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-salarystructuredetail',
    templateUrl: './salarystructuredetail.component.html',
    styleUrls: ['./salarystructuredetail.component.scss']
})
export class SalarystructuredetailComponent implements OnInit {

    public salaryStructureId: any;
    public salaryStructureDetail: any;
    public salaryCalculationtype: any;
    public benefit: any;
    public allowance: any;
    public payrollTypes: any;
    public groups: any;
    public salarystructures: any;

    constructor(public setupservice: SetupService,public activatedRoute: ActivatedRoute, public router: Router, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.payrollTypes = await this.payrollsetupservice.getPayrollTypes();

        this.groups = await this.setupservice.getAllGroups();

        this.salaryStructureDetail = await this.payrollsetupservice.getSalaryStructureDetails();

        this.salaryCalculationtype = await this.payrollsetupservice.getSalaryCalculationTypes();

        this.benefit = await this.payrollsetupservice.getBenefits();

        this.payrollsetupservice.getAllowanceDeductions().subscribe(res => {
            this.allowance = res;
        });

        this.salarystructures = await this.payrollsetupservice.getSalaryStructures();
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addsalarystructure.bind(this)
                }
            });
    }


    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(-1);
    }

    public dataToUpdate: any = null;

    selectionChanged(e) {
        e.component.collapseAll(-0);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
        console.log(e);
    }


    addsalarystructure() {
        this.router.navigate(['/hrm/payroll/salarystructure']); 
    }


    getData(d) {
        this.salaryStructureId = d.key;
        this.router.navigate(['hrm/payroll/update-salarystrucrure/' + this.salaryStructureId]);
    }
}