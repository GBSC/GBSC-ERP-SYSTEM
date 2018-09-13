import { Component, OnInit } from '@angular/core';
import { BioChemistryService } from '../../../lab/services/bio-chemistry.service'


@Component({
    selector: 'app-embryologycodes',
    templateUrl: './embryologycodes.component.html',
    styleUrls: ['./embryologycodes.component.scss']
})
export class EmbryologycodesComponent implements OnInit {

    public embryologycode: any;

    constructor(private BioChemistryServiceobj: BioChemistryService) { }

    async ngOnInit() {

        await this.BioChemistryServiceobj.getEmbryologyCodes();
        this.embryologycode = this.BioChemistryServiceobj.embryologycode;
    }

    async addEmbryologyCode(value) {
        let x = await this.BioChemistryServiceobj.addEmbryologyCode(value.key);
        console.log(x);
    }

    async updateEmbryologyCode(value) {
        let x = await this.BioChemistryServiceobj.updateEmbryologyCode(value.key);
        console.log(x);
    }

    async deleteEmbryologyCode(value) {
        let x = await this.BioChemistryServiceobj.deleteEmbryologyCode(value.key.embryologyCodeId);
        console.log(x);
    }

}
