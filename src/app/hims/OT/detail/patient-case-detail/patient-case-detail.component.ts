import { Component, OnInit } from '@angular/core';
 import { PatientService } from '../../../../core';
  import { Router, ActivatedRoute } from '@angular/router';
  import { OTService } from '../../../../core/Services/HIMS/ot.service';

@Component({
  selector: 'app-patient-case-detail',
  templateUrl: './patient-case-detail.component.html',
  styleUrls: ['./patient-case-detail.component.css']
})
export class PatientCaseDetailComponent implements OnInit {

  public patientCaseDetail : any
  public patient :any;
  public consultant : any;
  public procedure : any;


  constructor( public Router: Router, public patientserviceobj : PatientService , public otserviceobj : OTService) { }

  ngOnInit() {
    
    this.patientserviceobj.getPatientObservable().subscribe(res=>{
      this.patient = res;
      console.log(this.patient);
    });

    this.patientserviceobj.GetConsultants().subscribe(res=>{
      this.consultant = res;
      console.log(this.consultant);
    });


    this.patientserviceobj.getProcedure().subscribe(res=>{
      this.procedure = res;
      console.log(this.procedure);
    });

    this.otserviceobj.getPatientCase().subscribe(res =>{
      this.patientCaseDetail = res;
      console.log(this.patientCaseDetail)
    });


  }


  addPatientCase(){
    this.Router.navigate(['/ot/patientcase']);
 }

 updatePatientCase(x){
 let id  = x.key.otPatientCaseId
    this.Router.navigate(['/ot/patientcase/'+id]);
 }

 patientCasereport(x){
  let id  = x.key.otPatientCaseId;
  let date =  this.formatDate(new Date(x.key.otPatientCaseDate)) ;

  this.Router.navigate(['/ot/report/patientcaserepot/'+id+'/'+date]);
 }


 formatDate(date: Date) {
  return  ( date.getMonth() +1)   + "-" + date.getDate()  + "-" +date.getFullYear();
}
}
