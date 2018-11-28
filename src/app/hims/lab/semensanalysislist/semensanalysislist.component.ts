import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { SemenanalysisService } from '../../../../app/core/Services/HIMS/Lab/semenanalysis.service';
import { PatientService } from '../../../../app/core';

@Component({
    selector: 'app-semensanalysislist',
    templateUrl: './semensanalysislist.component.html',
    styleUrls: ['./semensanalysislist.component.scss']
})
export class SemensanalysislistComponent implements OnInit {
    private patients: any;
    private spouse: any;
    private patient: any;
    private tests: any;
    private id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(private semenAnalysisService: SemenanalysisService,
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

            this.semenAnalysisService
                .getAllSemenAnalysisByPatientId(this.patient.patientId).subscribe(resp => {
                    this.tests = resp;
                });

        });
    }

}
