import { Component, OnInit } from '@angular/core';
import { OTService } from '../../../../core/Services/HIMS/ot.service';

@Component({
  selector: 'app-ot-equipment',
  templateUrl: './ot-equipment.component.html',
  styleUrls: ['./ot-equipment.component.css']
})
export class OtEquipmentComponent implements OnInit {

  public otEquipment : any;

  constructor(public otServiceobj : OTService) { }

  ngOnInit() {
    this.otServiceobj.getOtEquipments().subscribe(res =>{
      this.otEquipment =  res;
      console.log(this.otEquipment);
    });
  }
  addOtEquipment(value){
    this.otServiceobj.addOtEquipment(value.key).subscribe(res => {
      console.log(res);
      this.otServiceobj.getOtEquipments().subscribe(res =>{
        this.otEquipment =  res;
        console.log(this.otEquipment);
      });
    })
  }

  updateOtEquipment(value){
    this.otServiceobj.updateOtEquipment(value.key).subscribe(res =>{
      console.log(res);
    });
    console.log(value)
  }
  deleteOtEquipment(value){
    this.otServiceobj.deleteOtEquipment(value.key.otEquipmentId).subscribe(res=>{
      console.log(res);
    })
  }
}
