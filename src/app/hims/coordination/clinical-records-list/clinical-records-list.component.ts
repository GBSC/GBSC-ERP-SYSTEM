import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { PatientService } from '../../../../app/core';

@Component({
    selector: 'app-clinical-records-list',
    templateUrl: './clinical-records-list.component.html',
    styleUrls: ['./clinical-records-list.component.scss']
})
export class ClinicalRecordsListComponent implements OnInit {

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
