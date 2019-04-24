import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-taxrelief',
    templateUrl: './taxrelief.component.html',
    styleUrls: ['./taxrelief.component.scss']
})
export class TaxreliefComponent implements OnInit {

    public taxRelief: any;
    public incometaxRule: any;
    public updatingtaxRelief: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.payrollsetupservice.getTaxReliefs().subscribe(res => {
            this.taxRelief = res
        });

        this.incometaxRule = await this.payrollsetupservice.getIncomeTaxRules();
    }

    addTaxRelief(value) {
        this.payrollsetupservice.addTaxRelief(value.data).subscribe(r => {
            this.payrollsetupservice.getTaxReliefs().subscribe(tr => {
                this.taxRelief = tr
            });
        });
    }

    updatingTaxRelief(value) {
        this.updatingtaxRelief = { ...value.oldData, ...value.newData };
    }

    updateTaxRelief() {
        this.payrollsetupservice.updateTaxRelief(this.updatingtaxRelief).subscribe(rp => {
        console.log(rp);  });
    }

    async deleteTaxRelief(value) {
        await this.payrollsetupservice.deleteTaxRelief(value.key);
    }
}