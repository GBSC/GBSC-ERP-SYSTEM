import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../hims/patient/services/patient.services'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientVital } from '../../../models/patientvitals';
import { Router } from '@angular/router';


@Component({
    selector: 'app-patientvitals',
    templateUrl: './patientvitals.component.html',
    styleUrls: ['./patientvitals.component.css']
})
export class PatientvitalsComponent implements OnInit {

    public PatientVitaLForm: FormGroup;
    public currentPatient: any;
    public visitid : any;   

    constructor(private PatientServiceobj: PatientService, private formBuilder: FormBuilder,  private router: Router) {
        this.PatientVitaLForm = this.formBuilder.group({
                Height: ['', Validators.required],
                Weight: ['', Validators.required],
                CalculatedBMI: ['', Validators.required],
                Temperature: ['', Validators.required],
                Pulse: ['', Validators.required],
                RespiratoryRate: ['', Validators.required],
                BloodPressure: ['', Validators.required],
                BloodOxygenSaturation: ['', Validators.required],
                VisitId : ['', Validators.required]
            });
 
    }

    ngOnInit() {
        this.currentPatient = this.PatientServiceobj.currentPatient;
        console.log(this.currentPatient);

        this.visitid = this.PatientServiceobj.visitid;
        console.log(this.visitid);
    }
    
   async  onsubmit(value){
        
        this.visitid = this.PatientServiceobj.visitid;
       // console.log(this.visitid.value);

       // this.appointmentForm.value.patientId = this.patientIdIs.patientId;


       this.PatientVitaLForm.value.VisitId = this.visitid.visitID;
     
      
         let x = await this.PatientServiceobj.AddPatientVital(value);
       console.log(x);
        
        console.log(this.PatientVitaLForm.value);
        this.router.navigate(['/hims/patient/profile']);
        return x;
   
    }
    

}
