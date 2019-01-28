import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { OTService } from '../../../../core/Services/HIMS/ot.service';


@Component({
  selector: 'app-laproscopy-fs-detail',
  templateUrl: './laproscopy-fs-detail.component.html',
  styleUrls: ['./laproscopy-fs-detail.component.css']
})
export class LaproscopyFsDetailComponent implements OnInit {

  public laproscopyFsDetail : any
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

    this.otserviceobj.getLaproscopyFs().subscribe(res =>{
      this.laproscopyFsDetail = res;
      console.log(this.laproscopyFsDetail)
    });

  }

  addLaproscopyFs(){
    this.Router.navigate(['/ot/laproscopyfs']);
  }

  updateLaproscopyFs(x){
    let id  = x.key.laproscopyFSId
    this.Router.navigate(['/ot/laproscopyfs/'+id]);
  }

  laproscopyFsreport(x){
    let id  = x.key.patientId;
    let date =  this.formatDate(new Date(x.key.laproscopyFsDate)) ;

    this.Router.navigate(['/ot/report/laproscopyfsreport/'+id+'/'+date]);
  }


  formatDate(date: Date) {
    return  ( date.getMonth() +1)   + "-" + date.getDate()  + "-" +date.getFullYear();
  }

}
