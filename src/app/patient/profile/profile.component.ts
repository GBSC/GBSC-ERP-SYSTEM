import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Patient } from '../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
import { FindPatientComponent } from '../../patient/find-patient/find-patient.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public patientObj;
  public currentPatient: any;


  constructor(public PatientServiceobj: PatientService) { }


  async ngOnInit() {

    // this.patientObj = this.PatientServiceobj.patient;
    // console.log(this.patientObj);

    this.currentPatient = this.PatientServiceobj.currentPatient;

    console.log(this.currentPatient);

    

  }

}
