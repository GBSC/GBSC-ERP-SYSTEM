import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../../../models/patient';
import { Document } from '../../../models/document';
import { Appointment } from '../../../models/appointment';
import { Consultant } from '../../../models/consultant';
import { himsSetupTest } from '../../../models/himsSetupTest';
import { AppointmentTest } from '../../../models/appointmentTest';
import { Visits } from '../../../models/visits'
import { PatientVital } from '../../../models/patientvitals';
import { VisitNature } from '../../../models/VisitNature';
import { VisitNote } from '../../../models/visitnote';
import {Diagnoses} from  '../../../models/diagnoses'
import {VisitDiagnosis} from '../../../models/visitdiagnoses';
import {VisitTest} from  '../../../models/visittest'

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reference } from '../../../models/reference';
import { Spouse } from '../../../models/spouse';

import { Package } from '../../../models/packages';


@Injectable()
export class PatientService {

    public patient;
    public currentPatient: any;
    public SearchPatientbyname : any;
    public patientData : any ;
    public patientDocumentbyId : any;

    public consultant: any;
    public patients: any;
    public patientAllFormData: any = {};
    public tryImgSrc: any;
    public images: any = [];
    public patientID : any;


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

    //for profile 

    public package: any;
    //for Visits control

    public visits : any;
    public visitid : any;
    public getvisitbyid : any;
    public LastestPatientVital : any;
    public currentPatientvisits : any;

    public visitNatures : any;
    //for visitnote
    public vistnote : any;

