import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-gratuity-slab-gratuity',
    templateUrl: './gratuity-slab-gratuity.component.html',
    styleUrls: ['./gratuity-slab-gratuity.component.scss']
})
export class GratuitySlabGratuityComponent implements OnInit {

    public gratuitySlab: any;
    public gratuitySlabGratuity: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        this.gratuitySlabGratuity = await this.payrollsetupservice.getGratuitySlabGratuities();

        this.gratuitySlab = await this.payrollsetupservice.getGratuitySlabs();
    }

    async addGratuitySlabGratuity(value) {
        await this.payrollsetupservice.addGratuitySlabGratuity(value.data);
        this.gratuitySlabGratuity = await this.payrollsetupservice.getGratuitySlabGratuities();
    }

    async updateGratuitySlabGratuity(value) {
        await this.payrollsetupservice.updateGratuitySlabGratuity(value);
    }

    async deleteGratuitySlabGratuity(value) {
        await this.payrollsetupservice.deleteGratuitySlabGratuity(value.key);
    }

}