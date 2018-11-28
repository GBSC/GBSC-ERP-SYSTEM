import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { Reference } from '../../../core/Models/HIMS/reference';


@Component({
    selector: 'app-patient-reference',
    templateUrl: './patient-reference.component.html',
    styleUrls: ['./patient-reference.component.scss']
})
export class PatientReferenceComponent implements OnInit {
    pattern: any = /^\d{4}-\d{7}$/i;
    public reference: any;

    constructor(private PatientServiceobj: PatientService) { }

    ngOnInit() {

        this.PatientServiceobj.getReference().subscribe((res: Reference) => {
            this.reference = res;
            // console.log(this.reference);
        });
        // 

    }

    async addreference(value) {
        console.log(value)
        await this.PatientServiceobj.addReferenceAsync(value.key);
        // this.PatientServiceobj.addReference(value.key).subscribe(res => {
        //   console.log(res);
        // });
        this.PatientServiceobj.getReference().subscribe((res: Reference) => {
            this.reference = res;
            // console.log(this.reference);
        });

    }

    updatereference(value) {
        this.PatientServiceobj.updateReference(value.key).subscribe(res => {
            // console.log(res);
        });
    }

    deletereference(value) {
        this.PatientServiceobj.deleteReference(value.key.patientReferenceId).subscribe(res => {
            console.log(res);
        });
    }


}
