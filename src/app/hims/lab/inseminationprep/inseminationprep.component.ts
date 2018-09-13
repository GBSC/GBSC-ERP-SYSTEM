import { Component, OnInit, ViewChild } from '@angular/core';
import { InseminationprepService } from '../services/inseminationprep.service';
import { InseminationPrep } from '../../../models/inseminationprep';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import validator from 'devextreme/ui/validator';
import { InseminationPrepDetail } from '../../../models/InseminationPrepDetail';
import { ConsultantService } from '../../sharedservices/consultant.service';
import { Consultant } from '../../../models/consultant';
import { Patient } from '../../../models/patient';
import { Spouse } from '../../../models/spouse';
import { PatientService } from '../../sharedservices/patient.service';

import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
    selector: 'app-inseminationprep',
    templateUrl: './inseminationprep.component.html',
    styleUrls: ['./inseminationprep.component.scss']
})
export class InseminationprepComponent implements OnInit {

    private inseminationPrepForm: FormGroup;
    public abc: any;
    private consultants: Consultant;
    private patients: Patient;
    private spouse: Spouse;
    private patient: Patient;
    public total: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent



    constructor(private inseminationPrepService: InseminationprepService, private formBuilder: FormBuilder, private consultantService: ConsultantService, private patientService: PatientService) {

        this.inseminationPrepForm = formBuilder.group({
            'InseminationPrepDate': ['', Validators.required],
            'TreatmentNumber': ['', Validators.required],
            'PatientId': ['', Validators.required],
            'ConsultantId': ['', Validators.required],
            'CycleNumber': ['', Validators.required],
            'InseminationPrepType': ['', Validators.required],
            'PrepFor': ['', Validators.required],
            'CollectionNumber': ['', Validators.required],
            'CollectionDate': ['', Validators.required],
            'SampleType': ['', Validators.required],
            'ProcedureNumber': ['', Validators.required],
            'DetailInseminationDate': ['', Validators.required],
            'Method': ['', Validators.required],
            'Volume': ['', Validators.required],
            'TotalCount': ['', Validators.required],
            'TotalCountValue': ['', Validators.required],
            'MotileCount': ['', Validators.required],
            'RapidLinearProgression': ['', Validators.required],
            'MobileCount': ['', Validators.required],
            'MotileCountValue': ['', Validators.required],
            'LinearProgression': ['', Validators.required],
            'TimeCompleted': ['', Validators.required],
            'MobileCountUnit': ['', Validators.required],
            'NonLinearProgression': ['', Validators.required],
            'FinalVolume': ['', Validators.required],
            'Comments': ['', Validators.required],
            'SpecialComment': ['', Validators.required],


        })



    }




    ngOnInit() {
        this.patientcb.onValueChanged.subscribe(res => this.populatePatient(res.component.option("value")));

        this.consultantService.getConsultants()
            .subscribe(consultants => this.consultants = consultants)

        this.patientService.getPatient()
            .subscribe(patients => this.patients = patients);

    }
    populatePatient(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    async  onSubmit(value) {


        let { TotalCount, TotalCountValue } = this.inseminationPrepForm.value;

        this.inseminationPrepForm.value.TotalCount = `${TotalCount} ${TotalCountValue}`;

        delete this.inseminationPrepForm.value.TotalCountValue;


        let { MotileCount, MotileCountValue } = this.inseminationPrepForm.value;
        this.inseminationPrepForm.value.MotileCount = `${MotileCount} ${MotileCountValue}`
        delete this.inseminationPrepForm.value.MotileCountValue;

        console.log(value);
        console.log(this.total);

        console.log(this.inseminationPrepForm.value.TotalCount)
        let x = await this.inseminationPrepService.addInseminationPrep(value);
        console.log(x);


    }

}
