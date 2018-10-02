import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultantService } from '../../sharedservices/consultant.service';
import { Consultant } from '../../../models/consultant';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../sharedservices/patient.service';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { Spouse } from '../../../models/spouse';
import { BioChemistryTestDetail } from '../../../models/biochemistrytestdetail';
import { BioChemistryTest } from '../../../models/biochemistrytest';
import { TestUnit } from '../../../models/testunit';
import { BioChemistryService } from '../../../core/Services/HIMS/Lab/bio-chemistry.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientBiochemistryTest } from '../../../models/patientbiochemistrytest';

@Component({
    selector: 'app-biochemistryontreatment',
    templateUrl: './biochemistryontreatment.component.html',
    styleUrls: ['./biochemistryontreatment.component.scss']
})
export class BiochemistryontreatmentComponent implements OnInit {

    private consultants: Consultant;
    private patients: Patient;
    private spouse: Spouse;
    private patient: Patient;
    private bioChemistryontreatmentForm: FormGroup;
    private tests: BioChemistryTest;
    private units: TestUnit;
    private testDetail: BioChemistryTestDetail[];

    public packg: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent


    constructor(private formBuilder: FormBuilder, private consultantService: ConsultantService, private patientService: PatientService, private bioChemistryService: BioChemistryService) {

        this.bioChemistryontreatmentForm = formBuilder.group({
            'PatientId': ['', Validators.required],
            'ConsultantId': ['', Validators.required],
            'LMP': [],
            'IsRandom': [false],
            'Treatment': ['', Validators.required],
            'Cycle': ['', Validators.required],
            'TreatmentType': ['', Validators.required]
        });

    }

    ngOnInit() {

        this.testDetail = [];

        this.patientcb.onValueChanged.subscribe(res => this.populatePatientDate(res.component.option("value")));

        this.consultantService.getConsultants()
            .subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatient()
            .subscribe(patients => this.patients = patients);

        this.patientService.getPackage();
        this.packg = this.patientService.package;

        this.bioChemistryService.getTests().subscribe(tests => this.tests = tests);

        this.bioChemistryService.getUnits().subscribe(units => this.units = units);



    }

    onsubmit(value) {

        let patientBioChemistryTest = new PatientBiochemistryTest();

        console.log(value);

        // patientBioChemistryTest = {...patientBioChemistryTest, ...value};

        // patientBioChemistryTest.IsOnTreatment = true;
        // patientBioChemistryTest.BioChemistryTestDetails = this.testDetail;

        // console.log(patientBioChemistryTest);
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            console.log(patient.partner);
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

        // this.testDetail.push(data);

        console.log(this.testDetail);
    }




}
