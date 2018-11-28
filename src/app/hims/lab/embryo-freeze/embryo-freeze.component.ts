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
    private thawAssessmentService: ThawAssessmentService,
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

      this.tvopuService.getTvopu(this.id).subscribe(resp => {

        this.tvopu = resp;

        if (this.tvopu != null) {
          this.clinicalrecordservice.getPatientClinicalRecord(this.tvopu.patientClinicalRecordId).subscribe(cresp => {

            this.clinicalRecord = cresp;

          });

          this.thawAssessmentService.getThawAssessmentByTvopuId(this.tvopu.tvopuId).subscribe(emb => {

            this.thawAssessment = emb;

            this.embryoFreezeDetails = this.thawAssessment.embryoFreezeUnthaweds;

          });
        }

      });

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


  submitForm(value) {

    value.tvopuId = this.tvopu.tvopuId;
    value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
    value.embryoFreezeUnthaweds = this.embryoFreezeDetails;


    this.thawAssessmentService.addThawAssessment(value).subscribe(resp => console.log(resp));

  }


}
