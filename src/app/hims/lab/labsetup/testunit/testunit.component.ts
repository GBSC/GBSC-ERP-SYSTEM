import { Component, OnInit } from '@angular/core';
import { BioChemistryService } from '../../../../core';
import { TestUnit } from '../../../../core/Models/HIMS/testunit';

@Component({
    selector: 'app-testunit',
    templateUrl: './testunit.component.html',
    styleUrls: ['./testunit.component.scss']
})
export class TestunitComponent implements OnInit {

    public units: TestUnit;

    constructor(public bioChemistryService: BioChemistryService) { }

    ngOnInit() {

        this.bioChemistryService.getUnits().subscribe(units => this.units = units);

    }


    addNewTest(test) {

        this.bioChemistryService.addUnit(test.data);

    }

}
