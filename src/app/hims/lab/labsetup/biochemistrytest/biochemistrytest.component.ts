import { Component, OnInit } from '@angular/core';
import { BioChemistryTest } from '../../../../models/biochemistrytest'
import { BioChemistryService } from '../../../../core';

@Component({
    selector: 'app-biochemistrytest',
    templateUrl: './biochemistrytest.component.html',
    styleUrls: ['./biochemistrytest.component.scss']
})
export class BiochemistrytestComponent implements OnInit {

    private tests: BioChemistryTest;

    constructor(private bioChemistryServie: BioChemistryService) {

    }

    ngOnInit() {

        this.bioChemistryServie.getTests().subscribe(tests => this.tests = tests);

    }

    addNewTest(test) {

        this.bioChemistryServie.addTest(test.data);

    }

}
