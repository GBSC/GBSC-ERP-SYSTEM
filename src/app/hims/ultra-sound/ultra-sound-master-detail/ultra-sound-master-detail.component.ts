import { Component, OnInit } from '@angular/core';
import { UltraSoundService } from '../../../core/Services/HIMS/ultra-sound.service';
import { PatientService } from '../../../core';
 import { TreatmentService } from '../../../core/Services/HIMS/treatment.service';
 import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ultra-sound-master-detail',
  templateUrl: './ultra-sound-master-detail.component.html',
  styleUrls: ['./ultra-sound-master-detail.component.css']
})
export class UltraSoundMasterDetailComponent implements OnInit {
  public ultraSoundMasterDetail : any
  public patient :any;
  public consultant : any;
  public treatmentType : any;

  constructor(public ultraSoundServiceObj : UltraSoundService , public Router: Router ,public treatmentServiceobj : TreatmentService, public patientserviceobj : PatientService) { }

  ngOnInit() {
    this.ultraSoundServiceObj.getUltraSoundMaster().subscribe(res=>{
      this.ultraSoundMasterDetail = res;
      console.log(this.ultraSoundMasterDetail);
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

  updateUltraSoundMaster(x){
    let id  = x.key.ultraSoundMasterId
    this.Router.navigate(['/ultrasound/ultrasoundmaster/'+id]);
  }


  ultraSoundMasterReport(d){
    let id = d.key.patientId;
    let date =  this.formatDate(new Date(d.key.ultraSoundMasterDate)) ;
    this.Router.navigate(['/ultrasound/reports/ultrasoundpelvisreport/'+id+'/'+date]);
  }

  formatDate(date: Date) {
    return  ( date.getMonth() +1)   + "-" + date.getDate()  + "-" +date.getFullYear();
  }

  addUltraSoundMaster(){
    
    this.Router.navigate(['/ultrasound/ultrasoundmaster']);
  }

}
