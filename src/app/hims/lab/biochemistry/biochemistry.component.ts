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
    private bioChemistry: any;
    private units: TestUnit;
    private bioChemistryOutsiderForm: FormGroup;
    private id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(private formBuilder: FormBuilder,
        private bioChemistryOutsiderService: BiochemistryoutsiderService,
        private consultantService: ConsultantService,
        private patientService: PatientService,
        private bioChemistryService: BioChemistryService,
        private route: ActivatedRoute, ) {

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

            this.bioChemistryOutsiderService.getBioChemistryTestOutsider(this.id).subscribe(resp => {

                this.bioChemistry = resp;

                if (this.bioChemistry) {
                    this.testDetail = this.bioChemistry.bioChemistryTestDetails;

                }

            })

        })

        this.patientcb.onValueChanged.subscribe(res => this.populatePatientDate(res.component.option("value")));

        this.consultantService.getConsultants()
            .subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientObservable()
            .subscribe(patients => this.patients = patients);

        this.bioChemistryService.getTests().subscribe(tests => this.tests = tests);

        this.bioChemistryService.getUnits().subscribe(units => this.units = units);


    }

    submitForm(value: any) {

        value.bioChemistryTestDetails = this.testDetail;

        this.bioChemistryOutsiderService.addBioChemistryTestOutsider(value).subscribe(resp => console.log(resp));
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }



}
