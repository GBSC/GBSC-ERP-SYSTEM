import { Component, OnInit } from '@angular/core';
import { BioChemistryService } from '../../../../core';
import { BioChemistryTest } from '../../../../core/Models/HIMS/biochemistrytest';
import { ScriptLoaderService } from '../../../../../../src/app/_services/script-loader.service';

@Component({
    selector: 'app-biochemistrytest',
    templateUrl: './biochemistrytest.component.html',
    styleUrls: ['./biochemistrytest.component.scss']
})
export class BiochemistrytestComponent implements OnInit {

    private tests: BioChemistryTest;

    constructor(private bioChemistryServie: BioChemistryService, private _script: ScriptLoaderService) {

    }

    ngOnInit() {

        this.bioChemistryServie.getTests().subscribe(tests => this.tests = tests);

    }
    
    ngAfterViewInit() {
        this._script.loadScripts('app-validation-form-widgets',
            ['assets/demo/default/custom/components/forms/validation/form-widgets.js']);

    }

    addNewTest(test) {

        this.bioChemistryServie.addTest(test.data).subscribe(resp=>console.log(resp));

    }

    UpdateTest(test)
    {
        let biotest = test.data;
        biotest.bioChemistryTestId = test.key;
        this.bioChemistryServie.updateTest(biotest).subscribe(resp=>console.log(resp));

    }



    onEditorPreparing(e) {

        if (e.parentType == "filterRow" && e.dataField == "referenceRange")
            e.cancel = true;

        if (e.dataField === "referenceRange") {
            e.editorName = "dxTextArea";
            e.editorOptions.height = 200;
            e.editorOptions.width = 500;
        }

    }

}
