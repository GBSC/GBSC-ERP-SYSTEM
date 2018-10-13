import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Patient } from '../../../core/Models/HIMS/patient';




@Component({
    selector: 'app-patientvitals',
    templateUrl: './patientvitals.component.html',
    styleUrls: ['./patientvitals.component.css']
})
export class PatientvitalsComponent implements OnInit {

    public PatientVitaLForm: FormGroup;
    public currentPatient: any;
    public visitid: any;
    id: number;
    Patient: Patient;
    patientId: number;
    visitId: number;
    constructor(private Location: Location, private PatientServiceobj: PatientService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
        this.PatientVitaLForm = this.formBuilder.group({
            Height: ['', Validators.required],
            Weight: ['', Validators.required],
            // CalculatedBMI: ['', Validators.required],
            Temperature: ['', Validators.required],
            Pulse: ['', Validators.required],
            RespiratoryRate: ['', Validators.required],
            BloodPressure: ['', Validators.required],
            BloodOxygenSaturation: ['', Validators.required],
            VisitId: ['', Validators.required]
        });

    }

    ngOnInit() {

        this.currentPatient = this.PatientServiceobj.currentPatient;
        console.log(this.currentPatient);

        this.visitid = this.PatientServiceobj.visitid;
        console.log(this.visitid);


        this.route.params.subscribe(params => {

            this.id = +params['id'];

            let x = this.PatientServiceobj.getpatient(this.id).subscribe(Patient => {
                this.Patient = Patient;
            });
            console.log(x);
        });

    }

    async  onsubmit(value) {

        this.visitid = this.PatientServiceobj.visitid.visitID;
        // console.log(this.visitid.value);

        // this.appointmentForm.value.patientId = this.patientIdIs.patientId;
        this.PatientVitaLForm.value.VisitId = this.visitid;

        let x = await this.PatientServiceobj.AddPatientVital(value);
        this.router.navigate(['/hims/patient/visits/' + this.patientId]);
        console.log(x);

        console.log(this.PatientVitaLForm.value);
        this.backClicked()
        return x;

    }

    backClicked() {
        this.Location.back();
    }


}