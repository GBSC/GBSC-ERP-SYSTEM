import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Patient } from '../../Models/HIMS/patient';
import { Reference } from '../../Models/HIMS/reference';
import { Spouse } from '../../Models/HIMS/spouse';
import { Appointment } from '../../Models/HIMS/appointment';
import { Consultant } from '../../Models/HIMS/consultant';
import { himsSetupTest } from '../../Models/HIMS/himsSetupTest';
import { AppointmentTest } from '../../Models/HIMS/appointmentTest';
import { Visits } from '../../Models/HIMS/visits';
import { VisitDiagnosis } from '../../Models/HIMS/visitdiagnoses';
import { VisitTest } from '../../Models/HIMS/visittest';
import { PatientVital } from '../../Models/HIMS/patientvitals';
import { Package } from '../../Models/HIMS/packages';
import { VisitNote } from '../../Models/HIMS/visitnote';
import { VisitNature } from '../../Models/HIMS/visitnature';
import { Diagnoses } from '../../Models/HIMS/diagnoses';


@Injectable()
export class PatientService {

    public patient;
    public currentPatient: any;
    public SearchPatientbyname: any;
    public patientData: any;
    public patientDocumentbyId: any;

    public consultant: any;
    public patients: any;
    public patientAllFormData: any = {};
    public tryImgSrc: any;
    public images: any = [];
    public patientID: any;


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

    public visits: any;
    public visitid: any;
    public getvisitbyid: any;
    public LastestPatientVital: any;
    public currentPatientvisits: any;
    public ActiveVisits: any;

    public visitNatures: any;
    //for visitnote
    public vistnote: any;

    //for diagnoses
    public diagnoses: any;


    private readonly API_URL = 'hims/api/';
    //private readonly API_URL = 'http://localhost:58788/api/';


    dialogData: any;

    constructor(private ApiService: ApiService) {
    }

    // getPatient() : Observable<Patient> {
    //     return this.ApiService.get(this.API_URL + 'patients/getpatients');
    //     //return this.patients;
    // }

    async getPatient() {
        this.patients = <Patient>(await this.ApiService.get(this.API_URL + 'patients/getpatients').toPromise());
        //this.patients = await this.http1.get<Patient>(this.API_URL + '/patients/getpatients').toPromise();
        //console.log(this.patients);
        return this.patients;
    }

    getPatientObservable(): Observable<Patient> {
        return this.ApiService.get(this.API_URL + 'patients/getpatients');
    }

    getPatientWithPartner(PatientId: number): Observable<Patient> {
        return this.ApiService.get(this.API_URL + 'patients/getpatientwithpartner/' + PatientId);
        //return this.http.get<Patient>(this.API_URL + '/patients/getpatientwithpartner/' + PatientId);
    }

    async addPatient(patient: Patient) {
        this.patientID = await this.ApiService.post(this.API_URL + 'patients/AddPatient', patient).toPromise();
        //this.patientID = await this.http1.post(this.API_URL + '/patients/AddPatient', patient).toPromise();
        console.log(this.patientID);
        console.log(this.patientID.patientId);
        return this.patientID.patientId;
    }

    async addSpouse(Spouse: Spouse) {
        let x = await this.ApiService.post(this.API_URL + 'patients/AddPartner', Spouse).toPromise();
        console.log(x);
        return x;
    }

    async addPatientReference(Reference: Reference) {
        let x = await this.ApiService.post(this.API_URL + 'patients/AddPatientReference', Reference).toPromise();
        console.log(x);
        return x;
    }



