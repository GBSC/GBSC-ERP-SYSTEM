import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { InsemenationService } from '../../../../app/core/Services/HIMS/Lab/insemenation.service';
import { ToastrService } from 'ngx-toastr';


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
        private toastr: ToastrService,
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

                this.setValues();

            })

        })

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))
            this.insemenationForm.enable();

        });


        this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientCb().subscribe(patients => this.patients = patients);

        this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);


    }

    setValues() {

        if (this.clinicalRecord != null) {
            this.insemenationService
                .getPatientInsemenationByClinicalRecordId(this.clinicalRecord.patientClinicalRecordId)
                .subscribe(resp => {
                    this.insemenation = resp;
                    this.patchForm(this.insemenation);
                    this.calculateOnLoad(this.insemenation);
                });
        }

    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }


    submitForm(value) {
        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.reportedMotileCount = 100 - this.reportedImmotile;
        this.insemenationService.addPatientInsemenation(value).subscribe(resp => {
            this.displayToast("Insemenation Saved");
            this.setValues();
        });
    }

    updateForm(value) {
        value.patientInsemenationId = this.insemenation.patientInsemenationId;
        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.reportedMotileCount = 100 - this.reportedImmotile;
        this.insemenationService.updatePatientInsemenation(value).subscribe(resp => this.displayToast("Insemenation Updated"));
    }

    patchForm(insemenation) {
        this.insemenationForm.patchValue({
            'CollectionDate': insemenation.collectionDate,
            'CollectionNumber': insemenation.collectionNumber,
            'ProcedureNumber': insemenation.procedureNumber,
            'ActiveInactive': insemenation.activeInactive,
            'Abstinence': insemenation.abstinence,
            'EjaculationTime': insemenation.ejaculationTime,
            'Location': insemenation.location,
            'AssayTime': insemenation.assayTime,
            'Volume': insemenation.volume,
            'Consistency': insemenation.consistency,
            'Appearance': insemenation.appearance,
            'Ph': insemenation.ph,
            'MotileCountRange': insemenation.motileCountRange,
            'MotileCount': insemenation.motileCount,
            'ImmotileCountRange': insemenation.immotileCountRange,
            'ImmotileCount': insemenation.immotileCount,
            'TotalCountRange': insemenation.totalCountRange,
            'TotalCount': insemenation.totalCount,
            'SpermProgressionRapidLinear': insemenation.spermProgressionRapidLinear,
            'SpermProgressionNonLinear': insemenation.spermProgressionNonLinear,
            'SpermProgressionNonProgressive': insemenation.spermProgressionNonProgressive,
            'Immotile': insemenation.immotile,
            'TestPreprationMethod': insemenation.testPreprationMethod,
            'VolumeSemenUsed': insemenation.volumeSemenUsed,
            'TestPreprationTotalCountRange': insemenation.testPreprationTotalCountRange,
            'TestPreprationTotalCount': insemenation.testPreprationTotalCount,
            'TestPreprationMotileCountRange': insemenation.testPreprationMotileCountRange,
            'TestPreprationMotileCount': insemenation.testPreprationMotileCount,
            'TestPreprationRapidLinearProgression': insemenation.testPreprationRapidLinearProgression,
            'TestPreprationRapidNonLinearProgression': insemenation.testPreprationRapidNonLinearProgression,
            'TimeCompleted': insemenation.timeCompleted,
            'FinalVolume': insemenation.finalVolume,
            'NormalForms': insemenation.normalForms,
            'HeadAbnormalities': insemenation.headAbnormalities,
            'MidpieceAbnormalities': insemenation.midpieceAbnormalities,
            'TailAbnormalities': insemenation.tailAbnormalities,
            'OtherCells': insemenation.otherCells,
            'Comments': insemenation.comments,
        })
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

    displayToast(message) {

        this.toastr.success(message);

    }

    calculateOnLoad(insemenation) {
        this.motileCount = insemenation.motileCount;
        this.immotileCount = insemenation.immotileCount;
        this.totalCount = insemenation.totalCount;
    }

}
