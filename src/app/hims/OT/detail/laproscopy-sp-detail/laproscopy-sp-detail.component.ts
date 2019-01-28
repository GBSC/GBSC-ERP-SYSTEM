import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { OTService } from '../../../../core/Services/HIMS/ot.service';


@Component({
  selector: 'app-laproscopy-sp-detail',
  templateUrl: './laproscopy-sp-detail.component.html',
  styleUrls: ['./laproscopy-sp-detail.component.css']
})
export class LaproscopySpDetailComponent implements OnInit {

  public laproscopySpDetail : any
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

    this.otserviceobj.getLaproscopySp().subscribe(res =>{
      this.laproscopySpDetail = res;
      console.log(this.laproscopySpDetail)
    });


  }

  
  addLaproscopySp(){
    this.Router.navigate(['/ot/laproscopysp']);
  }

  updateLaproscopySp(x){
    let id  = x.key.laproscopySpId
    this.Router.navigate(['/ot/laproscopysp/'+id]);
  }

  laproscopySpreport(x){
    let id  = x.key.patientId;
    let date =  this.formatDate(new Date(x.key.patientId)) ;

    this.Router.navigate(['/ot/report/laproscopyspreport/'+id+'/'+date]);
  }


  formatDate(date: Date) {
    return  ( date.getMonth() +1)   + "-" + date.getDate()  + "-" +date.getFullYear();
  }

}
