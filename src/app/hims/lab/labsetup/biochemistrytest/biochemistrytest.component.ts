import { Component, OnInit } from '@angular/core';
import { BioChemistryService } from '../../../../core';
import { BioChemistryTest } from '../../../../core/Models/HIMS/biochemistrytest';
import { ScriptLoaderService } from '../../../../../../src/app/_services/script-loader.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-biochemistrytest',
    templateUrl: './biochemistrytest.component.html',
    styleUrls: ['./biochemistrytest.component.scss']
})
export class BiochemistrytestComponent implements OnInit {

    public Editor = ClassicEditor;

    public tests: BioChemistryTest[];
    public bioChemistryTestId: number;
    public TestName: string;
    public TestDescription: string;
    public ReferenceRange: string = "";
    public formVisible: boolean = false;

    constructor(public bioChemistryServie: BioChemistryService, public _script: ScriptLoaderService) {

    }

    ngOnInit() {

        this.bioChemistryServie.getTests().subscribe(tests => this.tests = tests);

    }

    edit(value) {

        this.formVisible = true;
        this.bioChemistryTestId = value;
        var test = this.tests.find(t => t.bioChemistryTestId == value);
        this.ReferenceRange = test.referenceRange;
        this.TestName = test.name;
        this.TestDescription = test.description;

    }

    onSubmit() {

        if (this.TestName || this.ReferenceRange || this.TestDescription) {
            let editValue: BioChemistryTest = { bioChemistryTestId: this.bioChemistryTestId, name: this.TestName, description: this.TestDescription, referenceRange: this.ReferenceRange };

            if (this.bioChemistryTestId) {
                let oldValue = this.tests.find(obj => obj.bioChemistryTestId == this.bioChemistryTestId);

                let index = this.tests.indexOf(oldValue, 0);
                if (index > -1) {
                    this.tests.splice(index, 1);
                }

                this.tests.splice(index, 0, editValue);

                this.bioChemistryServie.updateTest(editValue).subscribe(resp => console.log(resp));
            }
            else {
                this.tests.splice(0, 0, editValue);
                this.bioChemistryServie.addTest(editValue).subscribe(resp => console.log(resp));
            }
        }

        this.formVisible = false;

    }

    onCancel() {
        this.formVisible = false;
    }


}
