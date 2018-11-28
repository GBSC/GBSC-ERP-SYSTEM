import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import validator from 'devextreme/ui/validator';

import { DxSelectBoxComponent } from 'devextreme-angular';
import { InseminationprepService } from '../../../core/Services/HIMS/Lab/inseminationprep.service';
import { ConsultantService, PatientService } from '../../../core';
import { Consultant } from '../../../core/Models/HIMS/consultant';
import { Patient } from '../../../core/Models/HIMS/patient';
import { Spouse } from '../../../core/Models/HIMS/spouse';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { ActivatedRoute } from '@angular/router';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';

@Component({
    selector: 'app-inseminationprep',
    templateUrl: './inseminationprep.component.html',
    styleUrls: ['./inseminationprep.component.scss']
})
export class InseminationprepComponent implements OnInit {

    private inseminationPrepForm: FormGroup;
    public id: any;
    private consultants: any;
    private patients: any;
    private spouse: any;
    private patient: any;
    private clinicalRecord: any;
    private treatments: any;
    public total: any;
    private insemenationPrep: any;
    private prepForOptions: any;
    private sampleTypeOptions: any;
    private methods: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent



    constructor(private inseminationPrepService: InseminationprepService,
        private clinicalrecordservice: PatientclinicalrecordService,
        private route: ActivatedRoute,
        private treatmentService: TreatmentService,
        private formBuilder: FormBuilder, private consultantService: ConsultantService, private patientService: PatientService) {

        this.inseminationPrepForm = formBuilder.group({
            'InsemenationDate': ['', Validators.required],
            'PrepFor': ['', Validators.required],
            'CollectionNumber': ['', Validators.required],
            'CollectionDate': ['', Validators.required],
            'SampleType': ['', Validators.required],
            'ProcedureNumber': ['', Validators.required],
            'Method': ['', Validators.required],
            'Volume': ['', Validators.required],
            'TotalCount': ['', Validators.required],
            'TotalCountRange': ['', Validators.required],
            'MotileCount': ['', Validators.required],
            'NonLinearProgression': ['', Validators.required],
            'RapidLinearProgression': ['', Validators.required],
            'MotileCountRange': ['', Validators.required],
            'TimeCompleted': ['', Validators.required],
            'FinalVolume': ['', Validators.required],
            'Comments': ['', Validators.required],
            'SpecialComment': ['', Validators.required],


        });

        this.prepForOptions = [{ name: "SEMEN" }, { name: "PESA" }, { name: "TESE" }, { name: "PESA-TESE" }];

        this.sampleTypeOptions = [{ name: "Fresh" }, { name: "Thawed" }, { name: "Fresh + Thawed" }]

        this.methods = [{ name: "SPIND" }, { name: "ULAY" }, { name: "PURESPERM" }]

        this.inseminationPrepForm.disable();

    }




    ngOnInit() {

        this.route.params.subscribe((params) => {

            this.id = +params['id'];

            this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

                this.clinicalRecord = resp;

            });


            this.inseminationPrepService.getInsemenationPrepByClinicalRecordId(this.id)
                .subscribe(resp => this.insemenationPrep = resp);

        });


        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatient(res.component.option("value"))
            this.inseminationPrepForm.enable();

        });


        this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatientObservable().subscribe(patients => this.patients = patients);

        this.treatmentService.gettreatmenttypes().subscribe(resp => this.treatments = resp);

    }

    populatePatient(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    onSubmit(value) {

        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;

        this.inseminationPrepService.addInseminationPrep(value).subscribe(resp => console.log(resp));
    }

}
