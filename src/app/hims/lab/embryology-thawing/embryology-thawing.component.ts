import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { ThawAssessmentService } from '../../../../app/core/Services/HIMS/Lab/thawassessment.service';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { PatientService } from '../../../../app/core';

@Component({
    selector: 'app-embryology-thawing',
    templateUrl: './embryology-thawing.component.html',
    styleUrls: ['./embryology-thawing.component.scss']
})
export class EmbryologyThawingComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    private id: any;
    private clinicalRecord: any;
    private unthawedSamples: any;
    private thawedSamples: any;

    private patient: any;
    private spouse: any;
    private patients: any;

    private freeFreezeOptions: any;
    private topBottomOptions: any;

    private thawassessment: any;

    constructor(private route: ActivatedRoute,
        private patientService: PatientService,
        private clinicalRecordService: PatientclinicalrecordService,
        private thawassessmentService: ThawAssessmentService) {

        this.freeFreezeOptions = [{ name: "Vitrification" }, { name: "Slow Freeze" }, { name: "Default" }];

        this.topBottomOptions = [{ name: "Top" }, { name: "Bottom" }, { name: "None" }];

    }

    ngOnInit() {

        this.unthawedSamples = [];
        this.thawedSamples = [];

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.clinicalRecordService.getPatientClinicalRecord(this.id).subscribe(resp => {

                this.clinicalRecord = resp;

                this.thawassessmentService.getThawAssessmentByClinicalRecordId(this.id).subscribe(thaw => {

                    this.unthawedSamples = thaw.embryoFreezeUnthaweds;
                    this.thawedSamples = thaw.embryoFreezeThaweds;
                    this.thawassessment = thaw;

                })
            })
        });

        this.patientService.getPatientObservable().subscribe(patients => this.patients = patients);

        this.patientcb.onValueChanged.subscribe(res => {

            console.log('valie changed')
            this.populatePatientDate(res.component.option("value"))

        });
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    updateThawAssessment() {
        if (!this.thawassessment)
            this.thawassessment.patientClinicalRecordId = this.id;

        this.thawassessment.embryoFreezeThaweds = this.thawedSamples;
        this.thawassessment.embryoFreezeUnthaweds = this.unthawedSamples;
        this.thawassessmentService.updateThawAssessment(this.thawassessment).subscribe(resp => {

            console.log(resp)
        })
    }

}
