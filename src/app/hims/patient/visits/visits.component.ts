import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 import {Location} from '@angular/common';
import { Patient } from '../../../core/Models/HIMS/patient';
import { Visits } from '../../../core/Models/HIMS/visits';




@Component({
    selector: 'app-visits',
    templateUrl: './visits.component.html',
    styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

    public VisitTests: any = [];
    public VisitDiagnoses: any = [];

    public PatientVisitNoteForm: FormGroup;
    public PatientAppointmentForm: FormGroup;

    public VisitDiagnosesForm : FormGroup;
    public VisitTestForm : FormGroup;

    public currentPatient: any;
    public consultant : any;
    public visitNatures : any;

    public diagnoses : any;
    public test : any;

    public visitid : any;
    public vist = '';
    id: number;
    vistid: number;
    Patient : Patient;
    Visits : Visits;

    constructor( private formBuilder: FormBuilder,private PatientServiceobj : PatientService , private router: Router,  private route : ActivatedRoute) { 

        this.PatientVisitNoteForm = this.formBuilder.group({
            'ClinicalNote' : ['',Validators.required],
            'VisitId' :['',Validators.required],
        });

        this.PatientAppointmentForm = this.formBuilder.group({
            'PatientType':['pervious',Validators.required],
            'ConsultantId': ['', Validators.required],
            'visitNatureId': ['', Validators.required],
            'PatientId': ['', Validators.required],
            'TentativeTime': ['', Validators.required],
            'VisitId' :['',Validators.required]
        });

        this.VisitDiagnosesForm = this.formBuilder.group({
        'DiagnosisId' : ['',Validators.required],
        'VisitId':['']
        });

        this.VisitTestForm = this.formBuilder.group({
        'TestId':['',Validators.required],
        'VisitId':['']
        });



    }

   async ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = +params['id'];
     
           this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe((Patient)=> {

            this.Patient = Patient;
            console.log(Patient.PatientId)
         });
           
         });
        
          console.log(this.id);

        this.vist = await this.PatientServiceobj.getVisitId(this.id);
          console.log(this.vist)
    
        this.vistid = await this.PatientServiceobj.visitid.visitID;

        await this.PatientServiceobj.getConsultant();
        this.consultant = this.PatientServiceobj.consultant;
        console.log(this.consultant);

        await this.PatientServiceobj.GetVisitNatures();
        this.visitNatures = this.PatientServiceobj.visitNatures;
        console.log(this.visitNatures);

        await this.PatientServiceobj.getTests()
        this.test = this.PatientServiceobj.testing;
        console.log(this.test)

        await this.PatientServiceobj.getDiagnoses();
        this.diagnoses = this.PatientServiceobj.diagnoses;
        console.log(this.diagnoses);
     }

    onSubmit()  {
        
        //console.log(this.PatientServiceobj.currentPatient);
       // console.log(this.id);
        this.router.navigate(['/hims/patient/patientvitals/'+this.vistid]);
        console.log(this.visitid);

    }

 async onEndVisit(){
        let x = await this.PatientServiceobj.getVisitId(this.vistid);
        await this.PatientServiceobj.endVisit(this.vistid , x);
        console.log(x)
        this.router.navigate(['/hims/patient/profile/'+this.id]);
        console.log(this.id);
    }
//add visitnote
    async onsubmit(value){
        let y = await this.PatientServiceobj.visitid.visitID;
        this.PatientVisitNoteForm.value.VisitId = y;
        let x=  await this.PatientServiceobj.addVisitNote(value);
        console.log(x)
    }

    async addappointment(value){
        this.PatientAppointmentForm.value.PatientId = this.id;
        this.PatientAppointmentForm.value.VisitId = this.vistid;
        let x = await this.PatientServiceobj.addAppointment(value);
        console.log(value);
        console.log(x)
        console.log(this.vistid);
    }

    async addvisitdiagnosis(value){
      console.log(value);
    }

    async addvisitTest(value){
        console.log(value)
    }

    addrangeForTest() {
        this.VisitTestForm.value.VisitId = this.vistid;

        let { value } = this.VisitTestForm;
        let test = this.test.find(t => t.testId === value.TestId);
        let doc = {
            TestId: value.TestId,
            TestName: test.testName,
            VisitId : value.VisitId
        }
            this.VisitTests.push(doc);
            console.log(this.VisitTests);
            console.log(this.test);
    }

  async  onAddvisittest(){
        this.VisitTests = this.VisitTests.filter(t => {
            return delete t.TestName;
        });
         let x = await this.PatientServiceobj.addvisitTest(this.VisitTests);
         console.log(x);
        console.log(this.VisitTests);
        this.removealltest(this.VisitTests);
    }
    removeTest(index) {
        this.VisitTests.splice(index, 1);
    }
    removealltest(index) {
        // this.Tests.splice(index,10000000000);
        this.VisitTests.length = 0
    }
    addrangeForDiagnosis() {
        this.VisitDiagnosesForm.value.VisitId = this.vistid;
        let { value } = this.VisitDiagnosesForm;
        let diagnose = this.diagnoses.find(t => t.diagnosisId === value.DiagnosisId);
        let doc = {
            DiagnosisId: value.DiagnosisId,
            DiagnosName: diagnose.name,
            VisitId : value.VisitId

        }
            this.VisitDiagnoses.push(doc);
            console.log(this.VisitDiagnoses);
    }

   async onAddvisitdiagnosis(){
    this.VisitDiagnoses = this.VisitDiagnoses.filter(t => {
        return delete t.DiagnosName;
    });
       let x = await this.PatientServiceobj.addvisitDiagnosis(this.VisitDiagnoses);
       console.log(x);
        console.log(this.VisitDiagnoses);
        this.removealldiagnosis(this.VisitDiagnoses);
    }

    removediagnosis(index) {
        this.VisitDiagnoses.splice(index, 1);
    }
    removealldiagnosis(index) {
        this.VisitDiagnoses.length = 0
    }


}
