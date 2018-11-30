import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { BioChemistryService } from '../../../core/Services/HIMS/Lab/bio-chemistry.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../core';
import { Consultant } from '../../../core/Models/HIMS/consultant';
import { Spouse } from '../../../core/Models/HIMS/spouse';
import { Patient } from '../../../core/Models/HIMS/patient';
import { BioChemistryTest } from '../../../core/Models/HIMS/biochemistrytest';
import { TestUnit } from '../../../core/Models/HIMS/testunit';
import { BioChemistryTestDetail } from '../../../core/Models/HIMS/biochemistrytestdetail';
import { PatientBiochemistryTest } from '../../../core/Models/HIMS/patientbiochemistrytest';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { ToastrService } from 'ngx-toastr';
import { ScriptLoaderService } from '../../../../app/_services/script-loader.service';

@Component({
    selector: 'app-biochemistryontreatment',
    templateUrl: './biochemistryontreatment.component.html',
    styleUrls: ['./biochemistryontreatment.component.scss']
})
export class BiochemistryontreatmentComponent implements OnInit {

    private consultants: any;
    private treatments: any;
    private clinicalRecord: any;
    private patients: any;
    private spouse: Spouse;
    private patient: Patient;
    private bioChemistryontreatmentForm: FormGroup;
    private tests: BioChemistryTest;
    private units: TestUnit;
    private id: any;
    private bioChemistry: any;
    private RefRange : any;
    private testDetail: BioChemistryTestDetail[];

    public packg: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent


    constructor(private _script: ScriptLoaderService,
        private formBuilder: FormBuilder,
        private consultantService: ConsultantService,
        private patientService: PatientService,
        private treatmentService: TreatmentService,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private clinicalrecordservice: PatientclinicalrecordService,
        private bioChemistryService: BioChemistryService) {

        this.bioChemistryontreatmentForm = formBuilder.group({
            'CollectionDate': ['', Validators.required],
            'LMP': ['', Validators.required],
            'Other': [''],
            'IsRandom': [false]
        });

        this.bioChemistryontreatmentForm.disable();

    }

    ngOnInit() {

        this.testDetail = [];

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

                this.clinicalRecord = resp;

                this.bioChemistryService
                    .getPatientBioChemistryTestByClinicalRecordId(this.clinicalRecord.patientClinicalRecordId)
                    .subscribe(resp => {

                        this.bioChemistry = resp;
                        this.testDetail = this.bioChemistry.bioChemistryTestDetails;

                        this.patchValues(this.bioChemistry);

                    });

            })

        })

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))
            this.bioChemistryontreatmentForm.enable();

        });


        this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientCb().subscribe(patients => this.patients = patients);

        this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);

        this.bioChemistryService.getTests().subscribe(tests => this.tests = tests);

        this.bioChemistryService.getUnits().subscribe(units => this.units = units);



    }

    ngAfterViewInit() {
        this._script.loadScripts('app-validation-form-widgets',
            ['assets/demo/default/custom/components/forms/validation/form-widgets.js']);

    }

    onsubmit(value) {

        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.bioChemistryTestDetails = this.testDetail;

        this.bioChemistryService.addPatientBioChemistryTest(value).subscribe(resp => this.displayToast("Biochemistry test saved!"));

    }

    onUpdate(value) {

        value.bioChemistryTestOnTreatmentId = this.bioChemistry.bioChemistryTestOnTreatmentId;
        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.bioChemistryTestDetails = this.testDetail;

        this.bioChemistryService.updatePatientBioChemistryTest(value).subscribe(resp => this.displayToast("Biochemistry test updated!"));

    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            console.log(patient.partner);
            this.spouse = patient.partner;
        });
    }

    onFocusedRowChanged(e) {

        var data = e.row.data;

        this.bioChemistryService.getTest(data.bioChemistryTestId).subscribe(resp => {

            this.RefRange = resp.referenceRange;
        })
    }

    displayToast(message) {

        this.toastr.success(message);

    }

    patchValues(biochemistry) {
        this.bioChemistryontreatmentForm.patchValue({
            'CollectionDate': biochemistry.collectionDate,
            'LMP': biochemistry.lmp,
            'IsRandom': biochemistry.isRandom
        })
    }




}
