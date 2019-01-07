import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BiochemistryoutsiderService } from '../../../../app/core/Services/HIMS/Lab/biochemistryoutsider.service';
import { PatientService } from '../../../../app/core';
import { Spouse } from '../../../../app/core/Models/HIMS/spouse';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
    selector: 'app-biochemistry-outsider',
    templateUrl: './biochemistry-outsider.component.html',
    styleUrls: ['./biochemistry-outsider.component.scss']
})
export class BiochemistryOutsiderComponent implements OnInit {

<<<<<<< HEAD
    private patients: any;
    private spouse: Spouse;
    private patient: any;
    private tests: any;
    private id: any;
=======
    public patients: any;
    public spouse: Spouse;
    public patient: any;
    public tests: any;
    public id: any;
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent


<<<<<<< HEAD
    constructor(private formBuilder: FormBuilder,
        private bioChemistryOutsiderService: BiochemistryoutsiderService,
        private patientService: PatientService) {
=======
    constructor(public formBuilder: FormBuilder,
        public bioChemistryOutsiderService: BiochemistryoutsiderService,
        public patientService: PatientService) {
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d

        this.tests = [];
    }

    ngOnInit() {

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))

        });

        this.patientService.getPatientCb().subscribe(patients => this.patients = patients);

    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;

            this.bioChemistryOutsiderService
                .getBioChemistryTestOutsiderByPatientId(this.patient.patientId).subscribe(resp => {
                    console.log(resp)
                    this.tests = resp;
                });

        });
    }



}
