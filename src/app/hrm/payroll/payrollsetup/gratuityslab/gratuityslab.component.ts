import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, PayrollService } from '../../../../core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GratuitySlabGratuity } from '../../../../core/Models/HRM/gratuitySlabGratuity';
import { GratuitySlab } from '../../../../core/Models/HRM/gratuitySlab';

@Component({
    selector: 'app-gratuityslab',
    templateUrl: './gratuityslab.component.html',
    styleUrls: ['./gratuityslab.component.css']
})
export class GratuityslabComponent implements OnInit {
    public gratuitySlab: any;
    public UpdatinggratuitySlab: any;
    public gratuitySlabForm;
    private gratuitySlabGratuityDetail: GratuitySlabGratuity[];

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


        await this.payrollsetupservice.getgratuityslabs();
        this.gratuitySlab = this.payrollsetupservice.gratuityslab;

        await this.payrollservice.getgratuities();
    }


    // async addGratuitySlabGratuity(value) {
    //   let data = value.data; 
    //     this.gratuitySlabGratuityDetail.push(data); 
    //     console.log(this.gratuitySlabGratuityDetail); 
    //   }

    //   async submitForm(value)
    //   {
    //     console.log(value);
    //     let gratuityslab = new GratuitySlab();
    //     gratuityslab = {...gratuityslab, ...value}; 
    //     gratuityslab.gratuitySlabGratuities = this.gratuitySlabGratuityDetail;

    //   }

    async addGratuityslab(value) {
        let x = await this.payrollsetupservice.addgratuityslab(value.data);
        console.log(x);
    }

    async updatingGratuitySlab(value) {
        this.UpdatinggratuitySlab = { ...value.oldData, ...value.newData };
    }

    async updateGratuitySlab() {
        await this.payrollsetupservice.updategratuityslab(this.UpdatinggratuitySlab);
    }

    async deleteGratuitySlab(value) {
        await this.payrollsetupservice.Deletegratuityslab(value.key);
    }

}