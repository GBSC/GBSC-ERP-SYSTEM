import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { SemenanalysisService } from '../../../../app/core/Services/HIMS/Lab/semenanalysis.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-semenanalysis',
    templateUrl: './semenanalysis.component.html',
    styleUrls: ['./semenanalysis.component.scss']
})
export class SemenanalysisComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    public patient: any;
    public spouse: any;
    public patients: any;
    public consultants: any;
    public treatments: any;
    public id: number;
    public clinicalRecord: any;
    public semenAnalysis: any;

    public motileCount: number;
    public immotileCount: number;
    public totalCount: number;
    public linear: number;
    public nonLinear: number;
    public nonProgresive: number;
    public immotile: number;
    public reportedLiner: number;
    public reportedNonLinear: number;
    public reportedNonProgressive: number;
    public reportedImmotile: number;
    public totalProgression: number;
    public totalReportedProgression: number;


    public semenAnalysisForm: FormGroup;


    constructor(public formBuilder: FormBuilder,
        public consultantService: ConsultantService,
        public patientService: PatientService,
        public toastr: ToastrService,
        public semenAnalysisService: SemenanalysisService,
        public router: Router,
        public route: ActivatedRoute,
        public clinicalrecordservice: PatientclinicalrecordService) {

        this.semenAnalysisForm = this.formBuilder.group({
            'ConsultantId': [''],
            'PatientId': [''],
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


    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.setValues();

        })

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))

        });


        this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientCb().subscribe(patients => this.patients = patients);


    }

    setValues() {
        this.semenAnalysisService.getSemenAnalysis(this.id)
            .subscribe(resp => {
                this.calculateOnLoad(resp);
                this.semenAnalysis = resp;
                this.patchValues(this.semenAnalysis);
            });
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            if (this.patient != null) {
                this.spouse = patient.partner;
            }
        });
    }


    submitForm(value) {
        value.reportedMotileCount = 100 - this.reportedImmotile;
        this.semenAnalysisService.addSemenAnalysis(value).subscribe(resp => {
            console.log(resp);
            this.displayToast("Semen Analysis Saved");
            this.id = resp.semenAnalysisId;
            this.setValues()
        });
    }

    updateForm(value) {
        value.semenAnalysisId = this.id;
        value.reportedMotileCount = 100 - this.reportedImmotile;
        this.semenAnalysisService.updateSemenAnalysis(value).subscribe(resp => {
            this.displayToast("Semen Analysis Updated");
        });
    }

    displayToast(message) {

        this.toastr.success(message);

    }

    calculateReportedLinear(value) {
        if (!this.totalCount)
            this.totalCount = this.semenAnalysis.totalCount;
        this.reportedLiner = Math.round((this.motileCount / this.totalCount) * value);
        this.linear = value;
    }

    calculateReportedNonLinear(value) {
        if (!this.totalCount)
            this.totalCount = this.semenAnalysis.totalCount;
        this.reportedNonLinear = Math.round((this.motileCount / this.totalCount) * value);
        this.nonLinear = value;
    }

    calculateReportedNonProgressive(value) {
        if (!this.totalCount)
            this.totalCount = this.semenAnalysis.totalCount;
        this.reportedNonProgressive = Math.round((this.motileCount / this.totalCount) * value);
        this.nonProgresive = value;
    }

    calculateReportedImmotile(value) {
        if (!this.totalCount)
            this.totalCount = this.semenAnalysis.totalCount;
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

    calculateOnLoad(semenAnalysis) {
        this.motileCount = semenAnalysis.motileCount;
        this.immotileCount = semenAnalysis.immotileCountRange;
        this.totalCount = semenAnalysis.totalCount;
    }

    patchValues(semenAnalysis) {
        this.semenAnalysisForm.patchValue({
            'ConsultantId': semenAnalysis.consultantId,
            'PatientId': semenAnalysis.patientId,
            'CollectionDate': semenAnalysis.collectionDate,
            'CollectionNumber': semenAnalysis.collectionNumber,
            'ProcedureNumber': semenAnalysis.procedureNumber,
            'ActiveInactive': semenAnalysis.activeInactive,
            'Abstinence': semenAnalysis.abstinence,
            'EjaculationTime': semenAnalysis.ejaculationTime,
            'Location': semenAnalysis.location,
            'AssayTime': semenAnalysis.assayTime,
            'Volume': semenAnalysis.volume,
            'Consistency': semenAnalysis.consistency,
            'Appearance': semenAnalysis.appearance,
            'Ph': semenAnalysis.ph,
            'MotileCountRange': semenAnalysis.motileCountRange,
            'MotileCount': semenAnalysis.motileCount,
            'ImmotileCountRange': semenAnalysis.immotileCountRange,
            'ImmotileCount': semenAnalysis.immotileCount,
            'TotalCountRange': semenAnalysis.totalCountRange,
            'TotalCount': semenAnalysis.TotalCount,
            'SpermProgressionRapidLinear': semenAnalysis.spermProgressionRapidLinear,
            'SpermProgressionNonLinear': semenAnalysis.spermProgressionNonLinear,
            'SpermProgressionNonProgressive': semenAnalysis.spermProgressionNonProgressive,
            'Immotile': semenAnalysis.immotile,
            'TestPreprationMethod': semenAnalysis.testPreprationMethod,
            'VolumeSemenUsed': semenAnalysis.volumeSemenUsed,
            'TestPreprationTotalCountRange': semenAnalysis.testPreprationTotalCountRange,
            'TestPreprationTotalCount': semenAnalysis.testPreprationTotalCount,
            'TestPreprationMotileCountRange': semenAnalysis.testPreprationMotileCountRange,
            'TestPreprationMotileCount': semenAnalysis.testPreprationMotileCount,
            'TestPreprationRapidLinearProgression': semenAnalysis.testPreprationRapidLinearProgression,
            'TestPreprationRapidNonLinearProgression': semenAnalysis.testPreprationRapidNonLinearProgression,
            'TimeCompleted': semenAnalysis.timeCompleted,
            'FinalVolume': semenAnalysis.finalVolume,
            'NormalForms': semenAnalysis.normalForms,
            'HeadAbnormalities': semenAnalysis.headAbnormalities,
            'MidpieceAbnormalities': semenAnalysis.midpieceAbnormalities,
            'TailAbnormalities': semenAnalysis.tailAbnormalities,
            'OtherCells': semenAnalysis.otherCells,
            'Comments': semenAnalysis.comments
        })
    }

}
