import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { visitValue } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';



@Component({
    selector: 'app-find-patient',
    templateUrl: './find-patient.component.html',
    styleUrls: ['./find-patient.component.css']
})

export class FindPatientComponent implements OnInit {

    searchPatientForm: FormGroup;



    public Patientid: any;
    public patients: any;

    constructor(formBuilder: FormBuilder, private PatientServiceobj: PatientService, private router: Router) {

        this.searchPatientForm = formBuilder.group({
            'name': ['', Validators.required],
            'mrn': ['', Validators.required],
            'contact': ['', Validators.required],
        });
    }


    async ngOnInit() {

    }


    async SearchPatient(value) {

        this.PatientServiceobj.SearchPatient(value).subscribe(resp => {
            this.patients = resp;
        })
    }

}

