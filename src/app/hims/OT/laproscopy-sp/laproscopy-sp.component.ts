import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { OTService } from '../../../core/Services/HIMS/ot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-laproscopy-sp',
  templateUrl: './laproscopy-sp.component.html',
  styleUrls: ['./laproscopy-sp.component.css']
})
export class LaproscopySpComponent implements OnInit {

  public patients : any;
  public pattientById : any;

  public consultant : any;
  public otProcedure : any;

  public patientDisabledFields : boolean = true;
  public laproscopyspForm : FormGroup;
  public id : any;
  public laproscopySpById : any;

  constructor(public patientserviceobj : PatientService, 
    public otServiceobj : OTService, public formBuilder: FormBuilder , public route : ActivatedRoute, public router: Router, public Toast: ToastrService) {

      this.laproscopyspForm = this.formBuilder.group({

        LaproscopySpId :[''],
        LaproscopySpDate :['', Validators.required],
        Heading :[''],
        Diagnosis :[''],
        Indications  :[''],
        Vulva  :[''],
        Vagina  :[''],
        Cervix  :[''],
        Uterus  :[''],
        RFallopianTube :[''], 
        RDyeSpill  :[''],
        LFallopianTube   :[''], 
        LDyeSpill  :[''],
        RighOvary :[''],
        LeftOvary :[''],
        PouchofDouglas   :[''], 
        UterovesicalPouch :[''],
        OtherFindings :[''],
        Comments :[''],
        PatientId :['', Validators.required],
        OtProcedureId :['', Validators.required],
        SurgeonId :['', Validators.required],


      });

     }

  ngOnInit() {

    this.route.params.subscribe((params)=>{
        this.id = +params['id'];
        if(this.id){
          this.otServiceobj.getLaproscopySpId(this.id).subscribe(res =>{
              this.laproscopySpById = res;
              console.log(this.laproscopySpById);
              this.laproscopyspForm.patchValue({
                LaproscopySpId   :  this.laproscopySpById.laproscopySpId,
                LaproscopySpDate   :  this.laproscopySpById.laproscopySpDate,
                Heading   :  this.laproscopySpById.heading,
                Diagnosis   :  this.laproscopySpById.diagnosis,
                Indications   :  this.laproscopySpById.indications,
                Vulva   :  this.laproscopySpById.vulva,
                Vagina   :  this.laproscopySpById.vagina,
                Cervix   :  this.laproscopySpById.cervix,
                Uterus   :  this.laproscopySpById.uterus,
                RFallopianTube   :  this.laproscopySpById.rFallopianTube,
                RDyeSpill   :  this.laproscopySpById.rDyeSpill,
                LFallopianTube   :  this.laproscopySpById.lFallopianTube,
                LDyeSpill   :  this.laproscopySpById.lDyeSpill,
                RighOvary   :  this.laproscopySpById.righOvary,
                LeftOvary   :  this.laproscopySpById.leftOvary,
                PouchofDouglas   :  this.laproscopySpById.pouchofDouglas,
                UterovesicalPouch   :  this.laproscopySpById.uterovesicalPouch,
                OtherFindings   :  this.laproscopySpById.otherFindings,
                Comments    :  this.laproscopySpById.comments,
                PatientId   :  this.laproscopySpById.patientId,
                OtProcedureId    :  this.laproscopySpById.otProcedureId,
                SurgeonId   :  this.laproscopySpById.surgeonId,
              });
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

    this.otServiceobj.getOtProcedures().subscribe(res =>{
        this.otProcedure = res;
        console.log(this.otProcedure);
    });
  }

  getPatientById(value){
    this.patientserviceobj.getPatientById(value).subscribe(res=>{
      this.pattientById = res;
      console.log(this.pattientById);
    });
  }

  addLaproscopySp(value){
    delete this.laproscopyspForm.value.LaproscopySpId;
    this.otServiceobj.addLaproscopySp(value).subscribe(res=>{
      if(res != null){
        console.log(res);
        this.laproscopyspForm.reset();
        this.Toast.success('Saved');
      }
      else{
        this.Toast.error('          ')
      }

      
    });
    console.log(value);
  }

  updateLaproscopySp(value){
    this.otServiceobj.updateLaproscopySp(value).subscribe(res=>{
 
      if(res != null){
        console.log(res);
         this.Toast.success('Updated');
      }
      else{
        this.Toast.error('          ')
      }
    })
  }


}
