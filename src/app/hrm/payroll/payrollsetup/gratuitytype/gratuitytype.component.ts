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
        await this.payrollsetupservice.getgratuitytypes();
        this.gratuityType = this.payrollsetupservice.gratuitytype;
    }

    async addGratuityType(value) {
        await this.payrollsetupservice.addgratuitytype(value.data);
    }

    async updateGratuityType(value) {
        console.log(value);
        await this.payrollsetupservice.updategratuitytype(value);
    }

    async deleteGratuityType(value) {
        await this.payrollsetupservice.Deletegratuitytype(value.key);
    }

}