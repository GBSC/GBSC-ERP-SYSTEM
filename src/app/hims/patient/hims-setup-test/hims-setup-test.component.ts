import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';

@Component({
    selector: 'app-hims-setup-test',
    templateUrl: './hims-setup-test.component.html',
    styleUrls: ['./hims-setup-test.component.css']
})
export class HimsSetupTestComponent implements OnInit {

    public test: any;
    public patient: any;

    constructor(private PatientServiceobj: PatientService) {

    }

    async ngOnInit() {
        await this.PatientServiceobj.getTests();
        this.test = this.PatientServiceobj.testing;
        console.log(this.test);

        await this.PatientServiceobj.getPatient();
        this.patient = this.PatientServiceobj.patients;
        console.log(this.patient);

    }

    async addtest(value) {
        let x = await this.PatientServiceobj.addTest(value.key);
        console.log(x);
    }

    async updateTest(value) {
        let x = await this.PatientServiceobj.updateTest(value.key);
        console.log(x);
    }

    async deleteTest(value) {
        let x = await this.PatientServiceobj.deleteTest(value.key.testId);
        console.log(x);

    }

}
