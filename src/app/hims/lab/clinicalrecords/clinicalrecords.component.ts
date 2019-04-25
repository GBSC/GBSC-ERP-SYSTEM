import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';
import { PatientService } from '../../../../app/core';

@Component({
    selector: 'app-clinicalrecords',
    templateUrl: './clinicalrecords.component.html',
    styleUrls: ['./clinicalrecords.component.scss']
})
export class ClinicalrecordsComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    public patient: any;
    public spouse: any;
    public patients: any;

    public clinicalRecords: any;

    constructor(public clinicalRecordService: PatientclinicalrecordService,
        public patientService: PatientService) {

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
