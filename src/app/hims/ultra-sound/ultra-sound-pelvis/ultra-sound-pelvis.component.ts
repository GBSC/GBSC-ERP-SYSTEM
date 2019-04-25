import { Component, OnInit } from '@angular/core';
// import { PatientService } from '../../patient.services';
import { PatientService } from '../../../core';
import { UltraSoundService } from '../../../core/Services/HIMS/ultra-sound.service';
import { TreatmentService } from '../../../core/Services/HIMS/treatment.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



 
@Component({
  selector: 'app-ultra-sound-pelvis',
  templateUrl: './ultra-sound-pelvis.component.html',
  styleUrls: ['./ultra-sound-pelvis.component.css']
})
export class UltraSoundPelvisComponent implements OnInit {

  public patients : any;
  public pattientById : any;

  public consultant : any;
  public sonologists : any;
  public treatmentType : any;

  public patientDisabledFields : boolean = true;

  public ultraSoundPelvisForm : FormGroup;
  public id : any;
  public ultraSoundPelvisById : any;
  public patientDob : any;
  constructor(public treatmentServiceobj : TreatmentService, public patientserviceobj : PatientService, 
    public ultraSoundServiceobj : UltraSoundService, public formBuilder: FormBuilder , public route : ActivatedRoute, public router: Router , public Toast: ToastrService) { 

    this.ultraSoundPelvisForm = this.formBuilder.group({
      LMP :[''],
      EtOn :[''],
      TreatmentDay :[''],
      UltrasoundDate :[''],
      CycleDay :[''],
      AreaScanned:[''],
      Findings:[''],
      LS:[''],
      AP:[''],
      TS:[''],
      Type:[''],
      Endometrium:[''],
      Description:[''],
      FocalMassesInUterus:[''],
      RightOvary:[''],
      RightOvaryGrading:[''],
      NoOfFolliciesRightOvary:[''],
      LargeSizeRightOvary:[''],
      LeftOvary:[''],
      LeftOvaryGrading:[''],
      NoOfFolliciesLeftOvary:[''],
      LargeSizeLeftOvary:[''],
      FluidPelvis:[''],
      FluidAbdomen:[''],
      Comments:[''],
      PatientId:[''],
      ConsultantId:[''],
      TreatmentTypeId:[''],
      SonologistId:[''],
      UltraSoundPelvisId:['']

    });


  }

  ngOnInit() {


this.route.params.subscribe((params)=>{
this.id = +params['id'];
  this.ultraSoundServiceobj.getUltraSoundPelvisById(this.id).subscribe(res=> {
    this.ultraSoundPelvisById = res;
    console.log(this.ultraSoundPelvisById);
    if(this.ultraSoundPelvisById){
      this.ultraSoundPelvisForm.patchValue({
        LMP : this.ultraSoundPelvisById.lmp,
        EtOn : this.ultraSoundPelvisById.etOn,
        TreatmentDay : this.ultraSoundPelvisById.treatmentDay,
        UltrasoundDate : this.ultraSoundPelvisById.ultrasoundDate,
        CycleDay : this.ultraSoundPelvisById.cycleDay,
        AreaScanned : this.ultraSoundPelvisById.areaScanned,
        Findings : this.ultraSoundPelvisById.findings,
        LS : this.ultraSoundPelvisById.ls,
        AP : this.ultraSoundPelvisById.ap,
        TS : this.ultraSoundPelvisById.ts,
        Type : this.ultraSoundPelvisById.type,
        Endometrium : this.ultraSoundPelvisById.endometrium,
        Description : this.ultraSoundPelvisById.description,
        FocalMassesInUterus : this.ultraSoundPelvisById.focalMassesInUterus,
        RightOvary : this.ultraSoundPelvisById.rightOvary,
        RightOvaryGrading: this.ultraSoundPelvisById.rightOvaryGrading,
        NoOfFolliciesRightOvary : this.ultraSoundPelvisById.noOfFolliciesRightOvary,
        LargeSizeRightOvary : this.ultraSoundPelvisById.largeSizeRightOvary,
        LeftOvary : this.ultraSoundPelvisById.leftOvary,
        LeftOvaryGrading : this.ultraSoundPelvisById.leftOvaryGrading,
        NoOfFolliciesLeftOvary: this.ultraSoundPelvisById.noOfFolliciesLeftOvary,
        LargeSizeLeftOvary : this.ultraSoundPelvisById.largeSizeLeftOvary,
        FluidPelvis : this.ultraSoundPelvisById.fluidPelvis,
        FluidAbdomen : this.ultraSoundPelvisById.fluidAbdomen,
        Comments : this.ultraSoundPelvisById.comments,
        PatientId: this.ultraSoundPelvisById.patientId,
        ConsultantId : this.ultraSoundPelvisById.consultantId,
        TreatmentTypeId : this.ultraSoundPelvisById.treatmentTypeId,
        SonologistId: this.ultraSoundPelvisById.sonologistId,
        UltraSoundPelvisId: this.ultraSoundPelvisById.ultraSoundPelvisId
      });
    }
  });
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
      console.log(this.pattientById);
      // if(this.pattientById.dob != null || this.pattientById.dob != '' ){
        
      // }
    });
  }


  addUltraSoundPelvis(value){
    delete this.ultraSoundPelvisForm.value.UltraSoundPelvisId;
    this.ultraSoundServiceobj.addUltraSoundPelvis(value).subscribe(res=>{
      if(res != null){
        console.log(res);
        this.Toast.success('Saved');
        this.ultraSoundPelvisForm.reset();
      }
      else{
        this.Toast.error('        ')
      }
    })
   }

   updateUltraSoundPelvis(value){

    this.ultraSoundServiceobj.updateUltraSoundPelvis(value).subscribe(res=>{
      if(res != null){
        console.log(res);
        this.Toast.success('Saved');
       }
      else{
        this.Toast.error('        ')
      }
    });
   }

}
//ultraSoundPelvisId
