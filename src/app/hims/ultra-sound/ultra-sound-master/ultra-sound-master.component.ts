import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { UltraSoundService } from '../../../core/Services/HIMS/ultra-sound.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ultra-sound-master',
  templateUrl: './ultra-sound-master.component.html',
  styleUrls: ['./ultra-sound-master.component.css']
})
export class UltraSoundMasterComponent implements OnInit {

  constructor(public patientserviceobj : PatientService, 
    public ultraSoundServiceobj : UltraSoundService, public formBuilder: FormBuilder , public route : ActivatedRoute, public router: Router, public Toast: ToastrService) {

      this.ultraSoundMasterForm = this.formBuilder.group({
        UltraSoundMasterId:[''],
        UltraSoundMasterDate : [''],
        CFacts :[''],
        LMP :[''],
        GeatAge : [''],
        EtDate : [''],
        NoofFoetus : [''],
        FoetalHeartBeat : [''],
        FoetalMovement : [''],
        LieOfFoetus : [''],
        AmnioticFluid :[''],
        PlacnetalLocallisation : [''],
        Presentation : [''],
        PlacentalGrade : [''],
        Bpd :[''],
        Hc :[''],
        Ac :[''],
        Fl:[''],
        Afi :[''],
        Gs :[''],
        Crl:[''],
        Ebw : [''],
        Comments :[''],
        PatientId:[''],
        ConsultantId:[''],
        SonologistId :['']
      });

     }

    public patients : any;
    public pattientById : any;
  
    public consultant : any;
    public sonologists : any;

    public patientDisabledFields : boolean = true;
    public ultraSoundMasterForm : FormGroup;
    public id : any;
    public ultraSoundMasterById : any;

    ngOnInit() {


      this.route.params.subscribe((params)=>{
      this.id = +params['id'];
        this.ultraSoundServiceobj.getUltraSoundMasterById(this.id).subscribe(res=> {
          this.ultraSoundMasterById = res;
          console.log(this.ultraSoundMasterById);
          if(this.ultraSoundMasterById){
            this.ultraSoundMasterForm.patchValue({
              UltraSoundMasterId  : this.ultraSoundMasterById.ultraSoundMasterId,
              UltraSoundMasterDate  : this.ultraSoundMasterById.ultraSoundMasterDate,
              CFacts  : this.ultraSoundMasterById.cFacts,
              LMP : this.ultraSoundMasterById.lmp,
              GeatAge : this.ultraSoundMasterById.geatAge,
              EtDate  : this.ultraSoundMasterById.etDate,
              NoofFoetus  : this.ultraSoundMasterById.noofFoetus,
              FoetalHeartBeat : this.ultraSoundMasterById.foetalHeartBeat,
              FoetalMovement  : this.ultraSoundMasterById.foetalMovement,
              LieOfFoetus : this.ultraSoundMasterById.lieOfFoetus,
              AmnioticFluid :  this.ultraSoundMasterById.amnioticFluid,
              PlacnetalLocallisation  : this.ultraSoundMasterById.placnetalLocallisation,
              Presentation  : this.ultraSoundMasterById.presentation,
              PlacentalGrade  : this.ultraSoundMasterById.placentalGrade,
              Bpd : this.ultraSoundMasterById.bpd,
              Hc  :  this.ultraSoundMasterById.hc,
              Ac  : this.ultraSoundMasterById.ac,
              Fl  : this.ultraSoundMasterById.fl,
              Afi : this.ultraSoundMasterById.afi,
              Gs  : this.ultraSoundMasterById.gs,
              Crl : this.ultraSoundMasterById.crl,
              Ebw : this.ultraSoundMasterById.ebw,
              Comments  : this.ultraSoundMasterById.comments,
              PatientId : this.ultraSoundMasterById.patientId,
              ConsultantId  : this.ultraSoundMasterById.consultantId,
              SonologistId  : this.ultraSoundMasterById.sonologistId,
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
      
    
      
      
        }

  getPatientById(value){
    this.patientserviceobj.getPatientById(value).subscribe(res=>{
      this.pattientById = res;
    });
  }

  updateUltraSoundMaster(value){
    console.log(value);
    this.ultraSoundServiceobj.updateUltraSoundMaster(value).subscribe(res =>{
      if(res != null){
        console.log(value);
        this.Toast.success('Saved');
       }
      else{
        this.Toast.error('            ')
      }    
    });
  }

  addUltraSoundMaster(value){
    console.log(value)
    delete this.ultraSoundMasterForm.value.UltraSoundMasterId;
    this.ultraSoundServiceobj.addUltraSoundMaster(value).subscribe(res =>{
      if(res != null){
        console.log(value);
        this.Toast.success('Saved');
        this.ultraSoundMasterForm.reset(); 
      }
      else{
        this.Toast.error('            ')
      }
    });
  }
}