    async getpatientForupdating(value) {
        this.patientData = await value
        //console.log(this.patientData)
        return this.patientData

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


    async updatePatient(patient: Patient) {
        return await this.ApiService.put(this.API_URL + 'patients/UpdatePatient', patient).toPromise();
        //console.log(patient)
        //let x = await this.http1.put(`${this.API_URL}/patients/UpdatePatient/`, patient).toPromise();
        //return x;
    }


    async deletePatient(id) {
        return await this.ApiService.delete(this.API_URL + 'patients/DeletePatient/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/patients/DeletePatient/' + id).toPromise();
        //console.log(x);
        //return x;
    }

    addDocument(f: FormData, id): Observable<any> {

        return this.ApiService.post(this.API_URL + 'patients/AddPatientDocument/' + id, f);
    }

    addDocuments(models: FormData, id) {

        this.ApiService.post(this.API_URL + '/patients/AddPatientDocuments/' + id, models).subscribe(res => {
            console.log(res);
        });

        //return x;
    }

    getPatientDocumentByPatientId(id) {
        return this.ApiService.get(this.API_URL + 'patients/GetPatientDocumentsByPatientId/' + id);
        //console.log(this.API_URL1 + '/patients/GetPatientDocumentsByPatientId/' + id)
        //return this.http1.get<Document>(this.API_URL + '/patients/GetPatientDocumentsByPatientId/' + id);

    }

    async deleteDocument(id) {
        return await this.ApiService.delete(this.API_URL + 'patients/DeletePatientDocument/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/patients/DeletePatientDocument/' + id).toPromise();
        //console.log(`this.API_URL+'/patients/DeletePatientDocument/'+id`)
        //console.log(x);
        //return x;
    }

    async updatePatientRef(Reference: Reference) {
        return await this.ApiService.put(this.API_URL + 'patients/UpdatePatientReference', Reference).toPromise();
        //let x = await this.http1.put(this.API_URL + '/patients/UpdatePatientReference/', Reference).toPromise();
        //console.log(x);
        //return x;
    }

    async addPatientRef(Reference: Reference) {
        return await this.ApiService.post(this.API_URL + 'patients/AddPatientReference', Reference).toPromise();
        //let x = await this.http1.post(this.API_URL + '/patients/AddPatientReference/', Reference).toPromise();
        //console.log(x);
        //return x;
    }

    async updatePatientSpouse(Spouse: Spouse) {
        return await this.ApiService.put(this.API_URL + 'patients/UpdatePartner', Spouse).toPromise();
        //let x = await this.http1.put(this.API_URL + '/patients/UpdatePartner/', Spouse).toPromise();
        //console.log(x);
        //return x;
    }

    async addPatientSpouse(Spouse: Spouse) {
        return await this.ApiService.post(this.API_URL + 'patients/AddPartner', Spouse).toPromise();
        //let x = await this.http1.post(this.API_URL + '/patients/AddPartner/', Spouse).toPromise();
        //console.log(x);
        //return x;
    }

    setCurrentPatient(patient) {
        //console.log(patient);
        this.currentPatient = patient;
    }


    async getappointments() {
        this.appointment = await this.ApiService.get(this.API_URL + 'Appointments/getappointments').toPromise();
        //this.appointment = await this.http1.get<Appointment>(this.API_URL + '/Appointments/getappointments').toPromise();
        //console.log(this.appointment);
        return this.appointment;
    }

    async getAppointmentById(id) {
        this.getApptbyId = await this.ApiService.get(this.API_URL + 'Appointments/GetAppointment/' + id).toPromise();
        //console.log(id);
        //this.getApptbyId = await this.http1.get<Appointment>(this.API_URL + '/Appointments/GetAppointment/' + id).toPromise();
        //console.log( this.getApptbyId);
        // console.log(this.API_URL+'/Appointments/GetAppointment/'+id);
        return this.getApptbyId;
    }


    async addAppointment(appointment: Appointment) {
        return await this.ApiService.post(this.API_URL + 'Appointments/addappointment', appointment).toPromise();
        //let x = await this.http1.post(this.API_URL + '/Appointments/addappointment/', appointment).toPromise();
        //console.log(x);
        //return x;
    }

    async updateAppointment(appointment: Appointment) {
        return await this.ApiService.put(this.API_URL + 'Appointments/UpdateAppointment', appointment).toPromise();
        //console.log(appointment);
        //return await this.http1.put(`${this.API_URL}/Appointments/UpdateAppointment/`, appointment).toPromise();
    }

    async deleteAppointment(id) {
        return await this.ApiService.delete(this.API_URL + 'Appointments/DeleteAppointment/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/Appointments/DeleteAppointment/' + id).toPromise();
        //console.log(x);
        //return x
    }

    async getConsultantIdAndTentiveTime(id, date) {
        this.ConsultantIdAndTentiveTime = await this.ApiService.get(this.API_URL + 'Appointments/GetAppointmentByConsultantNameAndDate/' + id + '/' + date).toPromise();
        //this.ConsultantIdAndTentiveTime = await this.http1.get(`${this.API_URL}/Appointments/GetAppointmentByConsultantNameAndDate/${id}/${date}`).toPromise()
        //console.log(this.ConsultantIdAndTentiveTime);
        return this.ConsultantIdAndTentiveTime;

    }

    async getConsultant() {
        this.consultant = await this.ApiService.get(this.API_URL + 'HimsSetup/GetConsultants').toPromise();
        //this.consultant = await this.http1.get<Consultant>(this.API_URL + '/HimsSetup/GetConsultants').toPromise();
        //console.log(this.consultant);
        return this.consultant;

    }

    async addConsultant(consultant: Consultant) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddConsultant', consultant).toPromise();
        //let x = await this.http1.post(this.API_URL + '/HimsSetup/AddConsultant', consultant).toPromise();
        //console.log(x);
        //return x;
    }

