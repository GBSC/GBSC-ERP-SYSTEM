import { Component, OnInit } from '@angular/core';
import { TestType } from '../../../core/Models/HIMS/TestType';
import { PatientService } from '../../../core';

@Component({
    selector: 'app-test-type',
    templateUrl: './test-type.component.html',
    styleUrls: ['./test-type.component.scss']
})
export class TestTypeComponent implements OnInit {

    public TestTypes: TestType[] = [];
    public UpdatedModel: TestType;

    constructor(public PatientService: PatientService) {

    }

    ngOnInit() {
        this.PatientService.getTestTypes().subscribe((res: TestType[]) => {
            this.TestTypes = res;
        });
    }

    AddTestType(value) {
        // console.log(value);
        this.PatientService.addTestType(value.data).subscribe((res: any) => {
            this.PatientService.getTestTypes().subscribe((res: TestType[]) => {
                this.TestTypes = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateTestType() {
        // console.log(this.UpdatedModel);
        this.PatientService.updateTestType(this.UpdatedModel).subscribe(res => {
            // console.log(res);
        });
    }

    DeleteTestType(value) {
        // console.log(value);
        this.PatientService.deleteTestType(value.data.testTypeId).subscribe(res => {
            // console.log(res);
        });
    }

}
