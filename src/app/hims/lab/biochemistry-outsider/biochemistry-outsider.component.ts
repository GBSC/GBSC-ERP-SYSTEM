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

    private patients: any;
    private spouse: Spouse;
    private patient: any;
    private tests: any;
    private id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent


    constructor(private formBuilder: FormBuilder,
        private bioChemistryOutsiderService: BiochemistryoutsiderService,
        private patientService: PatientService) {

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
