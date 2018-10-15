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
    public PatientVitalsByVisitId: any;

    id: number;
    Patient: Patient;
    patientId: number;
    visitId: number;
    public visit: any = {};
    constructor(private Location: Location, private PatientServiceobj: PatientService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
        this.PatientVitaLForm = this.formBuilder.group({
            Height: ['', Validators.required],
            Weight: ['', Validators.required],
            // CalculatedBMI: ['', Validators.required],
            Temperature: ['', Validators.required],
            Pulse: ['', Validators.required],
            RespiratoryRate: ['', Validators.required],
            BloodPressureUp: ['', Validators.required],
            BloodPressureDown: ['', Validators.required],
            BloodOxygenSaturation: ['', Validators.required],
            VisitId: ['', Validators.required]
        });

    }

    async  ngOnInit() {

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

        let x = this.PatientServiceobj.Getvisit(this.visitid.visitID).subscribe(visit =>
            this.visit = visit);

    }

    async  onsubmit(value) {

        this.visitid = this.PatientServiceobj.visitid.visitID;
        // console.log(this.visitid.value);
        // this.appointmentForm.value.patientId = this.patientIdIs.patientId;
        this.PatientVitaLForm.value.VisitId = this.visitid;
        console.log(value);
        let x = await this.PatientServiceobj.AddPatientVital(value);
        // this.router.navigate(['/hims/patient/visits/' + this.patientId]);
        console.log(x);
        // console.log(this.PatientVitaLForm.value);
        //  this.backClicked()
        // this.PatientVitalsByVisitId = await this.PatientServiceobj.getPatientVitalByVisitId(this.visitid.visitID);
        // console.log(this.PatientVitalsByVisitId);
        return x;
    }

    backClicked() {
        this.Location.back();
    }

}
