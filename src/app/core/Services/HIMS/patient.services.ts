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
import { TestType } from '../../Models/HIMS/TestType';
import { TestCategory } from '../../Models/HIMS/TestCategory';
import { PatientInvoice } from '../../Models/HIMS/patientinvoice';
import { PatientInvoiceItem } from '../../Models/HIMS/patientinvoiceitem';

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

    dialogData: any;

    constructor(private http1: HttpClient,private ApiService: ApiService) {
    }

    async getPatient() {
        this.patients = <Patient>(await this.ApiService.get(this.API_URL + 'patients/getpatients').toPromise());
        return this.patients;
    }

    getPatientObservable(): Observable<Patient> {
        return this.ApiService.get(this.API_URL + 'patients/getpatients');
    }

    getPatientWithPartner(PatientId: number): Observable<Patient> {
        return this.ApiService.get(this.API_URL + 'patients/getpatientwithpartner/' + PatientId);
    }

    async addPatient(patient: Patient) {
        this.patientID = await this.ApiService.post(this.API_URL + 'patients/AddPatient', patient).toPromise();
        return this.patientID.patientId;
    }

    async addSpouse(Spouse: Spouse) {
        let x = await this.ApiService.post(this.API_URL + 'patients/AddPartner', Spouse).toPromise();
        return x;
    }

    async addPatientReference(Reference: Reference) {
        let x = await this.ApiService.post(this.API_URL + 'patients/AddPatientReference', Reference).toPromise();
        return x;
    }



    async getpatientForupdating(value) {
        this.patientData = await value
        return this.patientData

    }

  async  GetPatientById(id) {
    return await this.ApiService.get(this.API_URL+'patients/GetPatient/'+id).toPromise();
    }

    async updatePatient(patient: Patient) {
        return await this.ApiService.put(this.API_URL + 'patients/UpdatePatient', patient).toPromise();
    }


    async deletePatient(id) {
        return await this.ApiService.delete(this.API_URL + 'patients/DeletePatient/' + id).toPromise();
    }

    addDocument(f: FormData, id): Observable<any> {

        return this.ApiService.post(this.API_URL + 'patients/AddPatientDocument/' + id, f);
    }

    addDocuments(models: FormData, id) {

        this.ApiService.post(this.API_URL + '/patients/AddPatientDocuments/' + id, models).subscribe(res => {
        //    console.log(res);
        });
    }

    getPatientDocumentByPatientId(id) {
        return this.ApiService.get(this.API_URL + 'patients/GetPatientDocumentsByPatientId/' + id);
    }

    async deleteDocument(id) {
        return await this.ApiService.delete(this.API_URL + 'patients/DeletePatientDocument/' + id).toPromise();
    }

    async updatePatientRef(Reference: Reference) {
        return await this.ApiService.put(this.API_URL + 'patients/UpdatePatientReference', Reference).toPromise();
    }

    async addPatientRef(Reference: Reference) {
        return await this.ApiService.post(this.API_URL + 'patients/AddPatientReference', Reference).toPromise();
    }

    async updatePatientSpouse(Spouse: Spouse) {
        return await this.ApiService.put(this.API_URL + 'patients/UpdatePartner', Spouse).toPromise();
    }

    async addPatientSpouse(Spouse: Spouse) {
        return await this.ApiService.post(this.API_URL + 'patients/AddPartner', Spouse).toPromise();
    }

    setCurrentPatient(patient) {
        this.currentPatient = patient;
    }


    async getappointments() {
        this.appointment = await this.ApiService.get(this.API_URL + 'Appointments/getappointments').toPromise();
        return this.appointment;
    }

    async getAppointmentById(id) {
        this.getApptbyId = await this.ApiService.get(this.API_URL + 'Appointments/GetAppointment/' + id).toPromise();
        return this.getApptbyId;
    }

    GetAppointmentById(id : number) : Observable<Appointment> {
        return this.ApiService.get(this.API_URL + 'Appointments/GetAppointment/' + id);
    }

    GetAppointmentDetails(id : number) : Observable<Appointment> {
        return this.ApiService.get(this.API_URL + 'Appointments/GetAppointmentDetails/' + id);
    }

    GetAppointmentsByDateAndPatientID(date : Date, PatientId : number) : Observable<Appointment[]> {
        return this.ApiService.get(this.API_URL + 'Appointments/GetAppointmentsByDateAndPatientID/' + date + '/' + PatientId);
    }

    GetFinalizedAppointmentsByDateAndPatientID(date : Date, PatientId : number) : Observable<Appointment[]> {
        return this.ApiService.get(this.API_URL + 'Appointments/GetFinalizedAppointmentsByDateAndPatientID/' + date + '/' + PatientId);
    }

    async GetAppointmentByDate(date){
         return  await this.ApiService.get(this.API_URL + 'Appointments/GetAppointment/' + date).toPromise();
    }


    async addAppointment(appointment: any) {
        return await this.ApiService.post(this.API_URL + 'Appointments/addappointment', appointment).toPromise();
    }

    async updateAppointment(appointment: Appointment) {
        return await this.ApiService.put(this.API_URL + 'Appointments/UpdateAppointment', appointment).toPromise();
    }

    async updateAppointmentFromVisitDetail(appointment: Appointment){
        return await this.ApiService.put(this.API_URL + 'Appointments/UpdateAppointment', appointment).toPromise();
    }

    async deleteAppointment(id) {
        return await this.ApiService.delete(this.API_URL + 'Appointments/DeleteAppointment/' + id).toPromise();
    }

    async getConsultantIdAndTentiveTime(id, date) {
        this.ConsultantIdAndTentiveTime = await this.ApiService.get(this.API_URL + 'Appointments/GetAppointmentByConsultantNameAndDate/' + id + '/' + date).toPromise();
        return this.ConsultantIdAndTentiveTime;
    }

    private readonly API_URL2 = 'http://localhost:58788/api/';
     async GetAppointmentByConsultantNameAndDate(id, date) {
       return await this.http1.get(this.API_URL2 + 'Appointments/GetAppointmentByConsultantNameAndDate/' + id + '/' + date).toPromise();
    }

    public AppointmentByDate :any;
    async getAppointmentByDate(date) {
        return  await this.ApiService.get(this.API_URL + 'Appointments/GetAppointmentByDate/' + date).toPromise();
            
    }
    

    async getConsultant() {
        this.consultant = await this.ApiService.get(this.API_URL + 'HimsSetup/GetConsultants').toPromise();
        return this.consultant;
    }

    async addConsultant(consultant: Consultant) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddConsultant', consultant).toPromise();
    }

    async updateConsultant(consultant: Consultant) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateConsultant', consultant).toPromise();
    }

    async deleteConsultant(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteConsultant/' + id).toPromise();
    }

    async getTests() {
        this.testing = await this.ApiService.get(this.API_URL + 'HimsSetup/GetTests').toPromise();
        return this.testing;
    }

    async addTest(himssetuptest: himsSetupTest) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddTest', himssetuptest).toPromise();
    }


    async updateTest(himssetuptest: himsSetupTest) {
         return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateTest', himssetuptest).toPromise();
    }

    async deleteTest(id) {
        console.log(id);
         return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteTest/' + id).toPromise();
    }

    async UpdateAppointmentTests(id, appointmentTest: AppointmentTest) {
        return await this.ApiService.post(this.API_URL + 'Appointments/UpdateAppointmentTests/' + id, appointmentTest).toPromise();
    }


    async GetVisits() {
        this.visits = await this.ApiService.get(this.API_URL + 'Visits/GetVisits').toPromise();
        return this.visits;
    }

    Getvisit(id): Observable<Visits> {
        return this.ApiService.get(this.API_URL + 'Visits/GetVisit/' + id);
    }

    async getActiveVisits() {
        this.ActiveVisits = <Visits>(await this.ApiService.get(this.API_URL + '/Visits/GetActiveVisits').toPromise());
        return this.ActiveVisits;
    }

    async getActiveVisitsTesting() {
        this.ActiveVisits = await this.ApiService.get(this.API_URL + '/Visits/GetActiveVisits').toPromise();
        return this.ActiveVisits;
    }

    GetAppointmentByVisit(id): Observable<Appointment> {
        return this.ApiService.get(this.API_URL + 'appointments/GetAppointmentByVisit/' + id);
    }


    async getVisitId(id) {
        this.getvisitbyid = await this.ApiService.get(this.API_URL + 'Visits/GetVisit/' + id).toPromise();
        return this.getvisitbyid;
    }

    async AddVisits(id) {
        this.visitid = await this.ApiService.post(this.API_URL + 'Visits/AddVisit', { patientId: id }).toPromise();
          sessionStorage.setItem('visitId', JSON.stringify(this.visitid));
          this.visitid = JSON.parse(sessionStorage.getItem('visitId'));
        return this.visitid;
    }

    async UpdateVisits(visits: Visits) {
        return await this.ApiService.put(this.API_URL + 'Visits/UpdateVisit', visits).toPromise();
    }

    async DeleteVisits(id) {
        return await this.ApiService.delete(this.API_URL + 'Visits/DeleteVisit/' + id).toPromise();
    }


    async endVisit(id, visits: Visits) {
        return await this.ApiService.put(this.API_URL + 'Visits/EndVisit/' + id, visits).toPromise();
    }

    async addvisitDiagnosis(visitDiagnosis: VisitDiagnosis) {
        return await this.ApiService.post(this.API_URL + 'visits/AddVisitDiagnoses', visitDiagnosis).toPromise();
    }

    async addvisitTest(id ,visitTest: VisitTest) {
        return await this.ApiService.post(this.API_URL + 'visits/AddVisitTests/'+id ,visitTest).toPromise();
    }

    GetVisitTestsByVisitId(id : number) : Observable<VisitTest[]> {
        return this.ApiService.get(this.API_URL + 'visits/GetVisitTestsByVisitId/' + id);
    }

    async AddVisitTestsByVisitId(id : number, VisitTests : VisitTest[]) {
        return await this.ApiService.post(this.API_URL + 'visits/AddVisitTestsByVisitId/' + id, VisitTests).toPromise();
    }

    async AddVisitDiagnosesByVisitId(id : number,   visitDiagnosis: VisitDiagnosis[]) {
        return await this.ApiService.post(this.API_URL + 'visits/AddVisitDiagnosesByVisitId/' + id, visitDiagnosis).toPromise();
    }
 

    async GetPatientVitals() {
        this.PatientVitals = await this.ApiService.get(this.API_URL + 'Visits/GetPatientVitals').toPromise();
        return this.PatientVitals
    }

    GetLastestPatientVital(id): Observable<PatientVital> {
        return this.ApiService.get(this.API_URL + 'patients/GetLastPatientVital/' + id);
    }

    GetPatientLastestDiagnosis(id): Observable<VisitDiagnosis> {
        return this.ApiService.get(this.API_URL + 'patients/GetPatientLastestDiagnosis/' + id);
    }

    getpatientLatestTest(id): Observable<VisitTest> {
        return this.ApiService.get(this.API_URL + 'patients/GetPatientLatestTest/' + id);
    }

    getpatient(id): Observable<Patient> {
        return this.ApiService.get(this.API_URL + 'Patients/GetPatient/' + id);
    }

    GetPatientVisits(id): Observable<Visits> {
        return this.ApiService.get(this.API_URL + 'Patients/GetPatientVisits/' + id);
    }

    public async getPackage() {
        this.package = await this.ApiService.get(this.API_URL + 'HimsSetup/GetPackages').toPromise();
        return this.package;
    }

    async addPackage(packge: Package) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddPackage', packge).toPromise();
    }

    async updatePackage(packge: Package) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdatePackage', packge).toPromise();
    }

    async daletePackage(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeletePackage/' + id).toPromise();
    }


    async AddPatientVital(patientVital: PatientVital) {
        return await this.ApiService.post(this.API_URL + 'Visits/AddPatientVitals', patientVital).toPromise();
    }

    async UpdatePatientVital(patientVital: PatientVital) {
        return await this.ApiService.put(this.API_URL + 'Visits/UpdatePatientVital', patientVital).toPromise();
    }

    async DeletePatientVitals(id) {
        return await this.ApiService.delete(this.API_URL + 'Visits/DeletePatientVital/' + id).toPromise();
    }

    async getVisitNote() {
        this.vistnote = await this.ApiService.get(this.API_URL + 'Visits/GetVisitNotes').toPromise();
        return this.vistnote;
    }
    
    async GetLastestVisitByPatientId(id)  {
        return await this.ApiService.get(this.API_URL + 'Visits/GetLastestVisitByPatientId/' + id).toPromise();
    }

    async addVisitNote(VisitNote: VisitNote) {
        return await this.ApiService.post(this.API_URL + 'Visits/AddVisitNote', VisitNote).toPromise();
    }

    async updateVisitNote(VisitNote: VisitNote) {
        return await this.ApiService.put(this.API_URL + 'Visits/UpdateVisitNote', VisitNote).toPromise();
    }

    async deleteVisitNote(id) {
        return await this.ApiService.delete(this.API_URL + 'Visits/DeleteVisit/' + id).toPromise();
    }

    async GetVisitNatures() {
        this.visitNatures = await this.ApiService.get(this.API_URL + 'HimsSetup/GetVisitNatures').toPromise();
        return this.visitNatures
    }


    async AddVisitNature(visitNature: VisitNature) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddVisitNature', visitNature).toPromise();
    }

    async UpdateVisitNature(visitNature: VisitNature) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateVisitNature', visitNature).toPromise();
    }

    async DeleteVisitNature(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteVisitNature/' + id).toPromise();
    }

    async SearchPatient(patient: Patient) {
        this.SearchPatientbyname = await this.ApiService.post(this.API_URL + 'patients/SearchPatient', patient).toPromise();
    }

    SearchPatientByMrn(mrn) : Observable<Patient> {
      return  this.ApiService.get(this.API_URL + 'Patients/GetPatientbymrn/' + mrn);
    }

    async getDiagnoses() {
        this.diagnoses = await this.ApiService.get(this.API_URL + 'HimsSetup/GetDiagnoses').toPromise();
    }

    async addDiagnoses(diagnoses: Diagnoses) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddDiagnosis', diagnoses).toPromise();
    }

    async updateDiagnoses(diagnoses: Diagnoses) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateDiagnosis', diagnoses).toPromise();
    }

    async deleteDiagnoses(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteDiagnosis/' + id).toPromise();
    }


    async getReferenceAsync() {
        return await this.ApiService.get(this.API_URL+'Patients/GetPatientReferences').toPromise();
    }

    getReference() : Observable<Reference> {
        return this.ApiService.get(this.API_URL+'Patients/GetPatientReferences');
    }

    async addReferenceAsync(reference : Reference) {
        return await this.ApiService.post(this.API_URL + 'Patients/AddPatientReference', reference).toPromise();
    }

    addReference(reference : Reference) : Observable<any> {
        return this.ApiService.post(this.API_URL + 'Patients/AddPatientReference', reference);
    }

    async updateReferenceAsync(reference : Reference) {
        return await this.ApiService.put(this.API_URL + 'Patients/UpdatePatientReference', reference).toPromise();
    }

    updateReference(reference : Reference) : Observable<any> {
        return this.ApiService.put(this.API_URL + 'Patients/UpdatePatientReference', reference);
    }

    async deleteReferenceAsync(id) {
        return await this.ApiService.delete(this.API_URL + 'Patients/DeletePatientReference/' + id).toPromise();
    }

    deleteReference(id) : Observable<any> {
        return this.ApiService.delete(this.API_URL + 'Patients/DeletePatientReference/' + id);
    }

    //Test Type

    async getTestTypesAsync() {
        return await this.ApiService.get(this.API_URL+'HimsSetup/GetTestTypes').toPromise();
    }

    getTestTypes() : Observable<TestType[]> {
        return this.ApiService.get(this.API_URL+'HimsSetup/GetTestTypes');
    }

    async addTestTypeAsync(TestType : TestType) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddTestType', TestType).toPromise();
    }

    addTestType(TestType : TestType) : Observable<any> {
        return this.ApiService.post(this.API_URL + 'HimsSetup/AddTestType', TestType);
    }

    async updateTestTypeAsync(TestType : TestType) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateTestType', TestType).toPromise();
    }

    updateTestType(TestType : TestType) : Observable<any> {
        return this.ApiService.put(this.API_URL + 'HimsSetup/UpdateTestType', TestType);
    }

    async deleteTestTypeAsync(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteTestType/' + id).toPromise();
    }

    deleteTestType(id) : Observable<any> {
        return this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteTestType/' + id);
    }

    //Test Category

    async getTestCategoriesAsync() {
        return await this.ApiService.get(this.API_URL+'HimsSetup/GetTestCategories').toPromise();
    }

    getTestCategories() : Observable<TestCategory[]> {
        return this.ApiService.get(this.API_URL+'HimsSetup/GetTestCategories');
    }

    async addTestCategoryAsync(TestCategory : TestCategory) {
        return await this.ApiService.post(this.API_URL + 'HimsSetup/AddTestCategory', TestCategory).toPromise();
    }

    addTestCategory(TestCategory : TestCategory) : Observable<any> {
        return this.ApiService.post(this.API_URL + 'HimsSetup/AddTestCategory', TestCategory);
    }

    async updateTestCategoryAsync(TestCategory : TestCategory) {
        return await this.ApiService.put(this.API_URL + 'HimsSetup/UpdateTestCategory', TestCategory).toPromise();
    }

    updateTestCategory(TestCategory : TestCategory) : Observable<any> {
        return this.ApiService.put(this.API_URL + 'HimsSetup/UpdateTestCategory', TestCategory);
    }

    async deleteTestCategoryAsync(id) {
        return await this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteTestCategory/' + id).toPromise();
    }

    deleteTestCategory(id) : Observable<any> {
        return this.ApiService.delete(this.API_URL + 'HimsSetup/DeleteTestCategory/' + id);
    }

    GetPatientInvoices() : Observable<PatientInvoice[]> {
        return this.ApiService.get(this.API_URL + 'PatientInvoices/GetPatientInvoices');
    }

    GetPatientInvoice(id : number) : Observable<PatientInvoice> {
        return this.ApiService.get(this.API_URL + 'PatientInvoices/GetPatientInvoice/' + id);
    }

    AddPatientInvoice(PatientInvoice : PatientInvoice) : Observable<any> {
        return this.ApiService.post(this.API_URL + 'PatientInvoices/AddPatientInvoice', PatientInvoice);
    }

    UpdatePatientInvoice(PatientInvoice : PatientInvoice) : Observable<any> {
        return this.ApiService.put(this.API_URL + 'PatientInvoices/UpdatePatientInvoice', PatientInvoice);
    }

    DeletePatientInvoice(id : number) : Observable<any> {
        return this.ApiService.delete(this.API_URL + 'PatientInvoices/DeletePatientInvoice/' + id);
    }

    GetPatientInvoiceItems() : Observable<PatientInvoiceItem[]> {
        return this.ApiService.get(this.API_URL + 'PatientInvoices/GetPatientInvoiceItems');
    }

    AddPatientINvoiceItem(PatientInvoiceItem : PatientInvoiceItem) : Observable<any> {
        return this.ApiService.post(this.API_URL + 'PatientInvoices/AddPatientInvoiceItem', PatientInvoiceItem);
    }

    UpdatePatientInvoiceItem(PatientInvoiceItem : PatientInvoiceItem) : Observable<any> {
        return this.ApiService.put(this.API_URL + 'PatientInvoices/UpdatePatientInvoiceItem', PatientInvoiceItem);
    }

    DeletePatientInvoiceItem(id : number) : Observable<any> {
        return this.ApiService.delete(this.API_URL + 'PatientInvoices/DeletePatientInvoiceItem/' + id);
    }
}