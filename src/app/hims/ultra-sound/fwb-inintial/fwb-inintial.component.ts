import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { UltraSoundService } from '../../../core/Services/HIMS/ultra-sound.service';
import { TreatmentService } from '../../../core/Services/HIMS/treatment.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fwb-inintial',
  templateUrl: './fwb-inintial.component.html',
  styleUrls: ['./fwb-inintial.component.css']
})
export class FWBInintialComponent implements OnInit {


  public patients : any;
  public pattientById : any;

  public consultant : any;
  public sonologists : any;
  public treatmentType : any;

  public patientDisabledFields : boolean = true;

  public fwbInitialForm : FormGroup;
  public id : any;
  public fwbInitialById : any;


  constructor(public treatmentServiceobj : TreatmentService, public patientserviceobj : PatientService, 
    public ultraSoundServiceobj : UltraSoundService, public formBuilder: FormBuilder , public route : ActivatedRoute, public router: Router, public Toast: ToastrService ) { 

      this.fwbInitialForm = this.formBuilder.group({
        FwbInitialId:[''],
        FwbInitialDate : ['', Validators.required],
        TreatmentNo : [''],
        CycleNo:[''],
        ETDate :['' , Validators.required],
        GestAge :[''],
        LMPDate :['' , Validators.required],
        CFacts :[''],
        NoofFoetus :[''],
        FoetalHeartBeat:[''],
        FoetalMovement :[''],
        AmnioticFluid :[''],
        CRL :[''],
        PlacnetalLocallisation :[''],
        GSac :[''],
        Comments :[''],
        PatientId :['' , Validators.required],
        ConsultantId :['' , Validators.required],
        SonologistId :['' , Validators.required],
        TreatmentTypeId :['' , Validators.required]
      });
  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = +params['id'];
      if(this.id){
        this.ultraSoundServiceobj.getFwbInitialById(this.id).subscribe(res=> {
          this.fwbInitialById = res;
          console.log(this.fwbInitialById);
          if(this.fwbInitialById){
            console.log('if');
            this.fwbInitialForm.patchValue({
              FwbInitialDate :this.fwbInitialById.fwbInitialDate ,
              TreatmentNo  :this.fwbInitialById.treatmentNo ,
              CycleNo  :this.fwbInitialById.cycleNo ,
              ETDate   :this.fwbInitialById.etDate ,
              GestAge   :this.fwbInitialById.gestAge ,
              LMPDate  :this.fwbInitialById.lmpDate ,
              CFacts  :this.fwbInitialById.cFacts ,
              NoofFoetus  :this.fwbInitialById.noofFoetus ,
              FoetalHeartBeat :this.fwbInitialById.foetalHeartBeat ,
              FoetalMovement  :this.fwbInitialById.foetalMovement ,
              AmnioticFluid  :this.fwbInitialById.amnioticFluid ,
              CRL  :this.fwbInitialById.crl ,
              PlacnetalLocallisation  :this.fwbInitialById.placnetalLocallisation ,
              GSac  :this.fwbInitialById.gSac ,
              Comments  :this.fwbInitialById.comments ,
              PatientId  :this.fwbInitialById.patientId ,
              ConsultantId  :this.fwbInitialById.consultantId ,
              SonologistId  :this.fwbInitialById.sonologistId ,
              TreatmentTypeId  :this.fwbInitialById.treatmentTypeId ,
              FwbInitialId : this.fwbInitialById.fwbInitialId
            });
          }
        });
      }
      
      })
          this.patientserviceobj.getPatientObservable().subscribe(res=>{
            this.patients = res;
            console.log(this.patients);
          });
      
          this.patientserviceobj.GetConsultants().subscribe(res=>{
            this.consultant = res;
            console.log(this.consultant);
          });
      
          this.ultraSoundServiceobj.getSonologist().subscribe(res=>{
            this.sonologists = res;
            console.log(this.sonologists);
          });
      
          this.treatmentServiceobj.gettreatmenttypes().subscribe(res=>{
            this.treatmentType =  res;
            console.log(this.treatmentType);
          });
 

  }

  getPatientById(value){
    this.patientserviceobj.getPatientById(value).subscribe(res=>{
      this.pattientById = res;
      console.log(this.pattientById );
    });
  }

  addfwbInitial(value){
    delete this.fwbInitialForm.value.FwbInitialId;
    console.log(value);
    this.ultraSoundServiceobj.addFwbInitial(value).subscribe(res=> {
      if(res != null){
        console.log(res);
        this.Toast.success('Saved');
        this.fwbInitialForm.reset();
      }
      else{
        this.Toast.error('        ')
      }
    });
   }

   updatefwbInitial(value){
     console.log(value);
     this.ultraSoundServiceobj.updateFwbInitial(value).subscribe(res=>{
      if(res != null){
        console.log(res);
        this.Toast.success('Saved');
       }
      else{
        this.Toast.error('        ')
      }
     })
   }
}
