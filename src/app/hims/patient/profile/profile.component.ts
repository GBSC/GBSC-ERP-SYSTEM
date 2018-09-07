import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
import { ActivatedRoute } from '@angular/router';
import { FindPatientComponent } from '../../patient/find-patient/find-patient.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public patientObj;
    public currentPatient: {};
            id: number;
            Patient : Patient;


    constructor(private PatientServiceobj: PatientService,  private route : ActivatedRoute) { }


      ngOnInit() {
       // this.currentPatient = this.PatientServiceobj.currentPatient;
       
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
       let x = this.PatientServiceobj.getpatient(this.id).subscribe(Patient=> this.Patient = Patient );
  console.log(x);
     });

     
    }


}
