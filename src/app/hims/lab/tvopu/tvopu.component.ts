import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { MedicineService } from '../../../../app/core/Services/HIMS/medicine.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { TvopuService } from '../../../../app/core/Services/HIMS/Lab/tvopu.service';
import { EmbryologistService } from '../../../../app/core/Services/HIMS/Lab/embryologist.service';

@Component({
  selector: 'app-tvopu',
  templateUrl: './tvopu.component.html',
  styleUrls: ['./tvopu.component.scss']
})
export class TvopuComponent implements OnInit {

  @ViewChild("patientcb") patientcb: DxSelectBoxComponent

  private patient: any;
  private spouse: any;
  private patients: any;
  private consultants: any;
  private treatments: any;
  private embryologists: any;
  private id: number;
  private clinicalRecord: any;
  private tvopu: any;

  private tvopuform: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private consultantService: ConsultantService,
    private patientService: PatientService,
    private treatmentService: TreatmentService,
    private tvopuService: TvopuService,
    private embryologyService: EmbryologistService,
    public router: Router,
    private route: ActivatedRoute,
    private clinicalrecordservice: PatientclinicalrecordService) {

    this.tvopuform = this.formBuilder.group({
      'TimeStart': ['', Validators.required],
      'TimeFinish': [''],
      'ActiveInactive': [''],
      'Remarks': [''],
      'PickupCount': [''],
      'TotalPickupCount': [''],
      'PickupDate': [''],
      'FollicileAspiratedLeft': [''],
      'FollicileAspiratedRight': [''],
      'OociteCollectedLeft': [''],
      'OociteCollectedRight': [''],
      'EmbryologistId': [''],
      'PatientClinicalRecordId': ['']
    })

    this.tvopuform.disable();

  }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

        this.tvopuform.enable();

        this.clinicalRecord = resp;

        this.tvopuService
        .getTvopuByClinicalRecordId(this.clinicalRecord.patientClinicalRecordId).subscribe(resp=>this.tvopu = resp);

      })

    })

    this.patientcb.onValueChanged.subscribe(res => {
      this.populatePatientDate(res.component.option("value"))
      this.tvopuform.enable();

    });


    this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

    this.patientService.getPatientObservable().subscribe(patients => this.patients = patients);

    this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);

    this.embryologyService.getEmbryologists().subscribe(resp => this.embryologists = resp);

  }

  populatePatientDate(patientId) {
    this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
      this.patient = patient;
      this.spouse = patient.partner;
    });
  }
  

  submitForm(value) {
    value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
    this.tvopuService.addTvopu(value).subscribe(resp=>console.log(resp));
  }

}
