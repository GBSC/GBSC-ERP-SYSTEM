import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, PayrollService } from '../../../../core';
import { FormBuilder, Validators } from '@angular/forms';
import { GratuitySlabGratuity } from '../../../../core/Models/HRM/gratuitySlabGratuity';

@Component({
    selector: 'app-gratuityslab',
    templateUrl: './gratuityslab.component.html',
    styleUrls: ['./gratuityslab.component.css']
})
export class GratuityslabComponent implements OnInit {
    public gratuitySlab: any;
    public gratuities: any;
    public UpdatinggratuitySlab: any;
    public gratuitySlabForm: any;
    public gratuitySlabGratuityDetail: GratuitySlabGratuity[];

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService,
        public payrollservice: PayrollService) { }

    async ngOnInit() {

        this.gratuitySlabGratuityDetail = [];

        this.gratuitySlabForm = this.fb.group({
            Title: ['', Validators.required],
            MultiplicationFactor: ['', Validators.required],
            EmploymentDaysFrom: ['', Validators.required],
            EmploymentDaysTill: ['', Validators.required]
        });

        this.gratuitySlab = await this.payrollsetupservice.getGratuitySlabs();

        this.gratuities = await this.payrollservice.getGratuities();
    }


    async addGratuityslab(value) {
        await this.payrollsetupservice.addGratuitySlab(value.data);
        this.gratuitySlab = await this.payrollsetupservice.getGratuitySlabs();
    }

    async updatingGratuitySlab(value) {
        this.UpdatinggratuitySlab = { ...value.oldData, ...value.newData };
    }

    async updateGratuitySlab() {
        await this.payrollsetupservice.updateGratuitySlab(this.UpdatinggratuitySlab);
    }

    async deleteGratuitySlab(value) {
        await this.payrollsetupservice.deleteGratuitySlab(value.key);
    }

}