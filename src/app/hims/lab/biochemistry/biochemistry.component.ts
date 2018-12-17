import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BioChemistryService } from '../../../core/Services/HIMS/Lab/bio-chemistry.service';
import { ConsultantService, PatientService } from '../../../core';
import { Consultant } from '../../../core/Models/HIMS/consultant';
import { Spouse } from '../../../core/Models/HIMS/spouse';
import { Patient } from '../../../core/Models/HIMS/patient';
import { BioChemistryTestDetail } from '../../../core/Models/HIMS/biochemistrytestdetail';
import { BioChemistryTest } from '../../../core/Models/HIMS/biochemistrytest';
import { TestUnit } from '../../../core/Models/HIMS/testunit';
import { PatientBiochemistryTest } from '../../../core/Models/HIMS/patientbiochemistrytest';
import { BiochemistryoutsiderService } from '../../../../app/core/Services/HIMS/Lab/biochemistryoutsider.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-biochemistry',
    templateUrl: './biochemistry.component.html',
    styleUrls: ['./biochemistry.component.scss']
})
export class BiochemistryComponent implements OnInit {

    public consultants: Consultant;
    public patients: any;
    public spouse: Spouse;
    public patient: Patient;
    public testDetail: BioChemistryTestDetail[];
    public tests: BioChemistryTest;
    public bioChemistry: any;
    public units: TestUnit;
    public bioChemistryOutsiderForm: FormGroup;
    public id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(public formBuilder: FormBuilder,
        public bioChemistryOutsiderService: BiochemistryoutsiderService,
        public consultantService: ConsultantService,
        public patientService: PatientService,
        public bioChemistryService: BioChemistryService,
        public toastr: ToastrService,
        public route: ActivatedRoute, ) {

        this.bioChemistryOutsiderForm = formBuilder.group({
            'PatientId': ['', Validators.required],
            'ConsultantId': ['', Validators.required],
            'CollectionDate': [],
            'LMP': [],
            'Days': [],
            'Others': [],
            'IsRandom': [false]
        });

    }

    ngOnInit() {

        this.testDetail = [];

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.setValues();

        })

        this.patientcb.onValueChanged.subscribe(res => this.populatePatientDate(res.component.option("value")));

        this.consultantService.getConsultants()
            .subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientCb()
            .subscribe(patients => this.patients = patients);

        this.bioChemistryService.getTests().subscribe(tests => this.tests = tests);

        this.bioChemistryService.getUnits().subscribe(units => this.units = units);


    }

    setValues() {

        this.bioChemistryOutsiderService.getBioChemistryTestOutsider(this.id).subscribe(resp => {

            this.bioChemistry = resp;

            if (this.bioChemistry) {
                this.patchValues(this.bioChemistry);
                this.testDetail = this.bioChemistry.bioChemistryTestDetails;
            }

        });
    }

    submitForm(value: any) {

        value.bioChemistryTestDetails = this.testDetail;

        this.bioChemistryOutsiderService.addBioChemistryTestOutsider(value).subscribe(resp => {
            this.displayToast("Biochemistry Test Saved!");
            this.id = resp.bioChemistryTestOutsiderId;
            this.setValues();

        });
    }

    updateForm(value: any) {

        value.bioChemistryTestDetails = this.testDetail;
        value.bioChemistryTestOutsiderId = this.id;

        this.bioChemistryOutsiderService.updateBioChemistryTestOutsider(value).subscribe(resp => {
            this.displayToast("Biochemistry Test Updated!");

        });
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    patchValues(biochesmitry) {

        this.bioChemistryOutsiderForm.patchValue({

            'PatientId': biochesmitry.patientId,
            'ConsultantId': biochesmitry.consultantId,
            'CollectionDate': biochesmitry.collectionDate,
            'LMP': biochesmitry.lMP,
            'Days': biochesmitry.days,
            'Others': biochesmitry.others,
            'IsRandom': biochesmitry.isRandom
        });
    }

    public displayToast(message) {
        this.toastr.success(message);
    }



}
