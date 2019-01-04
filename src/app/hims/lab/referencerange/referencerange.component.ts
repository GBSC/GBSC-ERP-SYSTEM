import { Component, OnInit } from '@angular/core';
import { BioChemistryService } from '../../../core';
import { referenceRange } from '../../../core/Models/HIMS/referenceRange';

@Component({
    selector: 'app-referencerange',
    templateUrl: './referencerange.component.html',
    styleUrls: ['./referencerange.component.scss']
})
export class ReferencerangeComponent implements OnInit {

    public refrang: any;

    constructor(public bioChemistryServie: BioChemistryService) {

    }

    async  ngOnInit() {
        await this.bioChemistryServie.getReferenceRanges();
        this.refrang = this.bioChemistryServie.referencerange;
        console.log(this.refrang);
    }

    async addReferenceRange(ref) {
        console.log(ref.data);
        console.log(ref.key);
        let x = await this.bioChemistryServie.addReferenceRange(ref.data);
        console.log(x);
    }

    async updateReferenceRange(value) {

        let refRange = new referenceRange();
        refRange.referenceRangeId = value.key;
        refRange = { ...refRange, ...value.data };
        await this.bioChemistryServie.updateReferenceRange(refRange);
    }


}
