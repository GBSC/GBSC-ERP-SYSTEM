import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { OTService } from '../../../core/Services/HIMS/ot.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-case',
  templateUrl: './patient-case.component.html',
  styleUrls: ['./patient-case.component.css']
})
export class PatientCaseComponent implements OnInit {

  public patientDisabledFields : boolean = true;

  public patientCaseForm : FormGroup;

  public patients : any;
  public pattientById : any;

  public consultant : any;
  public procedure : any;

  public id : any;
  public patientCaseById : any;

  public IsUpdate : boolean = false;


  constructor(public OTServiceObj : OTService, public patientserviceobj : PatientService ,public formBuilder: FormBuilder,public route : ActivatedRoute, public router: Router ) { 

    this.patientCaseForm = this.formBuilder.group({
      OtPatientCaseId :[''] ,
      OtPatientCaseDate : [''] ,
      DateNature :[''],
      TimeStart :[''],
      TimeEnd :[''],
      PatientId :[''],
      ProcedureId:[''],
      SurgeonId:[''],
      DoneById:[''],
      Other :[''],
      AnesthesiaType :[''],
      Anestetic :[''],
      ScrubAssistant :[''],
      OtAssistant :[''],
      Nurse :[''],
      Remarks :['']

    });

  }

  ngOnInit() {

      // if(id) {
      //   this.IsUpdate = true;
      // }

      this.route.params.subscribe((params)=>{
        this.id = +params['id'];
        if(this.id){
          this.OTServiceObj.getPatientCaseById(this.id).subscribe(res =>{
            this.patientCaseById = res;
            console.log(this.patientCaseById)
            if(this.patientCaseById){
              this.patientCaseForm.patchValue({
                OtPatientCaseId :this.patientCaseById.otPatientCaseId,
                OtPatientCaseDate : this.patientCaseById.otPatientCaseDate,
                DateNature : this.patientCaseById.dateNature,
                TimeStart : this.patientCaseById.timeStart,
                TimeEnd : this.patientCaseById.timeEnd,
                PatientId : this.patientCaseById.patientId,
                ProcedureId: this.patientCaseById.procedureId,
                SurgeonId: this.patientCaseById.surgeonId,
                DoneById: this.patientCaseById.doneById,
                Other : this.patientCaseById.other,
                AnesthesiaType : this.patientCaseById.anesthesiaType,
                Anestetic : this.patientCaseById.anestetic,
                ScrubAssistant : this.patientCaseById.scrubAssistant,
                OtAssistant : this.patientCaseById.otAssistant,
                Nurse :this.patientCaseById.nurse,
                Remarks :this.patientCaseById.remarks,
              });
            }
          });
        }
      });

   
      this.patientserviceobj.getPatientObservable().subscribe(res=>{
        this.patients = res;
        console.log(this.patients);
      });
  
      this.patientserviceobj.GetConsultants().subscribe(res=>{
        this.consultant = res;
        console.log(this.consultant);
      });


      this.patientserviceobj.getProcedure().subscribe(res=>{
        this.procedure = res;
        console.log(this.procedure);
      });

  }
 
  addPatientCase(value){
    console.log(value);
    delete this.patientCaseForm.value.OtPatientCaseId;
    this.OTServiceObj.addPatientCase(value).subscribe(res =>{
      console.log(res);
    });
  }

  updatePatientCase(value){
    this.OTServiceObj.updatePatientCase(value).subscribe(res =>{
      console.log(res);
    });
    console.log(value);
  }

  getPatientById(value){
    this.patientserviceobj.getPatientById(value).subscribe(res=>{
      this.pattientById = res;
    });
  }


   

}
