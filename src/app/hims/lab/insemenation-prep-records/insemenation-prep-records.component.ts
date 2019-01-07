import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { InseminationprepService, PatientService } from '../../../../app/core';

@Component({
    selector: 'app-insemenation-prep-records',
    templateUrl: './insemenation-prep-records.component.html',
    styleUrls: ['./insemenation-prep-records.component.scss']
})
export class InsemenationPrepRecordsComponent implements OnInit {

<<<<<<< HEAD
    private patients: any;
    private spouse: any;
    private patient: any;
    private tests: any;
    private id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(private insemenationPrepService: InseminationprepService,
        private patientService: PatientService) {
=======
    public patients: any;
    public spouse: any;
    public patient: any;
    public tests: any;
    public id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(public insemenationPrepService: InseminationprepService,
        public patientService: PatientService) {
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d

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

            this.insemenationPrepService
                .getInseminationPrepsByPatientId(this.patient.patientId).subscribe(resp => {
                    this.tests = resp;
                });

        });
    }


}
