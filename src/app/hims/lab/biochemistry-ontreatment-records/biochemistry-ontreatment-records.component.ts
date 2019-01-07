import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { BioChemistryService, PatientService } from '../../../../app/core';
import { Spouse } from '../../../../app/core/Models/HIMS/spouse';

@Component({
    selector: 'app-biochemistry-ontreatment-records',
    templateUrl: './biochemistry-ontreatment-records.component.html',
    styleUrls: ['./biochemistry-ontreatment-records.component.scss']
})
export class BiochemistryOntreatmentRecordsComponent implements OnInit {

    private patients: any;
    private spouse: Spouse;
    private patient: any;
    private tests: any;
    private id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(private biochemistryService: BioChemistryService,
        private patientService: PatientService) {

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

            this.biochemistryService
                .getPatientBioChemistryTestsByPatientId(this.patient.patientId).subscribe(resp => {
                    console.log(resp)
                    this.tests = resp;
                });

        });
    }

}