    async updateConsultant(consultant: Consultant) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateConsultant', consultant).toPromise();
        //let x = await this.http1.put(`${this.API_URL}/HimsSetup/UpdateConsultant/`, consultant).toPromise();
        //console.log(x);
        //return x;
    }

    async deleteConsultant(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteConsultant/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/HimsSetup/DeleteConsultant/' + id).toPromise();
        //console.log(x);
        //return x;
    }

    async getTests() {
        this.testing = await this.ApiService.get(this.API_URL + 'HimsSetup/GetTests').toPromise();
        //this.testing = await this.http1.get<himsSetupTest>(this.API_URL + '/HimsSetup/GetTests').toPromise();
        //console.log(this.testing);
        return this.testing;
    }

    async addTest(himssetuptest: himsSetupTest) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddTest', himssetuptest).toPromise();
        //let x = await this.http1.post(this.API_URL + '/HimsSetup/AddTest/', himssetuptest).toPromise();
        //console.log(x);
        //return x;
    }


    async updateTest(himssetuptest: himsSetupTest) {
        return await this.ApiService.put(this.ApiService + 'HimsSetup/UpdateTest', himssetuptest).toPromise();
        //let x = await this.http1.put(`${this.API_URL}/HimsSetup/UpdateTest/`, himssetuptest).toPromise();
        //console.log(x);
        //return x;
    }

    async deleteTest(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteTest/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/HimsSetup/DeleteTest/' + id).toPromise();
        //console.log(x);
        //return x;
    }

    async UpdateAppointmentTests(id, appointmentTest: AppointmentTest) {
        //console.log(`${this.API_URL}/Appointments/UpdateAppointmentTests/${id}`);
        return await this.ApiService.post(this.API_URL + 'Appointments/UpdateAppointmentTests/' + id, appointmentTest).toPromise();
        //let x = await this.http1.post(`${this.API_URL}/Appointments/UpdateAppointmentTests/${id}`, appointmentTest).toPromise();
        // console.log(x);
        //return x;
    }


    async GetVisits() {
        this.visits = await this.ApiService.get(this.API_URL + 'Visits/GetVisits').toPromise();
        //this.visits = await this.http1.get<Visits>(this.API_URL + '/Visits/GetVisits/').toPromise();
        //console.log(this.visits);
        return this.visits;
    }

    Getvisit(id): Observable<Visits> {
        return this.ApiService.get(this.API_URL + 'Visits/GetVisit/' + id);
        //return this.http1.get<Visits>(this.API_URL + '/Visits/GetVisit/' + id);
    }

    async getActiveVisits() {
        this.ActiveVisits = <Visits>(await this.ApiService.get(this.API_URL + '/Visits/GetActiveVisits').toPromise());
        console.log(this.ActiveVisits);
        return this.ActiveVisits;
    }

    async getActiveVisitsTesting() {
        this.ActiveVisits = await this.ApiService.get(this.API_URL + '/Visits/GetActiveVisits').toPromise();
        console.log(this.ActiveVisits);
        return this.ActiveVisits;
    }

    GetAppointmentByVisit(id): Observable<Appointment> {
        return this.ApiService.get(this.API_URL + 'appointments/GetAppointmentByVisit/' + id);
        //return this.http1.get<Appointment>(this.API_URL + '/appointments/GetAppointmentByVisit/' + id);
    }


    async getVisitId(id) {
        this.getvisitbyid = await this.ApiService.get(this.API_URL + 'Visits/GetVisit/' + id).toPromise();
        //this.getvisitbyid = await this.http1.get<Visits>(this.API_URL + '/Visits/GetVisit/' + id).toPromise();
        //console.log(this.getvisitbyid);
        return this.getvisitbyid;
    }

    async AddVisits(id) {
        this.visitid = await this.ApiService.post(this.API_URL + 'Visits/AddVisit', { patientId: id }).toPromise();
        //this.visitid = await this.http1.post(this.API_URL + '/Visits/AddVisit/', { patientId: id }).toPromise()
        //console.log(this.visitid);
        return this.visitid;
    }

    async UpdateVisits(visits: Visits) {
        return await this.ApiService.put(this.API_URL + 'Visits/UpdateVisit', visits).toPromise();
        //let x = await this.http1.put(`${this.API_URL}/Visits/UpdateVisit/`, visits).toPromise();
        //console.log(x);
        //return x;
    }

    async DeleteVisits(id) {
        return await this.ApiService.delete(this.API_URL + 'Visits/DeleteVisit/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/Visits/DeleteVisit/' + id).toPromise();
        //console.log(x);
        //return x;
    }


    async endVisit(id, visits: Visits) {
        return await this.ApiService.put(this.API_URL + 'Visits/EndVisit/' + id, visits).toPromise();
        //let x = await this.http1.put(this.API_URL + '/Visits/EndVisit/' + id, visits).toPromise()
        //console.log(x);
        //return x;
    }

    async addvisitDiagnosis(visitDiagnosis: VisitDiagnosis) {
        return await this.ApiService.post(this.API_URL + 'visits/AddVisitDiagnoses', visitDiagnosis).toPromise();
        //let x = await this.http1.post(this.API_URL + '/visits/AddVisitDiagnoses/', visitDiagnosis).toPromise();
        //console.log(x);
        //return x;
    }

    async addvisitTest(visitTest: VisitTest) {
        return await this.ApiService.post(this.API_URL + 'visits/AddVisitTests', visitTest).toPromise();
        //let x = await this.http1.post(this.API_URL + '/visits/AddVisitTests/', visitTest).toPromise();
        //console.log(x);
        //return x;
    }


    async GetPatientVitals() {
        this.PatientVitals = await this.ApiService.get(this.API_URL + 'Visits/GetPatientVitals').toPromise();
        //this.PatientVitals = await this.http1.get<PatientVital>(this.API_URL + '/Visits/GetPatientVitals').toPromise();
        //console.log(this.PatientVitals);
        return this.PatientVitals
    }

    GetLastestPatientVital(id): Observable<PatientVital> {
        return this.ApiService.get(this.API_URL + 'patients/GetLastPatientVital/' + id);
        // `${this.API_URL}/patients/GetLastPatientVital/${this.currentPatient.patientId}`
        //return this.http1.get<PatientVital>(this.API_URL + '/patients/GetLastPatientVital/' + id);
    }

    GetPatientLastestDiagnosis(id): Observable<VisitDiagnosis> {
        return this.ApiService.get(this.API_URL + 'patients/GetPatientLastestDiagnosis/' + id);
        //return this.http1.get<VisitDiagnosis>(this.API_URL + '/patients/GetPatientLastestDiagnosis/' + id);
    }

    getpatientLatestTest(id): Observable<VisitTest> {
        return this.ApiService.get(this.API_URL + 'patients/GetPatientLastestTest/' + id);
        //return this.http1.get<VisitTest>(this.API_URL + '/patients/GetPatientLastestTest/' + id);
    }

    getpatient(id): Observable<Patient> {
        return this.ApiService.get(this.API_URL + 'Patients/GetPatient/' + id);
        //return this.http1.get<Patient>(this.API_URL + '/Patients/GetPatient/' + id);
    }

    GetPatientVisits(id): Observable<Visits> {
        return this.ApiService.get(this.API_URL + 'Patients/GetPatientVisits/' + id);
        //return this.http1.get<Visits>(this.API_URL + '/Patients/GetPatientVisits/' + id);
    }


    // async GetPatientVisits()
    // {
    //     this.currentPatientvisits = await this.http1.get<Visits>(`${this.API_URL}/patients/GetPatientVisits/${this.currentPatient.patientId}`).toPromise();
    //     console.log(this.currentPatientvisits);
    //     return this.currentPatientvisits;

    // }

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


    async AddPatientVital(patientVital: PatientVital) {
        return await this.ApiService.post(this.API_URL + 'Visits/AddPatientVitals', patientVital).toPromise();
        //let x = await this.http1.post(this.API_URL + '/Visits/AddPatientVitals/', patientVital).toPromise();
        //console.log(x);
        //return x;
    }

    async UpdatePatientVital(patientVital: PatientVital) {
        return await this.ApiService.put(this.API_URL + 'Visits/UpdatePatientVital', patientVital).toPromise();
        //let x = await this.http1.put(`${this.API_URL}/Visits/UpdatePatientVital/`, patientVital).toPromise();
        //console.log(x);
        //return x;
    }

    async DeletePatientVitals(id) {
        return await this.ApiService.delete(this.API_URL + 'Visits/DeletePatientVital/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/Visits/DeletePatientVital/' + id).toPromise();
        //console.log(x);
        //return x;
    }

    async getVisitNote() {
        this.vistnote = await this.ApiService.get(this.API_URL + 'Visits/GetVisitNotes').toPromise();
        //this.vistnote = await this.http1.get<VisitNote>(this.API_URL + '/Visits/GetVisitNotes/').toPromise();
        //console.log(this.vistnote);
        return this.vistnote;
    }

    async GetLastestVisitByPatientId(id)  {
        return await this.ApiService.get(this.API_URL + 'Visits/GetLastestVisitByPatientId/' + id).toPromise();
    }


    async addVisitNote(VisitNote: VisitNote) {
        return await this.ApiService.post(this.API_URL + 'Visits/AddVisitNote', VisitNote).toPromise();
        //let x = this.http1.post(this.API_URL + '/Visits/AddVisitNote/', VisitNote).toPromise();
        //console.log(x);
        //return x;
    }

    async updateVisitNote(VisitNote: VisitNote) {
        return await this.ApiService.put(this.API_URL + 'Visits/UpdateVisitNote', VisitNote).toPromise();
        //let x = this.http1.put(this.API_URL + '/Visits/UpdateVisitNote/', VisitNote).toPromise();
        //console.log(x);
        //return x;
    }

    async deleteVisitNote(id) {
        return await this.ApiService.delete(this.API_URL + 'Visits/DeleteVisit/' + id).toPromise();
        //let x = this.http1.delete(this.API_URL + '/Visits/DeleteVisit/' + id).toPromise();
        //console.log(x);
        //return x;
    }

    async GetVisitNatures() {
        this.visitNatures = await this.ApiService.get(this.API_URL + 'HimsSetup/GetVisitNatures').toPromise();
        //this.visitNatures = await this.http1.get<VisitNature>(this.API_URL + '/HimsSetup/GetVisitNatures/').toPromise();
        //console.log(this.visitNatures);
        return this.visitNatures
    }


    async AddVisitNature(visitNature: VisitNature) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddVisitNature', visitNature).toPromise();
        //let x = await this.http1.post(this.API_URL + '/HimsSetup/AddVisitNature/', visitNature).toPromise();
        //console.log(x);
        //return x;
    }

    async UpdateVisitNature(visitNature: VisitNature) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateVisitNature', visitNature).toPromise();
        //let x = await this.http1.put(`${this.API_URL}/HimsSetup/UpdateVisitNature/`, visitNature).toPromise();
        //console.log(x);
        //return x;
    }

    async DeleteVisitNature(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteVisitNature/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/HimsSetup/DeleteVisitNature/' + id).toPromise();
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
    async SearchPatient(patient: Patient) {
        this.SearchPatientbyname = await this.ApiService.post(this.API_URL + 'patients/SearchPatient', patient).toPromise();
        //this.SearchPatientbyname = await this.http1.post(this.API_URL + '/patients/SearchPatient/', patient).toPromise();
        //console.log(this.SearchPatientbyname);
        //return this.SearchPatientbyname;
    }

    async getDiagnoses() {
        this.diagnoses = await this.ApiService.get(this.API_URL + 'HimsSetup/GetDiagnoses').toPromise();
        //this.diagnoses = await this.http1.get<Diagnoses>(this.API_URL + '/HimsSetup/GetDiagnoses/').toPromise();
        //console.log(this.diagnoses);
        //return this.diagnoses;
    }

    async addDiagnoses(diagnoses: Diagnoses) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddDiagnosis', diagnoses).toPromise();
        //let x = await this.http1.post(this.API_URL + '/HimsSetup/AddDiagnosis/', diagnoses).toPromise();
        //console.log(x);
        //return x;
    }

    async updateDiagnoses(diagnoses: Diagnoses) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateDiagnosis', diagnoses).toPromise();
        //let x = await this.http1.put(this.API_URL + '/HimsSetup/UpdateDiagnosis/', diagnoses).toPromise();
        //console.log(x);
        //return x;
    }

    async deleteDiagnoses(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteDiagnosis/' + id).toPromise();
        //let x = await this.http1.delete(this.API_URL + '/HimsSetup/DeleteDiagnosis/' + id).toPromise();
        //console.log(x);
        //return x;
    }
}