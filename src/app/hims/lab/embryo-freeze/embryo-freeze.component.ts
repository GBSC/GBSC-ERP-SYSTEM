import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { EmbryologyService } from '../../../../app/core/Services/HIMS/Lab/embryology.service';
import { TvopuService } from '../../../../app/core/Services/HIMS/Lab/tvopu.service';
import { ThawAssessmentService } from '../../../../app/core/Services/HIMS/Lab/thawassessment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-embryo-freeze',
    templateUrl: './embryo-freeze.component.html',
    styleUrls: ['./embryo-freeze.component.scss']
})
export class EmbryoFreezeComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    private patient: any;
    private spouse: any;
    private patients: any;
    private consultants: any;
    private id: number;
    private clinicalRecord: any;
    private thawAssessment: any;
    private embryoFreezeDetails: any;
    private tvopu: any;
    private freeFreezeOptions: any;
    private topBottomOptions: any;
    private thawAssessmentForm: FormGroup;

    constructor(
        private formBuild: FormBuilder,
        private consultantService: ConsultantService,
        private patientService: PatientService,
        private route: ActivatedRoute,
        private tvopuService: TvopuService,
        private embryologyService: EmbryologyService,
        private thawAssessmentService: ThawAssessmentService,
        private toastr: ToastrService,
        private clinicalrecordservice: PatientclinicalrecordService) {

        this.thawAssessmentForm = this.formBuild.group({
            "CreateDate": ['']
        });

        this.freeFreezeOptions = [{ name: "Vitrification" }, { name: "Slow Freeze" }, { name: "Default" }];

        this.topBottomOptions = [{ name: "Top" }, { name: "Bottom" }, { name: "None" }];

    }

    ngOnInit() {

        this.embryoFreezeDetails = [];

        this.route.params.subscribe((params) => {

            this.id = +params['id'];

            this.thawAssessmentService.getThawAssessmentByClinicalRecordId(this.id).subscribe(cresp => {

                this.thawAssessment = cresp;

                this.patchValues(this.thawAssessment);

                if (this.thawAssessment) {
                    this.embryoFreezeDetails = [];
                    this.embryoFreezeDetails = this.thawAssessment.embryoFreezeUnthaweds;
                }

            });

            this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

                this.clinicalRecord = resp;

                this.tvopuService.getTvopuByClinicalRecordId(this.id).subscribe(tvop => {

                    this.tvopu = tvop;

                    if (this.tvopu) {

                        console.log(this.embryoFreezeDetails.length);

                        if (!(this.embryoFreezeDetails.length > 0)) {

                            this.embryologyService.getPatientEmbryologyDetailsByTvopuId(this.tvopu.tvopuId).subscribe(det => {

                                for (let embryo of det) {

                                    if (!(this.embryoFreezeDetails.length > 0)) {

                                        this.embryoFreezeDetails.push({ embryoNumber: embryo.eggNumber });

                                    }
                                }

                            });
                        }
                    }
                });



            })




            this.patientcb.onValueChanged.subscribe(res => {
                this.populatePatientDate(res.component.option("value"))

            });

            this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

            this.patientService.getPatientObservable().subscribe(patients => this.patients = patients);


        });
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    displayToast(message) {

        this.toastr.success(message);
    }


    submitForm(value) {

        if (this.tvopu)
            value.tvopuId = this.tvopu.tvopuId;
        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.embryoFreezeUnthaweds = this.embryoFreezeDetails;


        this.thawAssessmentService.addThawAssessment(value).subscribe(resp => this.displayToast("Embryo Freeze Saved"));

    }

    updateForm(value) {
        if (this.tvopu)
            value.tvopuId = this.tvopu.tvopuId;
        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.embryoFreezeUnthaweds = this.embryoFreezeDetails;
        value.thawAssessmentId = this.thawAssessment.thawAssessmentId;

        this.thawAssessmentService.updateThawAssessment(value).subscribe(resp => this.displayToast("Embryo Freeze Updated"));
    }

    patchValues(thawAssessment) {
        this.thawAssessmentForm.patchValue({
            "CreateDate": thawAssessment.createDate
        });
    }


}
