import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BiochemistryoutsiderService } from '../../../../app/core/Services/HIMS/Lab/biochemistryoutsider.service';
import { PatientService } from '../../../../app/core';
import { Spouse } from '../../../../app/core/Models/HIMS/spouse';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';

@Component({
    selector: 'app-biochemistry-outsider',
    templateUrl: './biochemistry-outsider.component.html',
    styleUrls: ['./biochemistry-outsider.component.scss']
})
export class BiochemistryOutsiderComponent implements OnInit {

    public patients: any;
    public spouse: Spouse;
    public patient: any;
    public tests: any;
    public id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent


    constructor(public formBuilder: FormBuilder,
        public bioChemistryOutsiderService: BiochemistryoutsiderService,
        public patientService: PatientService) {

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