    //for diagnoses
    public diagnoses : any;


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
        this.patientID = await this.http1.post(this.API_URL + '/patients/AddPatient', patient).toPromise();
        console.log(this.patientID)
        return  this.patientID ;
         
    }

    async getpatientForupdating(value){
        this.patientData =  await value
        console.log(this.patientData)
        return  this.patientData 
        
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
      let x = await this.http1.put(`${this.API_URL}/patients/UpdatePatient/`,patient).toPromise();
      return x;
    }


    async deletePatient(id) {
        let x = await this.http1.delete(this.API_URL + '/patients/DeletePatient/' + id).toPromise();
        console.log(x);
        return x;
    }

     addDocument(f : FormData, id){
 
        this.http1.post(this.API_URL+'/patients/AddPatientDocument/'+id, f).subscribe( res => {
            console.log(res);
        });
        
        //return x;
    }

    getPatientDocumentByPatientId(id): Observable<Document>{
        console.log(this.API_URL1+'/patients/GetPatientDocumentsByPatientId/'+id)
        return  this.http1.get<Document>(this.API_URL+'/patients/GetPatientDocumentsByPatientId/'+id);

    }

    async deleteDocument(id){
        let x = await this.http1.delete(this.API_URL+'/patients/DeletePatientDocument/'+id).toPromise();
        console.log(`this.API_URL+'/patients/DeletePatientDocument/'+id`)
        console.log(x);
        return x;
    }

    async updatePatientRef(Reference :Reference)
    {
      let x =  await this.http1.put(this.API_URL+'/patients/UpdatePatientReference/',Reference).toPromise();
      console.log(x);
      return x;
    }

    async addPatientRef(Reference :Reference)
    {
      let x =  await this.http1.post(this.API_URL+'/patients/AddPatientReference/',Reference).toPromise();
      console.log(x);
      return x;
    }

    async updatePatientSpouse(Spouse : Spouse){
        let x =  await this.http1.put(this.API_URL+'/patients/UpdatePartner/',Spouse).toPromise();
        console.log(x);
        return x;
    }

    async addPatientSpouse(Spouse : Spouse){
        let x =  await this.http1.post(this.API_URL+'/patients/AddPartner/',Spouse).toPromise();
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

       Getvisit (id) : Observable<Visits>{
          return this.http1.get<Visits>(this.API_URL+'/Visits/GetVisit/'+id);       
        }

        GetAppointmentByVisit (id) : Observable<Appointment>
          {
              return this.http1.get<Appointment>(this.API_URL+'/appointments/GetAppointmentByVisit/'+id);       
         }


   async getVisitId(id){
        this.getvisitbyid = await this.http1.get<Visits>(this.API_URL+'/Visits/GetVisit/'+id).toPromise();
        console.log(this.getvisitbyid);
        return this.getvisitbyid;
    }
    
    async AddVisits(id)
    {
        this.visitid = await this.http1.post(this.API_URL+'/Visits/AddVisit/', {patientId: id}).toPromise()
        console.log(this. visitid);        
        return this. visitid;        
    }
    
    async UpdateVisits(visits : Visits)
    {
        let x = await this.http1.put(`${this.API_URL}/Visits/UpdateVisit/`,visits).toPromise();
        console.log(x);
        return x;

    }
    
    async DeleteVisits(id)
    {
        let x = await this.http1.delete(this.API_URL+'/Visits/DeleteVisit/'+id).toPromise();
        console.log(x);
        return x;

    }
    

    async endVisit(id, visits : Visits ){

        let x = await this.http1.put(this.API_URL+'/Visits/EndVisit/'+id, visits).toPromise()
        console.log(x);
        return x;
    }

    async addvisitDiagnosis(visitDiagnosis : VisitDiagnosis){
        let x = await this.http1.post(this.API_URL+'/visits/AddVisitDiagnoses/',visitDiagnosis).toPromise();
        console.log(x);
        return x;
    }

    async addvisitTest(visitTest : VisitTest){
        let x = await this.http1.post(this.API_URL+'/visits/AddVisitTests/',visitTest).toPromise();
        console.log(x);
        return x;
    }
    
    
    async GetPatientVitals() {
        this.PatientVitals = await this.http1.get<PatientVital>(this.API_URL + '/Visits/GetPatientVitals').toPromise();
        console.log(this.PatientVitals);
        return this.PatientVitals
    }
    
    GetLastestPatientVital(id) : Observable<PatientVital>{
        // `${this.API_URL}/patients/GetLastPatientVital/${this.currentPatient.patientId}`
        return  this.http1.get<PatientVital>(this.API_URL+'/patients/GetLastPatientVital/'+id);
    }

    GetPatientLastestDiagnosis(id):  Observable<VisitDiagnosis>{
        return  this.http1.get<VisitDiagnosis>(this.API_URL+'/patients/GetPatientLastestDiagnosis/'+id);
    }

    getpatientLatestTest(id): Observable <VisitTest>{
        return this.http1.get<VisitTest>(this.API_URL+'/patients/GetPatientLastestTest/'+id);
    }

    getpatient (id) : Observable<Patient>
    {
        return this.http1.get<Patient>(this.API_URL+'/Patients/GetPatient/'+id);       
    }

     GetPatientVisits(id): Observable<Visits> {
        return this.http1.get<Visits>(this.API_URL+'/Patients/GetPatientVisits/'+id);       
    }
 
    
    // async GetPatientVisits()
    // {
    //     this.currentPatientvisits = await this.http1.get<Visits>(`${this.API_URL}/patients/GetPatientVisits/${this.currentPatient.patientId}`).toPromise();
    //     console.log(this.currentPatientvisits);
    //     return this.currentPatientvisits;
        
    // }


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

    async getVisitNote(){
        this.vistnote = await this.http1.get<VisitNote>(this.API_URL+'/Visits/GetVisitNotes/').toPromise();
        console.log(this.vistnote);
        return this.vistnote;
    }

    async addVisitNote(VisitNote : VisitNote){
        let x  = this.http1.post(this.API_URL+'/Visits/AddVisitNote/',VisitNote).toPromise();
        console.log(x);
        return x;
    }

    async updateVisitNote(VisitNote : VisitNote){
        let x = this.http1.put(this.API_URL+'/Visits/UpdateVisitNote/',VisitNote).toPromise();
        console.log(x);
        return x;
    }

    async deleteVisitNote(id){

    let  x = this.http1.delete(this.API_URL+'/Visits/DeleteVisit/'+id).toPromise();
    console.log(x);
    return x;
    }

    async GetVisitNatures() {
        this.visitNatures = await this.http1.get<VisitNature>(this.API_URL + '/HimsSetup/GetVisitNatures/').toPromise();
        console.log(this.visitNatures);
        return this.visitNatures
    }


    async AddVisitNature(visitNature: VisitNature) {
        let x = await this.http1.post(this.API_URL + '/HimsSetup/AddVisitNature/', visitNature).toPromise();
        console.log(x);
        return x;
    }

    async UpdateVisitNature(visitNature: VisitNature) {
        let x = await this.http1.put(`${this.API_URL}/HimsSetup/UpdateVisitNature/`, visitNature).toPromise();
        console.log(x);
        return x;
    }

    async DeleteVisitNature(id) {
        let x = await this.http1.delete(this.API_URL + '/HimsSetup/DeleteVisitNature/' + id).toPromise();
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
   async SearchPatient(patient: Patient){
        this.SearchPatientbyname = await this.http1.post(this.API_URL+'/patients/SearchPatient/',patient).toPromise();
        console.log( this.SearchPatientbyname);
        return this.SearchPatientbyname;
    }

    async getDiagnoses() {
        this.diagnoses = await this.http1.get<Diagnoses>(this.API_URL+'/HimsSetup/GetDiagnoses/').toPromise();
        console.log(this.diagnoses);
        return this.diagnoses;
    }

    async addDiagnoses(diagnoses : Diagnoses){
        let x = await this.http1.post(this.API_URL+'/HimsSetup/AddDiagnosis/',diagnoses).toPromise();
        console.log(x);
        return x;
    }

    async updateDiagnoses(diagnoses : Diagnoses){
        let x = await this.http1.put(this.API_URL+'/HimsSetup/UpdateDiagnosis/',diagnoses).toPromise();
        console.log(x);
        return x;
    }

    async deleteDiagnoses(id){
        let x = await this.http1.delete(this.API_URL+'/HimsSetup/DeleteDiagnosis/'+id).toPromise();
        console.log(x);
        return x;
    }
}