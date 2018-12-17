import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';

@Component({
  selector: 'app-daily-semen-analysis',
  templateUrl: './daily-semen-analysis.component.html',
  styleUrls: ['./daily-semen-analysis.component.scss']
})
export class DailySemenAnalysisComponent implements OnInit {

  private DailySemenAnalysisForm : FormGroup;
  private ProcedureForm : FormGroup;
  private Patients : any;
  private Consultants : any;
  private Procedure : any;
  private Procedurearray : any = [];
  private dailysemenanalysisobj : any;

  constructor(private formBuilder : FormBuilder,private PatientServiceobj: PatientService) { 
    this.DailySemenAnalysisForm = this.formBuilder.group({
      'Timein' : ['',Validators.required],
      'Timeout'  : ['',Validators.required],
      'Payment' : ['',Validators.required],
      'Remarks' :['',Validators.required],
      'PatientId'  : ['',Validators.required],
      'ConsultantId': ['',Validators.required],
      'DailySemenAnalysisProcedures' :['',this.formBuilder.array([])]  ,
     // 'ProcedureId' :['',Validators.required] 
    });
  }

  ngOnInit() {
    this.PatientServiceobj.getPatientObservable().subscribe(res => {
      this.Patients = res ;
      console.log(this.Patients);
    } );

    this.PatientServiceobj.GetConsultants().subscribe(res=> {
      this.Consultants = res;
      console.log(this.Consultants);
    });

    
    this.PatientServiceobj.getProcedure().subscribe(res => {
      this.Procedure = res;
      console.log(this.Procedure);
       
     });


  }






  
  addDailySemenAnalysis(value){
    // this.dailysemenanalysisobj = value
    //  console.log(this.dailysemenanalysisobj );
 
    //  this.dailysemenanalysisobj =  this.dailysemenanalysisobj.filter(t=> {
    //   return delete t.ProcedureId;
    // });
     console.log(this.DailySemenAnalysisForm.value);
     this.DailySemenAnalysisForm.value.DailySemenAnalysisProcedures =  this.Procedurearray

  }

  addProcedure(value){
  let x = value.key;
    this.Procedurearray.push(x);
  }


  deleteProcedure(value){
    this.Procedurearray.splice(value.key, 1)
  }


  
}
