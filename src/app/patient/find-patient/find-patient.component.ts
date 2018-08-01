import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
import { getLocaleDateTimeFormat } from '@angular/common';
import { visitValue } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

import { ScriptLoaderService } from "../../_services/script-loader.service";


@Component({
    selector: 'app-find-patient',
    templateUrl: './find-patient.component.html',
    styleUrls: ['./find-patient.component.css']
})

export class FindPatientComponent implements OnInit {

    //  public currentPatient: any;
    editPatientForm: FormGroup;
    public mypatient: any;
    public xyz: any;
    public myid: any;
    // public patients;
    constructor(formBuilder: FormBuilder, private PatientServiceobj: PatientService, private router: Router, private _script: ScriptLoaderService) {
        this.editPatientForm = formBuilder.group({
            'FisrtName': ['', Validators.required],
            'MiddleName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'DOB': ['', Validators.required],
            'Gender': ['', Validators.required],
            'PhoneNumber': ['', Validators.required],
            'Address': ['', Validators.required],
            'Country': ['', Validators.required],
            'City': ['', Validators.required],
            'State': ['', Validators.required],
            'PostalCode': ['', Validators.required],
            'PatientRelation': ['', Validators.required],
            'PersonName': ['', Validators.required]
        });

    }

    ngAfterViewInit() {
        this._script.loadScripts('app-find-patient', ['assets/demo/default/custom/components/datatables/base/html-table.js']);
    }
    async ngOnInit() {
        await this.PatientServiceobj.getPatient();
        let par = this.PatientServiceobj.patients;
        console.log(par);
        // console.log(this.PatientServiceobj.patients.partner['0'])
        // .subscribe(data => {
        //   this.patients = data;
        //   console.log(data);
        //   console.log(this.patients.partner);
        // });

    }

    // async onSubmit({key}) {
    //   // key is accquired through desctructuring 
    //   // key is = data.key
    //   console.log(key);
    //   console.log(key.patientId);
    //  await this.PatientServiceobj.updatePatient(key);
    // }


    setCurrentPatient(patient) {
        this.PatientServiceobj.setCurrentPatient(patient);
        this.router.navigate(['/patient/profile']);
    }



}
