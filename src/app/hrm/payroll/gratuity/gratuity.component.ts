import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { EmployeeService, PayrollService, PayrollSetupService } from '../../../core';
import { GratuitySlabGratuity } from '../../../core/Models/HRM/gratuitySlabGratuity';
import { GratuitySlab } from '../../../core/Models/HRM/gratuitySlab';

@Component({
    selector: 'app-gratuity',
    templateUrl: './gratuity.component.html',
    styleUrls: ['./gratuity.component.scss']
})
export class GratuityComponent implements OnInit {

    public gratuity: any;
    public employees: any;
    public gratuityTypes: any;
    public leavingReasons: any;
    public fundSetups: any;
    public gratuitySlabs: any;
    private updatingGratuity: any;
    private gratuityslab: GratuitySlabGratuity[];

    public GratuityForm: any;

    constructor(private fb: FormBuilder, public payrollservice: PayrollService,
        public Employeeservice: EmployeeService, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.gratuityslab = [];

        this.GratuityForm = this.fb.group({
            GratuityAmount: ['', Validators],
            TotalSalary: ['', Validators],
            From: ['', Validators],
            To: ['', Validators],
            GratuityTypeId: ['', Validators],
            LeavingReasonId: ['', Validators],
            UserId: ['', Validators],
            FundSetupId: ['', Validators]
        });


        this.gratuity = await this.payrollservice.getGratuities();

        this.leavingReasons = await this.payrollsetupservice.getLeavingReasons();

        this.gratuitySlabs = await this.payrollsetupservice.getGratuitySlabs();

        this.gratuityTypes = await this.payrollsetupservice.getGratuityTypes();

        this.fundSetups = await this.payrollsetupservice.getFundSetups();

        this.employees = await this.Employeeservice.GetAllEmployees();
    }

    async gratuitySlab(value) {
        let data = value.data;
        this.gratuityslab.push(data);
    }

    async addGratuity(value) {
        let pushslab = new GratuitySlab();
        pushslab = { ...pushslab, ...value };
        pushslab.gratuitySlabGratuities = this.gratuityslab;
        let x = await this.payrollservice.addGratuity(pushslab);
        this.GratuityForm.reset();

    }

    GratuityUpdating(value) {
        this.updatingGratuity = { ...value.oldData, ...value.newData };
    }
    async updateGratuity() {
        await this.payrollservice.updateGratuity(this.updatingGratuity);
    }

    async deleteGratuity(value) {
        await this.payrollservice.deleteGratuity(value.key);
    }
}