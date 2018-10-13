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

<<<<<<< HEAD
    public Gratuity: any;
=======
    public gratuity: any;
    public employees: any;
    public gratuityTypes: any;
    public leavingReasons: any;
    public fundSetups: any;
    public gratuitySlabs: any;
>>>>>>> master
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


<<<<<<< HEAD
        await this.payrollservice.getgratuities();
        this.Gratuity = this.payrollservice.getGratuity;

        await this.payrollsetupservice.getleavingreasons();
        let leavingReason = this.payrollsetupservice.leavingreason;

        await this.payrollsetupservice.getgratuityslabs();
        let gratuitySlaB = this.payrollsetupservice.gratuityslab;

        await this.payrollsetupservice.getgratuitytypes();
        let gratuityType = this.payrollsetupservice.gratuitytype;

        await this.payrollsetupservice.getfundsetups();
        let fundSetup = this.payrollsetupservice.fundsetup;

        await this.Employeeservice.GetAllEmployees();
        let user = this.Employeeservice.employeereg;
=======
        this.gratuity = await this.payrollservice.getGratuities();

        this.leavingReasons = await this.payrollsetupservice.getLeavingReasons();

        this.gratuitySlabs = await this.payrollsetupservice.getGratuitySlabs();

        this.gratuityTypes = await this.payrollsetupservice.getGratuityTypes();

        this.fundSetups = await this.payrollsetupservice.getFundSetups();

        this.employees = await this.Employeeservice.GetAllEmployees();
>>>>>>> master
    }

    async gratuitySlab(value) {
        let data = value.data;
        this.gratuityslab.push(data);
<<<<<<< HEAD
        console.log(this.gratuityslab);
    }

    async addGratuity(value) {
        console.log(value);
        let pushslab = new GratuitySlab();
        pushslab = { ...pushslab, ...value };
        console.log(this.gratuityslab);
        pushslab.gratuitySlabGratuities = this.gratuityslab;
        console.log(pushslab);
        let x = await this.payrollservice.addgratuity(pushslab);
        console.log(x);
=======
    }

    async addGratuity(value) {
        let pushslab = new GratuitySlab();
        pushslab = { ...pushslab, ...value };
        pushslab.gratuitySlabGratuities = this.gratuityslab;
        let x = await this.payrollservice.addGratuity(pushslab);
>>>>>>> master
        this.GratuityForm.reset();

    }

    GratuityUpdating(value) {
        this.updatingGratuity = { ...value.oldData, ...value.newData };
    }
    async updateGratuity() {
<<<<<<< HEAD
        await this.payrollservice.updategratuity(this.updatingGratuity);
    }

    async deleteGratuity(value) {
        await this.payrollservice.Deletegratuity(value.key);
=======
        await this.payrollservice.updateGratuity(this.updatingGratuity);
    }

    async deleteGratuity(value) {
        await this.payrollservice.deleteGratuity(value.key);
>>>>>>> master
    }
}