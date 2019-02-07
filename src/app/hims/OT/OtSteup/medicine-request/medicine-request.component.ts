import { Component, OnInit } from '@angular/core';
import { OTService } from '../../../../core/Services/HIMS/ot.service';

@Component({
  selector: 'app-medicine-request',
  templateUrl: './medicine-request.component.html',
  styleUrls: ['./medicine-request.component.css']
})
export class MedicineRequestComponent implements OnInit {

  public medicineRequest : any;

  constructor(public otServiceobj : OTService) { }

  ngOnInit() {
    this.otServiceobj.getMedicineRequests().subscribe(res =>{
      this.medicineRequest =  res;
      console.log(this.medicineRequest);
    });
  }

  addMedicineRequest(value){
    console.log(value)
    this.otServiceobj.addMedicineRequest(value.key).subscribe(res => {
      console.log(res);
      this.otServiceobj.getMedicineRequests().subscribe(res =>{
        this.medicineRequest =  res;
        console.log(this.medicineRequest);
      });
    })
  }

  updateMedicineRequest(value){
    this.otServiceobj.updateMedicineRequest(value.key).subscribe(res =>{
      console.log(res);
    });
    console.log(value)
  }

  deleteMedicineRequest(value){
    this.otServiceobj.deleteMedicineRequest(value.key.medicineRequestId).subscribe(res=>{
      console.log(res);
    })
  }


}
