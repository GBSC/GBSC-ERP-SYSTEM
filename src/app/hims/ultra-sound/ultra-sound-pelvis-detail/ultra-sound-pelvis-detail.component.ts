import { Component, OnInit } from '@angular/core';
import { UltraSoundService } from '../../../core/Services/HIMS/ultra-sound.service';
import { PatientService } from '../../../core';
 import { TreatmentService } from '../../../core/Services/HIMS/treatment.service';
 import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ultra-sound-pelvis-detail',
  templateUrl: './ultra-sound-pelvis-detail.component.html',
  styleUrls: ['./ultra-sound-pelvis-detail.component.css']
})
export class UltraSoundPelvisDetailComponent implements OnInit {

  public ultraSoundPelvisDetail : any
  public patient :any;
  public consultant : any;
  public treatmentType : any;

  constructor(public ultraSoundServiceObj : UltraSoundService , public Router: Router ,public treatmentServiceobj : TreatmentService, public patientserviceobj : PatientService ) { 

  }

  ngOnInit() {

    this.ultraSoundServiceObj.getUltraSoundPelvis().subscribe(res=>{
      this.ultraSoundPelvisDetail = res;
      console.log(this.ultraSoundPelvisDetail);
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

  addUltraSoundPelvis(){
     this.Router.navigate(['/ultrasound/ultrasoundpelvis']);
  }

  updateUltraSoundPelvis(d){
  let id  = d.key.ultraSoundPelvisId
     this.Router.navigate(['/ultrasound/ultrasoundpelvis/'+id]);

  }

  ultrasoundpelvisreport(d){
    let id = d.key.patientId;
    let date =  this.formatDate(new Date(d.key.ultrasoundDate)) ;
    this.Router.navigate(['/ultrasound/reports/ultrasoundpelvisreport/'+id+'/'+date]);
  }

  formatDate(date: Date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }

}
