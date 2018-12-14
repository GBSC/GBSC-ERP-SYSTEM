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

  constructor(private formBuilder : FormBuilder,private PatientServiceobj: PatientService) { 
    this.DailySemenAnalysisForm = this.formBuilder.group({
      'Timein' : ['',Validators.required],
      'Timeout'  : ['',Validators.required],
      'Payment' : ['',Validators.required],
      'Remarks' :['',Validators.required],
      'PatientId'  : ['',Validators.required],
      'ConsultantId': ['',Validators.required],
      'ProcedureId' :['',this.formBuilder.array([])]  
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
    console.log(value);
    console.log(this.DailySemenAnalysisForm.value);
  }

  addData(value){
    console.log(value.key);
  }

}
