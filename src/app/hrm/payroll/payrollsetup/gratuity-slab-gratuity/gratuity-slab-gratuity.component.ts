import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-gratuity-slab-gratuity',
    templateUrl: './gratuity-slab-gratuity.component.html',
    styleUrls: ['./gratuity-slab-gratuity.component.scss']
})
export class GratuitySlabGratuityComponent implements OnInit {

<<<<<<< HEAD
    public gratuitySlabGratuity: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getgratuityslabGratuities();
        this.gratuitySlabGratuity = this.payrollsetupservice.gratuityslabGratuity;

        await this.payrollsetupservice.getgratuityslabs();
        let gratuitySlab = this.payrollsetupservice.gratuityslab;

        // await this.payrollsetupservice.getgratuities();
        // let Gratuity = this.payrollsetupservice.gratuity;
    }

    async addGratuitySlabGratuity(value) {
        await this.payrollsetupservice.addgratuityslabGratuity(value.data);
    }

    async updateGratuitySlabGratuity(value) {
        console.log(value);
        await this.payrollsetupservice.updategratuityslabGratuity(value);
    }

    async deleteGratuitySlabGratuity(value) {
        await this.payrollsetupservice.DeletegratuityslabGratuity(value.key);
=======
    public gratuitySlab: any;
    public gratuitySlabGratuity: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        this.gratuitySlabGratuity = await this.payrollsetupservice.getGratuitySlabGratuities();

        this.gratuitySlab = await this.payrollsetupservice.getGratuitySlabs();
    }

    async addGratuitySlabGratuity(value) {
        await this.payrollsetupservice.addGratuitySlabGratuity(value.data);
    }

    async updateGratuitySlabGratuity(value) {
        await this.payrollsetupservice.updateGratuitySlabGratuity(value);
    }

    async deleteGratuitySlabGratuity(value) {
        await this.payrollsetupservice.deleteGratuitySlabGratuity(value.key);
>>>>>>> master
    }

}