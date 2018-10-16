import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { getLocaleDateTimeFormat } from '@angular/common';
 import { Router } from '@angular/router';
//  import {Appointment} from 'src/app/core/Models/HIMS/appointment'

@Component({
  selector: 'app-viewall-appointmets',
  templateUrl: './viewall-appointmets.component.html',
  styleUrls: ['./viewall-appointmets.component.scss']
})
export class ViewallAppointmetsComponent implements OnInit {

  SearchAppointmentForm : FormGroup;
  public appointmentbydate : any  ;
  public par: any;
  private tentativeAppointments : any;
  private finalizedAppointments : any;

  constructor( formBuilder: FormBuilder, private PatientServiceobj: PatientService) {
    this.SearchAppointmentForm = formBuilder.group({
      TentativeTime :['']
    })

  }

async  ngOnInit() {
    await this.PatientServiceobj.getPatient();
    this.par = this.PatientServiceobj.patients;
    console.log(this.par);
 
  }


 async SearchAppointment(date) {
    console.log( date.value);
    this.appointmentbydate = await this.PatientServiceobj.getAppointmentByDate( date.value);
    this.tentativeAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment === false).map((a, i) => { a.index = i + 1; return a });
    this.finalizedAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment === true).map((a, i) => { a.index = i + 1; return a });
    await this.PatientServiceobj.getPatient();
    this.par = this.PatientServiceobj.patients;
  }


 
  async updateAppointment(value)
  {
    console.log(value)
    let x = await this.PatientServiceobj.updateAppointment(value.key);
    console.log(x);
  //  this.appointmentbydate = await this.PatientServiceobj.getAppointmentByDate( date.value);
   this.appointmentbydate;
     console.log(this.appointmentbydate);
    this.tentativeAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment === false).map((a, i) => { a.index = i + 1; return a });
    this.finalizedAppointments = this.appointmentbydate.filter(a => a.isFinalAppointment === true).map((a, i) => { a.index = i + 1; return a });

    console.log(x);
    return x;
  }

}
