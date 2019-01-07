import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { PatientService } from '../../../../app/core';
import { BiopsyService } from '../../../../app/core/Services/HIMS/Lab/biopsy.service';

@Component({
    selector: 'app-biopsy-records',
    templateUrl: './biopsy-records.component.html',
    styleUrls: ['./biopsy-records.component.scss']
})
export class BiopsyRecordsComponent implements OnInit {

    public patients: any;
    public spouse: any;
    public patient: any;
    public tests: any;
    public id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(public biopsyService: BiopsyService,
        public patientService: PatientService) {

        this.tests = [];
    }

    ngOnInit() {

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))

        });

        this.patientService.getPatientCb().subscribe(patients => this.patients = patients);

    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;

            this.biopsyService
                .getPatientBiopsiesbyPatientId(this.patient.patientId).subscribe(resp => {
                    console.log(resp)
                    this.tests = resp;
                });

        });
    }
}
