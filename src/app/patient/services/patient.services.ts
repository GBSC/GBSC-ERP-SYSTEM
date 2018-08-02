import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../../models/patient';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class PatientService {

  public patient;
  public currentPatient: any;
  public patients: any;

  private readonly API_URL = 'http://localhost:63449/api/Patients';

  dialogData: any;

  constructor(private http1: HttpClient, private http2: Http) {
  }



  async getPatient() {
    this.patients = await this.http1.get<Patient>(this.API_URL + '/GetPatients').toPromise();
    console.log(this.patients);
    return this.patients;
  }

  async addPatient(patient: Patient) {
  let addPatient = await this.http1.post(this.API_URL + '/AddPatient', patient).toPromise();
  console.log(addPatient);
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
    return await this.http1.post(`${this.API_URL}/UpdatePatient/`, patient).toPromise();
  }

  setCurrentPatient(patient) {
    console.log(patient);
    this.currentPatient = patient;
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