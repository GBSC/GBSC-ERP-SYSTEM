import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-frequency',
    templateUrl: './frequency.component.html',
    styleUrls: ['./frequency.component.scss']
})
export class FrequencyComponent implements OnInit {

    public Frequency: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        this.Frequency = await this.payrollsetupservice.getFrequencies();
    }

    async addFrequency(value) {
        await this.payrollsetupservice.addFrequency(value.data);
    }

    async updateFrequency(value) {
        await this.payrollsetupservice.updateFrequency(value);
    }

    async deleteFrequency(value) {
        await this.payrollsetupservice.deleteFrequency(value.key);
    }

}