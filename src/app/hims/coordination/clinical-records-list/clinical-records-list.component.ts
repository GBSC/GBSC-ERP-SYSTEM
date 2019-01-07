import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { PatientService } from '../../../../app/core';

@Component({
    selector: 'app-clinical-records-list',
    templateUrl: './clinical-records-list.component.html',
    styleUrls: ['./clinical-records-list.component.scss']
})
export class ClinicalRecordsListComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

<<<<<<< HEAD
    private patient: any;
    private spouse: any;
    private patients: any;

    private clinicalRecords: any;

    constructor(private clinicalRecordService: PatientclinicalrecordService,
        private patientService: PatientService) {
=======
    public patient: any;
    public spouse: any;
    public patients: any;

    public clinicalRecords: any;

    constructor(public clinicalRecordService: PatientclinicalrecordService,
        public patientService: PatientService) {
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d

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
