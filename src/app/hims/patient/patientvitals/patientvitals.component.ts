import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../hims/patient/services/patient.services'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientVital } from '../../../models/patientvitals'

@Component({
    selector: 'app-patientvitals',
    templateUrl: './patientvitals.component.html',
    styleUrls: ['./patientvitals.component.css']
})
export class PatientvitalsComponent implements OnInit {

    public PatientVitaLForm: FormGroup;

    constructor(private PatientServiceobj: PatientService, private formBuilder: FormBuilder) {
        this.PatientVitaLForm = this.formBuilder.group(
            {
                Height: ['x', Validators.required],
                Weight: ['x', Validators.required],
                CalculatedBMI: ['x', Validators.required],
                Temperature: ['x', Validators.required],
                Pulse: ['x', Validators.required],
                RespiratoryRate: ['x', Validators.required],
                BloodPressure: ['x', Validators.required],
                BloodOxygenSaturation: ['x', Validators.required]
            });

    }

    ngOnInit() {
    }
    ConvertToInt(val) {
        return parseInt(val);
    }
}
