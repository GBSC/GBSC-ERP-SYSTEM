import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { InsemenationService } from '../../../../app/core/Services/HIMS/Lab/insemenation.service';


@Component({
  selector: 'app-insemenation',
  templateUrl: './insemenation.component.html',
  styleUrls: ['./insemenation.component.scss']
})
export class InsemenationComponent implements OnInit {

  @ViewChild("patientcb") patientcb: DxSelectBoxComponent

  private patient: any;
  private spouse: any;
  private patients: any;
  private consultants: any;
  private treatments: any;
  private id: number;
  private clinicalRecord: any;
  private insemenation: any;

  private motileCount: number;
  private immotileCount: number;
  private totalCount: number;
  private linear: number;
  private nonLinear: number;
  private nonProgresive: number;
  private immotile: number;
  private reportedLiner: number;
  private reportedNonLinear: number;
  private reportedNonProgressive: number;
  private reportedImmotile: number;
  private totalProgression: number;
  private totalReportedProgression: number;


  private insemenationForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private consultantService: ConsultantService,
    private patientService: PatientService,
    private treatmentService: TreatmentService,
    private insemenationService: InsemenationService,
    public router: Router,
    private route: ActivatedRoute,
    private clinicalrecordservice: PatientclinicalrecordService) {

    this.insemenationForm = this.formBuilder.group({
      'CollectionDate': [''],
      'CollectionNumber': [''],
      'ProcedureNumber': [''],
      'ActiveInactive': [''],
      'Abstinence': [''],
      'EjaculationTime': [''],
      'Location': [''],
      'AssayTime': [''],
      'Volume': [''],
      'Consistency': [''],
      'Appearance': [''],
      'Ph': [''],
      'MotileCountRange': [''],
      'MotileCount': [''],
      'ImmotileCountRange': [''],
      'ImmotileCount': [''],
      'TotalCountRange': [''],
      'TotalCount': [''],
      'SpermProgressionRapidLinear': [''],
      'SpermProgressionNonLinear': [''],
      'SpermProgressionNonProgressive': [''],
      'Immotile': [''],
      'TestPreprationMethod': [''],
      'VolumeSemenUsed': [''],
      'TestPreprationTotalCountRange': [''],
      'TestPreprationTotalCount': [''],
      'TestPreprationMotileCountRange': [''],
      'TestPreprationMotileCount': [''],
      'TestPreprationRapidLinearProgression': [''],
      'TestPreprationRapidNonLinearProgression': [''],
      'TimeCompleted': [''],
      'FinalVolume': [''],
      'NormalForms': [''],
      'HeadAbnormalities': [''],
      'MidpieceAbnormalities': [''],
      'TailAbnormalities': [''],
      'OtherCells': [''],
      'Comments': ['']
    })

    this.insemenationForm.disable();

  }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

        this.insemenationForm.enable();

        this.clinicalRecord = resp;

        if (this.clinicalRecord != null) {
          this.insemenationService
            .getPatientInsemenationByClinicalRecordId(this.clinicalRecord.patientClinicalRecordId)
            .subscribe(resp => this.insemenation = resp);
        }


      })

    })

    this.patientcb.onValueChanged.subscribe(res => {
      this.populatePatientDate(res.component.option("value"))
      this.insemenationForm.enable();

    });


    this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

    this.patientService.getPatientObservable().subscribe(patients => this.patients = patients);

    this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);


  }

  populatePatientDate(patientId) {
    this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
      this.patient = patient;
      this.spouse = patient.partner;
    });
  }


  submitForm(value) {
    value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
    this.insemenationService.addPatientInsemenation(value).subscribe(resp => console.log(resp));
  }

  calculateReportedLinear(value) {
    this.reportedLiner = Math.round((this.motileCount / this.totalCount) * value);
    this.linear = value;
  }

  calculateReportedNonLinear(value) {
    this.reportedNonLinear = Math.round((this.motileCount / this.totalCount) * value);
    this.nonLinear = value;
  }

  calculateReportedNonProgressive(value) {
    this.reportedNonProgressive = Math.round((this.motileCount / this.totalCount) * value);
    this.nonProgresive = value;
  }

  calculateReportedImmotile(value) {
    this.reportedImmotile = Math.round((this.immotileCount / this.totalCount) * 100);
    this.immotile = value;

    this.progression();

    this.reportedProgression();

  }

  progression() {
    this.totalProgression = this.linear + this.nonLinear + this.nonProgresive + this.immotile;
  }

  reportedProgression() {
    this.totalReportedProgression = (Math.round(this.reportedImmotile + this.reportedNonProgressive + this.reportedNonLinear + this.reportedLiner));
  }

}
