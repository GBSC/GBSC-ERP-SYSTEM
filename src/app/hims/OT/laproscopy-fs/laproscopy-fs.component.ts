import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { OTService } from '../../../core/Services/HIMS/ot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-laproscopy-fs',
  templateUrl: './laproscopy-fs.component.html',
  styleUrls: ['./laproscopy-fs.component.css']
})
export class LaproscopyFsComponent implements OnInit {

  public patients : any;
  public pattientById : any;

  public consultant : any;
  public otProcedure : any;

  public patientDisabledFields : boolean = true;
  public laproscopyfsForm : FormGroup;
  public id : any;
  public laproscopyfsById : any;

  constructor(public patientserviceobj : PatientService, 
    public otServiceobj : OTService, public formBuilder: FormBuilder , public route : ActivatedRoute, public router: Router, public Toast: ToastrService) { 
      this.laproscopyfsForm = this.formBuilder.group({
        LaproscopyFSId:[''],
        LaproscopyFsDate :['' , Validators.required],
        Type:[''],
        LMPDate :['' , Validators.required],
        Anesthetic :[''],
        Diagnosis:[''],
        Indications:[''],
        Heading1:[''],
        OperationsNote1:[''],
        Heading2:[''],
        OperationsNote2:[''],
        Heading3:[''],
        OperationsNote3:[''],
        OperationsNote4:[''],
        Comments:[''],
        PatientId:['', Validators.required],
        OtProcedureId:['', Validators.required],
        SurgeonId:['', Validators.required],
        Surgeon2Id:['', Validators.required]
      });
    }

  ngOnInit() {

    
    this.route.params.subscribe((params)=>{
      this.id = +params['id'];
        if(this.id){
          this.otServiceobj.getLaproscopyFsById(this.id).subscribe(res =>{
              this.laproscopyfsById = res;
              console.log(this.laproscopyfsById);
              this.laproscopyfsForm.patchValue({
                  LaproscopyFSId:this.laproscopyfsById.laproscopyFSId,
                  LaproscopyFsDate :this.laproscopyfsById.laproscopyFsDate,
                  Type:this.laproscopyfsById.type,
                  LMPDate :this.laproscopyfsById.lmpDate,
                  Anesthetic:this.laproscopyfsById.anesthetic,
                  Diagnosis:this.laproscopyfsById.diagnosis,
                  Indications:this.laproscopyfsById.indications,
                  Heading1:this.laproscopyfsById.heading1,
                  OperationsNote1:this.laproscopyfsById.operationsNote1,
                  Heading2:this.laproscopyfsById.heading2,
                  OperationsNote2:this.laproscopyfsById.operationsNote2,
                  Heading3:this.laproscopyfsById.heading3,
                  OperationsNote3:this.laproscopyfsById.operationsNote3,
                  OperationsNote4:this.laproscopyfsById.operationsNote4,
                  Comments:this.laproscopyfsById.comments,
                  PatientId:this.laproscopyfsById.patientId,
                  OtProcedureId:this.laproscopyfsById.otProcedureId,
                  SurgeonId:this.laproscopyfsById.surgeonId,
                  Surgeon2Id:this.laproscopyfsById.surgeon2Id,
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

  addLaproscopyFs(value){
    delete this.laproscopyfsForm.value.LaproscopyFSId;
    this.otServiceobj.addLaproscopyFs(value).subscribe(res =>{
      if(res != null){
        console.log(res);
        this.laproscopyfsForm.reset();
        this.Toast.success('Saved');
      }
      else{
        this.Toast.error('          ')
      }
    });
  }

  updateLaproscopyFs(value){
    this.otServiceobj.updateLaproscopyFs(value).subscribe(res =>{
      if(res != null){
        console.log(res);
         this.Toast.success('Updated');
      }
      else{
        this.Toast.error('          ')
      }
    });
  }

}
