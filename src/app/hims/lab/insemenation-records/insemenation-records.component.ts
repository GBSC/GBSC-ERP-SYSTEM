import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';
import { PatientService } from '../../../../app/core';
import { InsemenationService } from '../../../../app/core/Services/HIMS/Lab/insemenation.service';

@Component({
    selector: 'app-insemenation-records',
    templateUrl: './insemenation-records.component.html',
    styleUrls: ['./insemenation-records.component.scss']
})
export class InsemenationRecordsComponent implements OnInit {

    public patients: any;
    public spouse: any;
    public patient: any;
    public tests: any;
    public id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(public insemenationService: InsemenationService,
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

            this.insemenationService
                .getPatientInsemenationsPatientId(this.patient.patientId).subscribe(resp => {
                    console.log(resp)
                    this.tests = resp;
                });

        });
    }

}
