import { Component, OnInit } from '@angular/core';
import { OTService } from '../../../../core/Services/HIMS/ot.service';

@Component({
  selector: 'app-ot-procedure',
  templateUrl: './ot-procedure.component.html',
  styleUrls: ['./ot-procedure.component.css']
})
export class OtProcedureComponent implements OnInit {

  public otProcedure : any;


  constructor(public otServiceobj : OTService) { }

  ngOnInit() {
    this.otServiceobj.getOtProcedures().subscribe(res =>{
      this.otProcedure =  res;
      console.log(this.otProcedure);
    });
  }

  addOtProcedure(value){
    this.otServiceobj.addOtProcedure(value.key).subscribe(res => {
      console.log(res);
      this.otServiceobj.getOtProcedures().subscribe(res =>{
        this.otProcedure =  res;
        console.log(this.otProcedure);
      });
    })
  }

  updateOtProcedure(value){
    this.otServiceobj.updateOtProcedure(value.key).subscribe(res =>{
      console.log(res);
    });
    console.log(value)
  }
  
  deleteOtProcedure(value){
    this.otServiceobj.deleteOtProcedure(value.key.otProcedureId).subscribe(res=>{
      console.log(res);
    })
  }

}
