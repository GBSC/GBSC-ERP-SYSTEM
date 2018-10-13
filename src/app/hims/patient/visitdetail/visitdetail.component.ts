import { Component, OnInit} from '@angular/core';
import { PatientService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitdetail',
  templateUrl: './visitdetail.component.html',
  styleUrls: ['./visitdetail.component.scss']
})
export class VisitdetailComponent implements OnInit {

  id: number;
  public consultant : any = {}; 
  public visitdiagnos : any = {}; 
  public visittst : any = {}; 

  public visitnature : any = {};
  public visit : any = {}; 
  public appointment : any = {};
  private getconsultantbyId : any = {}; 
  private getvisitdiagnosesbyId : any = []; 
  private getvisitTestbyId : any= [] ; 

  private visitdiag  : any = {}; 
  private visitTest : any = {};

  public visitnatures : any;

  private VisitVitalDetailForm : FormGroup;
  private VisitAppointmentForm : FormGroup;

  private VisitNoteForm : FormGroup;

  private VisitDiagnosesForm : FormGroup;

  private VisitTestForm : FormGroup;




  constructor(private formBuilder : FormBuilder , private Location : Location,private PatientServiceobj : PatientService, private route : ActivatedRoute) {

    this.VisitVitalDetailForm = this.formBuilder.group({
      Height: ['', Validators.required],
      Weight : ['', Validators.required],
      Temperature : ['', Validators.required],
      RespiratoryRate : ['', Validators.required],
      Pulse  : ['', Validators.required],
      BloodPressureUp : ['', Validators.required],
      BloodPressureDown  : ['', Validators.required],
      BloodOxygenSaturation : ['', Validators.required],
    });

    this.VisitAppointmentForm = formBuilder.group({
      PatientType :[''],
      TentativeTime :[''],
      ConsultantName :[''],
    });

    this.VisitNoteForm = formBuilder.group({
      ClinicalNote :[''],
    });

    this.VisitDiagnosesForm = formBuilder.group({
      DiagnosisId :[''],
    });

    this.VisitTestForm = formBuilder.group({
      TestId :[''],
    });

   }

  async ngOnInit() {
         await  this.PatientServiceobj.getConsultant();
         this.consultant = this.PatientServiceobj.consultant;
         console.log(this.consultant);

         await  this.PatientServiceobj.getDiagnoses();
         this.visitdiagnos = this.PatientServiceobj.diagnoses;

         await  this.PatientServiceobj.getTests();
         this.visittst = this.PatientServiceobj.testing;

        //  await this.PatientServiceobj.GetVisitNatures();
        //  this.visitnatures = this.PatientServiceobj.visitNatures;
        //  console.log( '  this.visitnatures   this.visitnatures   this.visitnatures ', this.visitnatures );


    this.route.params.subscribe(params => {
      this.id = +params['id'];
      let x = this.PatientServiceobj.Getvisit(this.id).subscribe((visit : any)=>{
        this.visit = visit;
        


        this.visitdiag = this.visit.visitDiagnoses
        this.visitdiag.forEach(element => {
          this.getvisitdiagnosesbyId.push(this.visitdiagnos.find(t => t.diagnosisId === element.diagnosisId));
        });
 
        this.visitTest = this.visit.visitTests;
        console.log(this.visitTest);
        this.visitTest.forEach(element => {
          this.getvisitTestbyId.push(this.visittst.find(t=> t.testId === element.testId));
        });

        console.log(this.getvisitTestbyId);


        this.VisitVitalDetailForm.patchValue({
          Height: visit.patientVital.height,
          Weight : visit.patientVital.weight,
          Temperature : visit.patientVital.temperature,
          RespiratoryRate : visit.patientVital.respiratoryRate,
          Pulse  : visit.patientVital.pulse,
          BloodPressureUp : visit.patientVital.bloodPressureUp,
          BloodPressureDown  : visit.patientVital.bloodPressureDown,
          BloodOxygenSaturation : visit.patientVital.bloodOxygenSaturation,
        });

        this.VisitNoteForm.patchValue({
          ClinicalNote : visit.visitNote.clinicalNote
        });
       


      });
    });
    
    this.route.params.subscribe(params => {
      
      this.id = +params['id'];
      
      let x = this.PatientServiceobj.GetAppointmentByVisit(this.id).subscribe((appointment : any)=> {
        this.appointment = appointment;
         console.log(this.appointment); 

         this.getconsultantbyId  = this.consultant.find(t => t.consultantId ===  appointment.consultantId);
         console.log(this.appointment);
         console.log(this.getconsultantbyId.name);
         console.log(this.consultant)
   
         this.VisitAppointmentForm.patchValue({
           PatientType :this.appointment.patientType,
           TentativeTime :this.appointment.tentativeTime,
              //ConsultantName : this.getconsultantbyId.name,
         });
   

    });

    console.log(this.VisitAppointmentForm);
    
  });

  }

  goback()
  {
    this.Location.back();
  }
  editvitals(){
   this.VisitVitalDetailForm.controls['Height'].enable();
  }

  editPatientVitals(value){
    console.log(value);
  }

  editPatientAppointment(value){
    console.log(value);
  }

  editPatientclicnicalnote(value){
    console.log(value);
  }

  editviststest(value){
    console.log(value);
  }

}
