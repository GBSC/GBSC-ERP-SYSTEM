import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../hims/patient/services/patient.services';


@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
public diagnos : any;
  constructor(private PatientServiceobj : PatientService){

    }

 async  ngOnInit() {

    await this.PatientServiceobj.getDiagnoses();
    this.diagnos = this.PatientServiceobj.diagnoses;
    console.log(this.diagnos);
 }

 async AddDiagnoses(value) {
  let x = await this.PatientServiceobj.addDiagnoses(value.key);
  console.log(x);
}

async UpdateDiagnoses(value) {
  let x = await this.PatientServiceobj.updateDiagnoses(value.key);
  console.log(x);
}

async DeleteDiagnoses(value) {
  let x = await this.PatientServiceobj.deleteDiagnoses(value.key.diagnosisId);
  console.log(x);

}
}
