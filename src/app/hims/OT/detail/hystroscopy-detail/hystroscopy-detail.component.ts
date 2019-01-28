import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { OTService } from '../../../../core/Services/HIMS/ot.service';

@Component({
  selector: 'app-hystroscopy-detail',
  templateUrl: './hystroscopy-detail.component.html',
  styleUrls: ['./hystroscopy-detail.component.css']
})
export class HystroscopyDetailComponent implements OnInit {
  public hystroscopyDetail : any
  public patient :any;
  constructor(public Router: Router, public patientserviceobj : PatientService , public otserviceobj : OTService) { }

  ngOnInit() {

    
    this.patientserviceobj.getPatientObservable().subscribe(res=>{
      this.patient = res;
      console.log(this.patient);
    });

    this.otserviceobj.getHystroscopy().subscribe(res =>{
      this.hystroscopyDetail = res;
      console.log(this.hystroscopyDetail)
    });

  }


  
  addHystroscopy(){
    this.Router.navigate(['/ot/hystroscopy']);
  }

  updateHystroscopy(x){
    let id  = x.key.hystroscopyId
    this.Router.navigate(['/ot/hystroscopy/'+id]);
  }

  hystroscopyreport(x){
    let id  = x.key.patientId;
    let date =  this.formatDate(new Date(x.key.hystroscopyDate)) ;

    this.Router.navigate(['/ot/report/laproscopyspreport/'+id+'/'+date]);
  }


  formatDate(date: Date) {
    return  ( date.getMonth() +1)   + "-" + date.getDate()  + "-" +date.getFullYear();
  }

}
