import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient/services/patient.services';

@Component({
  selector: 'app-appointment-scheduling',
  templateUrl: './appointment-scheduling.component.html',
  styleUrls: ['./appointment-scheduling.component.css']
})
export class AppointmentSchedulingComponent implements OnInit {

  transformations = [
    {
        key: "Flip",
        items: [ 
            { name: "0 degrees", value: "scaleX(1)" }, 
            { name: "180 degrees", value: "scaleX(-1)" }
        ]
    },
];

  constructor(private PatientServiceobj: PatientService,) { }

async  ngOnInit() {
    await this.PatientServiceobj.getPatient();
    let par = this.PatientServiceobj.patients;
    console.log(par);
    return par;
  }

}
