import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';
import { FreezepreprationService } from '../../../../app/core/Services/HIMS/Lab/freezeprepration.service';
import { PatientService } from '../../../../app/core';

@Component({
    selector: 'app-freeze-prep-records',
    templateUrl: './freeze-prep-records.component.html',
    styleUrls: ['./freeze-prep-records.component.scss']
})
export class FreezePrepRecordsComponent implements OnInit {

    public patients: any;
    public spouse: any;
    public patient: any;
    public tests: any;
    public id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(public freezePrepService: FreezepreprationService,
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

            this.freezePrepService
                .getAllFreezePreprationsByPatientId(this.patient.patientId).subscribe(resp => {
                    this.tests = resp;
                });

        });
    }

}
