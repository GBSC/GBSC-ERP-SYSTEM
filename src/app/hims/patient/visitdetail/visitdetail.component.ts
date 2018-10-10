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

  private VisitVitalDetailForm : FormGroup;
 
  constructor(private formBuilder : FormBuilder , private Location : Location,private PatientServiceobj : PatientService, private route : ActivatedRoute) {

    this.VisitVitalDetailForm = this.formBuilder.group({
      Height: ['', Validators.required],
    });

   }

  async ngOnInit() {
         await  this.PatientServiceobj.getConsultant();
         this.consultant = this.PatientServiceobj.consultant;

         await  this.PatientServiceobj.getDiagnoses();
         this.visitdiagnos = this.PatientServiceobj.diagnoses;

         await  this.PatientServiceobj.getTests();
         this.visittst = this.PatientServiceobj.testing;

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

      });
    });
    
    this.route.params.subscribe(params => {
      
      this.id = +params['id'];
      
      let x = this.PatientServiceobj.GetAppointmentByVisit(this.id).subscribe((appointment : any)=> {
        this.appointment = appointment;
        // console.log(this.consultant);
        this.getconsultantbyId  = this.consultant.find(t => t.consultantId === appointment.consultantId);
      console.log(appointment);
      console.log(this.getconsultantbyId.name);
      console.log(this.consultant)
    });
    console.log(x);
    
  });
  
  
  
  

  }

  goback()
  {
    this.Location.back();
  }
  editvitals(){
   this.VisitVitalDetailForm.controls['Height'].enable();
  }

}
