import { Component, OnInit, ViewChild } from '@angular/core';
import { Consultant } from '../../../models/consultant';
import { Patient } from '../../../models/patient';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { Spouse } from '../../../models/spouse';
import { BioChemistryTestDetail } from '../../../models/biochemistrytestdetail';
import { BioChemistryTest } from '../../../models/biochemistrytest';
import { TestUnit } from '../../../models/testunit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientBiochemistryTest } from '../../../models/patientbiochemistrytest';
import { BioChemistryService } from '../../../core/Services/HIMS/Lab/bio-chemistry.service';
import { ConsultantService, PatientService } from '../../../core';

@Component({
    selector: 'app-biochemistry',
    templateUrl: './biochemistry.component.html',
    styleUrls: ['./biochemistry.component.scss']
})
export class BiochemistryComponent implements OnInit {

    private consultants: Consultant;
    private patients: any;
    private spouse: Spouse;
    private patient: Patient;
    private testDetail: BioChemistryTestDetail[];
    private tests: BioChemistryTest;
    private units: TestUnit;
    private bioChemistryForm: FormGroup;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(private formBuilder: FormBuilder, private consultantService: ConsultantService, private patientService: PatientService, private bioChemistryService: BioChemistryService) {

        this.bioChemistryForm = formBuilder.group({
            'PatientId': ['', Validators.required],
            'ConsultantId': ['', Validators.required],
            'LMP': [],
            'Days': [],
            'IsRandom': [false]
        });

    }

    ngOnInit() {

        this.testDetail = [];

        this.patientcb.onValueChanged.subscribe(res => this.populatePatientDate(res.component.option("value")));

        this.consultantService.getConsultants()
            .subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientObservable()
            .subscribe(patients => this.patients = patients);

        this.bioChemistryService.getTests().subscribe(tests => this.tests = tests);

        this.bioChemistryService.getUnits().subscribe(units => this.units = units);


    }

    submitForm(value: PatientBiochemistryTest) {

        let patientBioChemistryTest = new PatientBiochemistryTest();

        patientBioChemistryTest = { ...patientBioChemistryTest, ...value };

        patientBioChemistryTest.IsOnTreatment = false;
        patientBioChemistryTest.BioChemistryTestDetails = this.testDetail;

        console.log(patientBioChemistryTest);
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    addBioChemistryTestDetail(value) {
        let data = value.data;

        this.testDetail.push(data);

        console.log(this.testDetail);
    }

    updateBioChemistryTestDetail(value) {
        let data = value.data;

        console.log(this.testDetail);
    }



}
