import { Component, OnInit } from '@angular/core';
import { UltraSoundService } from '../../../core/Services/HIMS/ultra-sound.service';
import { PatientService } from '../../../core';
 import { TreatmentService } from '../../../core/Services/HIMS/treatment.service';
 import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fwb-initial-detail',
  templateUrl: './fwb-initial-detail.component.html',
  styleUrls: ['./fwb-initial-detail.component.css']
})
export class FwbInitialDetailComponent implements OnInit {

  public fwbInitialDetail : any
  public patient :any;
  public consultant : any;
  public treatmentType : any;


  constructor(public ultraSoundServiceObj : UltraSoundService , public Router: Router ,public treatmentServiceobj : TreatmentService, public patientserviceobj : PatientService) { }

  ngOnInit() {
    this.ultraSoundServiceObj.getFwbInitial().subscribe(res=>{
      this.fwbInitialDetail = res;
      console.log(this.fwbInitialDetail);
    });

    this.patientserviceobj.getPatientObservable().subscribe(res=>{
      this.patient = res;
      console.log(this.patient);
    });

    this.patientserviceobj.GetConsultants().subscribe(res=>{
      this.consultant = res;
      console.log(this.consultant);
    });

    this.treatmentServiceobj.gettreatmenttypes().subscribe(res=>{
      this.treatmentType =  res;
      console.log(this.treatmentType);
    });
  }
  addFwbInitial(){
    this.Router.navigate(['/ultrasound/fwbinitial']);
 }

 updateFwbInitial(x){
 let id  = x.key.fwbInitialId
    this.Router.navigate(['/ultrasound/fwbinitial/'+id]);
 }

 fwbInitialreport(d){
   let id = d.key.patientId;
   let date =  this.formatDate(new Date(d.key.fwbInitialDate)) ;
   this.Router.navigate(['/ultrasound/reports/fwbinitialreport/'+id+'/'+date]);
 }

 formatDate(date: Date) {
   return  ( date.getMonth() +1)   + "-" + date.getDate()  + "-" +date.getFullYear();
 }


}
