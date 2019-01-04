import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-gratuitytype',
    templateUrl: './gratuitytype.component.html',
    styleUrls: ['./gratuitytype.component.scss']
})
export class GratuitytypeComponent implements OnInit {

    public gratuityType: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.gratuityType = await this.payrollsetupservice.getGratuityTypes();
    }

    async addGratuityType(value) {
        await this.payrollsetupservice.addGratuityType(value.data);
        this.gratuityType = await this.payrollsetupservice.getGratuityTypes();
    }

    async updateGratuityType(value) {
        await this.payrollsetupservice.updateGratuityType(value);
    }

    async deleteGratuityType(value) {
        await this.payrollsetupservice.deleteGratuityType(value.key);
    }

}