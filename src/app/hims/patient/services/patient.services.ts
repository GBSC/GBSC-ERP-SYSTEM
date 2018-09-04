import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../../../models/patient';
import { Appointment } from '../../../models/appointment';
import { Consultant } from '../../../models/consultant';
import { himsSetupTest } from '../../../models/himsSetupTest';
import { AppointmentTest } from '../../../models/appointmentTest';
import { Visits } from '../../../models/visits'
import { PatientVital } from '../../../models/patientvitals';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';

import { Package } from '../../../models/packages';


@Injectable()
export class PatientService {

    public patient;
    public currentPatient: any;

    public consultant: any;
    public patients: any;
    public patientAllFormData: any = {};
    public tryImgSrc: any;
    public images: any = [];


    // <for appointmnet>
    public appointment: any;
    public getApptbyId: any;


    //for test
    public testing: any;
    public appointmenttesting: any;

    // for patientVitals
    public PatientVitals: any;

    //for  ConsultantIdAndTentiveTime
    public ConsultantIdAndTentiveTime: any;

<<<<<<< HEAD
    //for profile 

    public package: any;
=======
    //for Visits control

    public visits: any;
    public visitid: any;
>>>>>>> 55da54d665ede41ce1cba2ed69bf17c145b34931

    private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/hims/api';
    private readonly API_URL1 = 'http://localhost:58788/api';


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

    async deletePatient(id) {
        let x = await this.http1.delete(this.API_URL + '/patients/DeletePatient/' + id).toPromise();
        console.log(x);
        return x;


    }

    setCurrentPatient(patient) {
        console.log(patient);
        this.currentPatient = patient;
    }


    async getappointments() {
        this.appointment = await this.http1.get<Appointment>(this.API_URL + '/Appointments/getappointments').toPromise();
        console.log(this.appointment);
        return this.appointment;
    }

    async getAppointmentById(id) {
        console.log(id);
        this.getApptbyId = await this.http1.get<Appointment>(this.API_URL + '/Appointments/GetAppointment/' + id).toPromise();
        //console.log( this.getApptbyId);
        // console.log(this.API_URL+'/Appointments/GetAppointment/'+id);

        return this.getApptbyId;
    }


    async addAppointment(appointment: Appointment) {
        let x = await this.http1.post(this.API_URL + '/Appointments/addappointment/', appointment).toPromise();
        console.log(x);
        return x;
    }

    async updateAppoint(appointment: Appointment) {
        console.log(appointment);
        return await this.http1.put(`${this.API_URL}/Appointments/UpdateAppointment/`, appointment).toPromise();
    }

    async deleteAppointment(id) {
        let x = await this.http1.delete(this.API_URL + '/Appointments/DeleteAppointment/' + id).toPromise();
        console.log(x);
        return x
    }

    async getConsultantIdAndTentiveTime(id, date) {
        this.ConsultantIdAndTentiveTime = await this.http1.get(`${this.API_URL}/Appointments/GetAppointmentByConsultantNameAndDate/${id}/${date}`).toPromise()
        console.log(this.ConsultantIdAndTentiveTime);
        return this.ConsultantIdAndTentiveTime;

    }

    async getConsultant() {
        this.consultant = await this.http1.get<Consultant>(this.API_URL + '/HimsSetup/GetConsultants').toPromise();
        console.log(this.consultant);
        return this.consultant;

    }

    async addConsultant(consultant: Consultant) {
        let x = await this.http1.post(this.API_URL + '/HimsSetup/AddConsultant', consultant).toPromise();
        console.log(x);
        return x;
    }

    async updateConsultant(consultant: Consultant) {
        let x = await this.http1.put(`${this.API_URL}/HimsSetup/UpdateConsultant/`, consultant).toPromise();
        console.log(x);
        return x;
    }

    async deleteConsultant(id) {
        let x = await this.http1.delete(this.API_URL + '/HimsSetup/DeleteConsultant/' + id).toPromise();
        console.log(x);
        return x;
    }

    async getTests() {
        this.testing = await this.http1.get<himsSetupTest>(this.API_URL + '/HimsSetup/GetTests').toPromise();
        console.log(this.testing);
        return this.testing;
    }

    async addTest(himssetuptest: himsSetupTest) {
        let x = await this.http1.post(this.API_URL + '/HimsSetup/AddTest/', himssetuptest).toPromise();
        console.log(x);
        return x;
    }


    async updateTest(himssetuptest: himsSetupTest) {
        let x = await this.http1.put(`${this.API_URL}/HimsSetup/UpdateTest/`, himssetuptest).toPromise();
        console.log(x);
        return x;
    }

    async deleteTest(id) {
        let x = await this.http1.delete(this.API_URL + '/HimsSetup/DeleteTest/' + id).toPromise();
        console.log(x);
        return x;
    }





    async UpdateAppointmentTests(id, appointmentTest: AppointmentTest) {
        //console.log(`${this.API_URL}/Appointments/UpdateAppointmentTests/${id}`);

        let x = await this.http1.post(`${this.API_URL}/Appointments/UpdateAppointmentTests/${id}`, appointmentTest).toPromise();
        // console.log(x);
        return x;
    }


    async GetVisits() {
        this.visits = await this.http1.get<Visits>(this.API_URL + '/Visits/GetVisits/').toPromise();
        console.log(this.visits);
        return this.visits;
    }

    async AddVisits(id) {
        this.visitid = await this.http1.post(this.API_URL + '/Visits/AddVisit/', { patientId: id }).toPromise()
        console.log(this.visitid);
        return this.visitid;
    }

    async UpdateVisits(visits: Visits) {
        let x = await this.http1.put(`${this.API_URL}/Visits/UpdateVisit/`, visits).toPromise();
        console.log(x);
        return x;

    }

    async DeleteVisits(id) {
        let x = await this.http1.delete(this.API_URL + '/Visits/DeleteVisit/' + id).toPromise();
        console.log(x);
        return x;

    }


    async GetPatientVitals() {
        this.PatientVitals = await this.http1.get<PatientVital>(this.API_URL + '/Visits/GetPatientVitals').toPromise();
        console.log(this.PatientVitals);
        return this.PatientVitals
    }


    async AddPatientVital(patientVital: PatientVital) {
        let x = await this.http1.post(this.API_URL + '/Visits/AddPatientVitals/', patientVital).toPromise();
        console.log(x);
        return x;
    }

    async UpdatePatientVital(patientVital: PatientVital) {
        let x = await this.http1.put(`${this.API_URL}/Visits/UpdatePatientVital/`, patientVital).toPromise();
        console.log(x);
        return x;
    }

    async DeletePatientVitals(id) {
        let x = await this.http1.delete(this.API_URL + '/Visits/DeletePatientVital/' + id).toPromise();
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