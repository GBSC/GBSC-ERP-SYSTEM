import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../core/Services/HIMS/patient.services';


@Component({
  selector: 'app-visitnature',
  templateUrl: './visitnature.component.html',
  styleUrls: ['./visitnature.component.scss']
})
export class VisitnatureComponent implements OnInit {
  public visitnatr: any;
  constructor(private PatientServiceobj: PatientService) { }

  async ngOnInit() {
    await this.PatientServiceobj.GetVisitNatures();
    this.visitnatr = this.PatientServiceobj.visitNatures;
    console.log(this.visitnatr);
}

async AddVisitNature(value) {
    let x = await this.PatientServiceobj.AddVisitNature(value.key);
    console.log(x);
}

async UpdateVisitNature(value) {
    let x = await this.PatientServiceobj.UpdateVisitNature(value.key);
    console.log(x);
}

async DeleteVisitNature(value) {
    let x = await this.PatientServiceobj.DeleteVisitNature(value.key.visitNatureId);
    console.log(x);

}
}
