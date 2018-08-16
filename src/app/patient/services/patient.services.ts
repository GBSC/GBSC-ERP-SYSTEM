import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../../models/patient';
import { Appointment } from '../../models/appointment';
import { Consultant } from '../../models/consultant';
import { himsSetupTest } from '../../models/himsSetupTest';
import { AppointmentTest } from '../../models/appointmentTest';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class PatientService {

  public patient;
  public currentPatient: any;

  public consultant : any;
  public patients: any;
  public patientAllFormData: any = {};
  public tryImgSrc: any;
  public images: any = [];


  // <for appointmnet>
  public appointment : any;
  public getApptbyId : any;


  //for test
  public testing : any;
  public appointmenttesting : any;

   private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/hims/api';
     //private readonly API_URL = 'http://localhost:58788/api';


  dialogData: any;

  constructor(private http1: HttpClient, private http2: Http) {
  }

  async getPatient() {
    this.patients = await this.http1.get<Patient>(this.API_URL + '/patients/getpatients').toPromise();
    console.log(this.patients);
    return this.patients;
  }

  async addPatient(patient: Patient) {
  let addPatient = await this.http1.post(this.API_URL + '/patients/AddPatient', patient).toPromise();
     return addPatient;
  }

  // async getPatientbyid() {
  //   console.log(this.patientId);
  //   if (this.patientId) {
  //     let p = await this.http1.get(this.API_URL + '/GetPatinet/' + this.patientId).toPromise();
  //     this.patient = p;
  //     console.log(p)
  //     return p;
  //   }
  // }


  async updatePatient(patient) {
    console.log(patient)
    return await this.http1.post(`${this.API_URL}/patients/UpdatePatient/`, patient).toPromise();
  }

async deletePatient(id)
{
  let x = await this.http1.delete(this.API_URL+'/patients/DeletePatient/'+id).toPromise();
  console.log(x);
  return x;
  

}

  setCurrentPatient(patient) {
    console.log(patient);
    this.currentPatient = patient;
  }


  async getappointments()
  {
    this.appointment = await this.http1.get<Appointment>(this.API_URL+'/Appointments/getappointments').toPromise();
    console.log(this.appointment);
    return this.appointment;
  }

  async getAppointmentById(id)
  {
    console.log(id);
    this.getApptbyId = await this.http1.get<Appointment>(this.API_URL+'/Appointments/GetAppointment/'+id).toPromise();
    console.log( this.getApptbyId);
    console.log(this.API_URL+'/Appointments/GetAppointment/'+id);
    
    return  this.getApptbyId;  
  }
  

  async addAppointment(appointment :  Appointment)
  {
    let x = await this.http1.post(this.API_URL+'/Appointments/addappointment/',appointment).toPromise();
    console.log(x);
    return x;
  }

  async updateAppoint(appointment :  Appointment)
  {
    console.log(appointment);    
    return  await this.http1.put(`${this.API_URL}/Appointments/UpdateAppointment/`,appointment).toPromise();    
  }

  async deleteAppointment(id)
  {
    let x = await this.http1.delete(this.API_URL+'/Appointments/DeleteAppointment/'+id).toPromise();
    console.log(x);
    return x
  }
  
  async getConsultant()
  {
    this.consultant = await this.http1.get<Consultant>(this.API_URL+'/HimsSetup/GetConsultants').toPromise();
    console.log(this.consultant);
    return this.consultant;
    
  }
 
  async addConsultant(consultant : Consultant)
  {
    let x = await this.http1.post(this.API_URL+'/HimsSetup/AddConsultant',consultant).toPromise();
    console.log(x);
    return x;
  }

  async updateConsultant(consultant : Consultant)
  {
    let x = await this.http1.put(`${this.API_URL}/HimsSetup/UpdateConsultant/`,consultant).toPromise();
    console.log(x);
    return x;
  }

  async deleteConsultant(id)
  {
    let x = await this.http1.delete(this.API_URL+'/HimsSetup/DeleteConsultant/'+id).toPromise();
    console.log(x);
    return x;
  }

  async getTests()
  {
    this.testing = await this.http1.get<himsSetupTest>(this.API_URL+'/HimsSetup/GetTests').toPromise();
    console.log(this.testing);
    return this.testing;    
  }

  async addTest(himssetuptest: himsSetupTest)
  {
    let x = await this.http1.post(this.API_URL+'/HimsSetup/AddTest/',himssetuptest).toPromise();
    console.log(x);
    return x;
  }


  async updateTest(himssetuptest: himsSetupTest)
  {
    let x = await this.http1.put(`${this.API_URL}/HimsSetup/UpdateTest/`,himssetuptest).toPromise();
    console.log(x);
    return x;    
  }

  async deleteTest(id)
  {
    let x = await this.http1.delete(this.API_URL+'/HimsSetup/DeleteTest/'+id).toPromise();
    console.log(x);
    return x;    
  }


  async GetAppointmentTests()
  {
    this.appointmenttesting = await this.http1.get<AppointmentTest>(this.API_URL+'/Appointments/GetAppointmentTests').toPromise();
    console.log(this.appointmenttesting);
    return this.appointmenttesting;    
  }

  async AddAppointmentTest(appointmentTest : AppointmentTest)
  {
    let x = await this.http1.post(this.API_URL+'/Appointments/AddAppointmentTests/',appointmentTest).toPromise();
    console.log(x);
    return x;    
  }

  async UpdateAppointmentTest(appointmentTest : AppointmentTest)
  {
    let x  = await this.http1.put(`${this.API_URL}//`,appointmentTest).toPromise();
    console.log(x);
    return x;    
  }

  async DeleteAppointmentTest(id)
  {
    let x = await this.http1.delete(this.API_URL+''+id).toPromise();
    console.log(x);
    return x;
    
  }

  // setCurrentPatient(currentPatientId) {
  //   console.log(currentPatientId);
  //   let currentPatient = this.patients.find((patient) => {
  //     return patient.patientId === currentPatientId;
  //   });
  //   console.log(currentPatient);
    
  // //     console.log(currentPatient);
  // }
    
}