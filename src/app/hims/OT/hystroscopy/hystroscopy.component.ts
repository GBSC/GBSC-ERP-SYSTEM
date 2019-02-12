import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { OTService } from '../../../core/Services/HIMS/ot.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hystroscopy',
  templateUrl: './hystroscopy.component.html',
  styleUrls: ['./hystroscopy.component.css']
})
export class HystroscopyComponent implements OnInit {
  public patients : any;
  public pattientById : any;

  public consultant : any;
  public otProcedure : any;

  public patientDisabledFields : boolean = true;
  public hystroscopyForm : FormGroup;
  public id : any;
  public hystroscopyById : any;

  constructor(public patientserviceobj : PatientService, 
    public otServiceobj : OTService, public formBuilder: FormBuilder , public route : ActivatedRoute, public router: Router) { 

      this.hystroscopyForm = this.formBuilder.group({
        HystroscopyId:[''],
        HystroscopyDate:[''],
        Type:[''],
        LmpDate:[''],
        Anesthetic:[''],
        Indications:[''],
        OperationsNote1:[''],
        OperationsNote2:[''],
        OperationsNote3:[''],
        OperationsNote4:[''],
        OperationsNote5:[''],
        OperationsNote6:[''],
        Findings:[''],
        Comments:[''],
        PatientId:[''],
        OtProcedureId:[''],
        ConsultantId:['']
      });

    }

  ngOnInit() {
      
    this.route.params.subscribe((params)=>{
      this.id = +params['id'];
        if(this.id){
          this.otServiceobj.getHystroscopyById(this.id).subscribe(res =>{
              this.hystroscopyById = res;
              console.log(this.hystroscopyById);
              this.hystroscopyForm.patchValue({
                HystroscopyId:this.hystroscopyById.hystroscopyId,
                HystroscopyDate:this.hystroscopyById.hystroscopyDate,
                Type:this.hystroscopyById.type,
                LmpDate:this.hystroscopyById.lmpDate,
                Anesthetic:this.hystroscopyById.anesthetic,
                Indications:this.hystroscopyById.indications,
                OperationsNote1:this.hystroscopyById.operationsNote1,
                OperationsNote2:this.hystroscopyById.operationsNote2,
                OperationsNote3:this.hystroscopyById.operationsNote3,
                OperationsNote4:this.hystroscopyById.operationsNote4,
                OperationsNote5:this.hystroscopyById.operationsNote5,
                OperationsNote6:this.hystroscopyById.operationsNote6,
                Findings:this.hystroscopyById.findings,
                Comments:this.hystroscopyById.comments,
                PatientId:this.hystroscopyById.patientId,
                OtProcedureId:this.hystroscopyById.otProcedureId,
                ConsultantId:this.hystroscopyById.consultantId,
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

  addhystroscopy(value){
    delete this.hystroscopyForm.value.HystroscopyId;
    this.otServiceobj.addHystroscopy(value).subscribe(res=>{
      console.log(res);
    })
  }

  updatehystroscopy(value){
    this.otServiceobj.updateHystroscopy(value).subscribe(res =>{
      console.log(res);
    })
  }

}
