import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Patient } from '../../../models/patient';
import { Appointment } from '../../../models/appointment';
import { himsSetupTest } from '../../../models/himsSetupTest';
import { Package } from '../../../models/packages';
import { Consultant } from '../../../models/consultant';
import { AppointmentTest } from '../../../models/appointmentTest';
import { PatientVital } from '../../../models/patientvitals';

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

    //for package
    public package: any;

    private readonly API_URL = 'hims/api/';
    private readonly API_URL1 = 'http://localhost:58788/api';


    dialogData: any;

    constructor(private http: HttpClient, private ApiService: ApiService) {
    }

    getPatient(): Observable<Patient> {
        return this.ApiService.get(this.API_URL + 'patients/getpatients');
        //return this.http.get<Patient>(this.API_URL + '/patients/getpatients');
    }

    getPatientWithPartner(PatientId: number): Observable<Patient> {
        return this.ApiService.get(this.API_URL + 'patients/getpatientwithpartner/' + PatientId);
        //return this.http.get<Patient>(this.API_URL + '/patients/getpatientwithpartner/' + PatientId);
    }

    async addPatient(patient: Patient) {
        return await this.ApiService.post(this.API_URL + 'patients/AddPatient', patient).toPromise();
        //post(path: string, body: Object = {})
        //let addPatient = await this.http.post(this.API_URL + '/patients/AddPatient', patient).toPromise();
        //return addPatient;
    }

    // async getPatientbyid() {
    //   console.log(this.patientId);
    //   if (this.patientId) {
    //     let p = await this.httpget(this.API_URL + '/GetPatinet/' + this.patientId).toPromise();
    //     this.patient = p;
    //     console.log(p)
    //     return p;
    //   }
    // }


    async updatePatient(patient) {
        return await this.ApiService.put(this.API_URL+ 'patients/UpdatePatient/' , patient).toPromise();
        //put(path: string, body: Object = {}):
        //console.log(patient)
        //return await this.http.post(`${this.API_URL}/patients/UpdatePatient/`, patient).toPromise();
    }

    async deletePatient(id) {
        return await this.ApiService.delete(this.API_URL +'patients/DeletePatient/' + id).toPromise();
        // let x = await this.http.delete(this.API_URL + '/patients/DeletePatient/' + id).toPromise();
        // console.log(x);
        // return x;


    }

    setCurrentPatient(patient) {
        console.log(patient);
        this.currentPatient = patient;
    }


    async getappointments() {
        this.appointment = await this.ApiService.get(this.API_URL + 'Appointments/getappointments').toPromise();
        return this.appointment;
        //this.appointment = await this.http.get<Appointment>(this.API_URL + '/Appointments/getappointments').toPromise();
        //console.log(this.appointment);
        //return this.appointment;
    }

    async getAppointmentById(id) {
        this.getApptbyId = await this.ApiService.get(this.API_URL + 'Appointments/getappointment/' + id).toPromise();
        //console.log(id);
        //this.getApptbyId = await this.http.get<Appointment>(this.API_URL + '/Appointments/GetAppointment/' + id).toPromise();
        //console.log( this.getApptbyId);
        // console.log(this.API_URL+'/Appointments/GetAppointment/'+id);
        return this.getApptbyId;
    }

    async addAppointment(appointment: Appointment) {
        return await this.ApiService.post(this.API_URL + 'Appointments/addappointment', appointment).toPromise();
        //let x = await this.http.post(this.API_URL + '/Appointments/addappointment/', appointment).toPromise();
        //console.log(x);
        //return x;
    }

    async updateAppointment(appointment: Appointment) {
        return await this.ApiService.put(this.API_URL + 'Appointments/UpdateAppointment', appointment).toPromise();
        //console.log(appointment);
        //return await this.http.put(`${this.API_URL}/Appointments/UpdateAppointment/`, appointment).toPromise();
    }

    async deleteAppointment(id) {
        return await this.ApiService.delete(this.ApiService + 'Appointments/DeleteAppointment/' + id).toPromise();
        //let x = await this.http.delete(this.API_URL + '/Appointments/DeleteAppointment/' + id).toPromise();
        //console.log(x);
        //return x
    }

    async getConsultantIdAndTentiveTime(id, date) {
        this.ConsultantIdAndTentiveTime = await this.ApiService.get(this.API_URL + 'Appointments/GetAppointmentByConsultantNameAndDate/' + id + '/' + date).toPromise();
        //this.ConsultantIdAndTentiveTime = await this.http.get(`${this.API_URL}/Appointments/GetAppointmentByConsultantNameAndDate/${id}/${date}`).toPromise()
        //console.log(this.ConsultantIdAndTentiveTime);
        return this.ConsultantIdAndTentiveTime;

    }

    async getConsultant() {
        this.consultant = await this.ApiService.get(this.API_URL + 'HimsSetup/GetConsultants').toPromise();
        //this.consultant = await this.http.get<Consultant>(this.API_URL + '/HimsSetup/GetConsultants').toPromise();
        //console.log(this.consultant);
        return this.consultant;

    }

    async addConsultant(consultant: Consultant) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddConsultant', consultant).toPromise();
        //let x = await this.http.post(this.API_URL + '/HimsSetup/AddConsultant', consultant).toPromise();
        //console.log(x);
        //return x;
    }

    async updateConsultant(consultant: Consultant) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateConsultant', consultant).toPromise();
        //let x = await this.http.put(`${this.API_URL}/HimsSetup/UpdateConsultant/`, consultant).toPromise();
        //console.log(x);
        //return x;
    }

    async deleteConsultant(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteConsultant/' + id).toPromise();
        //let x = await this.http.delete(this.API_URL + '/HimsSetup/DeleteConsultant/' + id).toPromise();
        //console.log(x);
        //return x;
    }

    async getTests() {
        this.testing = await this.ApiService.get(this.API_URL + 'HimsSetup/GetTests').toPromise();
        //this.testing = await this.http.get<himsSetupTest>(this.API_URL + '/HimsSetup/GetTests').toPromise();
        //console.log(this.testing);
        return this.testing;
    }

    async addTest(himssetuptest: himsSetupTest) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddTest', himssetuptest).toPromise();
        //let x = await this.http.post(this.API_URL + '/HimsSetup/AddTest/', himssetuptest).toPromise();
        //console.log(x);
        //return x;
    }


    async updateTest(himssetuptest: himsSetupTest) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateTest', himssetuptest).toPromise();
        //let x = await this.http.put(`${this.API_URL}/HimsSetup/UpdateTest/`, himssetuptest).toPromise();
        //console.log(x);
        //return x;
    }

    async deleteTest(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteTest/' + id).toPromise();
        //let x = await this.http.delete(this.API_URL + '/HimsSetup/DeleteTest/' + id).toPromise();
        //console.log(x);
        //return x;
    }

    async UpdateAppointmentTests(id, appointmentTest: AppointmentTest) {
        return await this.ApiService.post(this.API_URL + 'Appointments/UpdateAppointmentTests/' + id, appointmentTest).toPromise();
        //console.log(`${this.API_URL}/Appointments/UpdateAppointmentTests/${id}`);
        //let x = await this.http.post(`${this.API_URL}/Appointments/UpdateAppointmentTests/${id}`, appointmentTest).toPromise();
        // console.log(x);
        //return x;
    }



    async GetPatientVitals() {
        this.PatientVitals = await this.ApiService.get(this.API_URL + 'Appointments/GetPatientVitals').toPromise();
        //this.PatientVitals = await this.http.get<PatientVital>(this.API_URL + '/Appointments/GetPatientVitals').toPromise();
        //console.log(this.PatientVitals);
        return this.PatientVitals
    }


    async AddPatientVital(patientVital: PatientVital) {
        return await this.ApiService.post(this.API_URL + 'Appointments/AddPatientVitals', patientVital).toPromise();
        //let x = await this.http.post(this.API_URL + '/Appointments/AddPatientVitals', patientVital).toPromise();
        //console.log(x);
        //return x;
    }

    async UpdatePatientVital(patientVital: PatientVital) {
        return await this.ApiService.put(this.API_URL + 'Appointments/UpdatePatientVital', patientVital).toPromise();
        //let x = await this.http.put(`${this.API_URL}/Appointments/UpdatePatientVital/`, patientVital).toPromise();
        //console.log(x);
        //return x;
    }

    async DeletePatientVitals(id) {
        return await this.ApiService.delete(this.API_URL + 'Appointments/DeletePatientVital/' + id).toPromise();
        //let x = await this.http.delete(this.API_URL + '/Appointments/DeletePatientVital/' + id).toPromise();
        //console.log(x);
        //return x;
    }

    public async getPackage() {
        this.package = await this.ApiService.get(this.API_URL + 'HimsSetup/GetPackages').toPromise();
        //this.package = await this.http.get<Package>(this.API_URL + '/HimsSetup/GetPackages').toPromise();
        //console.log(this.package);
        return this.package;
    }

    async addPackage(packge: Package) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddPackage', packge).toPromise();
        //let x = await this.http.post(this.API_URL + '/HimsSetup/AddPackage', packge).toPromise();
        //console.log(x);
        //return x;
    }

    async updatePackage(packge: Package) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdatePackage', packge).toPromise();
        //let x = await this.http.put(this.API_URL + '/HimsSetup/UpdatePackage/', packge).toPromise();
        //console.log(x);
        //return x;
    }

    async daletePackage(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeletePackage/' + id).toPromise();
        //let x = await this.http.delete(this.API_URL + '/HimsSetup/DeletePackage/' + id).toPromise();
        //console.log(x);
        //return x;
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
