import { Component, OnInit } from '@angular/core';
import { OTService } from '../../../../core/Services/HIMS/ot.service';

@Component({
  selector: 'app-ot-terminologies',
  templateUrl: './ot-terminologies.component.html',
  styleUrls: ['./ot-terminologies.component.css']
})
export class OtTerminologiesComponent implements OnInit {

  public otTerminology : any;

  constructor(public otServiceobj : OTService) { }

  ngOnInit() {
    this.otServiceobj.getOtTerminologys().subscribe(res =>{
      this.otTerminology =  res;
      console.log(this.otTerminology);
    });
  }

  addOtTerminology(value){
    this.otServiceobj.addOtTerminology(value.key).subscribe(res => {
      console.log(res);
      this.otServiceobj.getOtTerminologys().subscribe(res =>{
        this.otTerminology =  res;
        console.log(this.otTerminology);
      });
    })
  }

  updateOtTerminology(value){
    this.otServiceobj.updateOtTerminology(value.key).subscribe(res =>{
      console.log(res);
    });
    console.log(value)
  }

  deleteOtTerminology(value){
    this.otServiceobj.deleteOtTerminology(value.key.otTerminologyId).subscribe(res=>{
      console.log(res);
    })
  }
}
