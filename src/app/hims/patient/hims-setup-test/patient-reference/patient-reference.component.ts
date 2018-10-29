import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../core';
  

@Component({
  selector: 'app-patient-reference',
  templateUrl: './patient-reference.component.html',
  styleUrls: ['./patient-reference.component.scss']
})
export class PatientReferenceComponent implements OnInit {

  public reference : any;

  constructor( private   PatientServiceobj : PatientService) { }

async  ngOnInit() {

    this.reference  = await this.PatientServiceobj.getRefference();
    console.log(this.reference);

  }

 async addreference(value){
  let x = await this.PatientServiceobj.addRefference(value.key);
  console.log(x);
  this.reference  = await this.PatientServiceobj.getRefference();

  }

  async updatereference(value){
    let x = await this.PatientServiceobj.updateRefference(value.key);
    console.log(x);
    this.reference  = await this.PatientServiceobj.getRefference();

  }

  async deletereference(value){
    let x = await this.PatientServiceobj.deleteRefference(value.key.patientReferenceId);
    console.log(x);
    this.reference  = await this.PatientServiceobj.getRefference();

  }


}
