import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { PatientService } from '../../../../app/core';

@Component({
    selector: 'app-clinicalrecords',
    templateUrl: './clinicalrecords.component.html',
    styleUrls: ['./clinicalrecords.component.scss']
})
export class ClinicalrecordsComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    private patient: any;
    private spouse: any;
    private patients: any;

    private clinicalRecords: any;

    constructor(private clinicalRecordService: PatientclinicalrecordService,
        private patientService: PatientService) {

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

            this.clinicalRecordService.getClinicalRecordsByPatientId(this.patient.patientId).subscribe(resp => {
                console.log(resp)
                this.clinicalRecords = resp;
            });

        });
    }

}
