import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { ThawAssessmentService } from '../../../../app/core/Services/HIMS/Lab/thawassessment.service';
import { PatientService } from '../../../../app/core';

@Component({
    selector: 'app-embryology-thawing-records',
    templateUrl: './embryology-thawing-records.component.html',
    styleUrls: ['./embryology-thawing-records.component.scss']
})
export class EmbryologyThawingRecordsComponent implements OnInit {

<<<<<<< HEAD
    private patients: any;
    private spouse: any;
    private patient: any;
    private tests: any;
    private id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(private thawAssessmentService: ThawAssessmentService,
        private patientService: PatientService) {
=======
    public patients: any;
    public spouse: any;
    public patient: any;
    public tests: any;
    public id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(public thawAssessmentService: ThawAssessmentService,
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

            this.thawAssessmentService
                .getThawAssessmentsByPatientId(this.patient.patientId).subscribe(resp => {
                    this.tests = resp;
                });

        });
    }

}
