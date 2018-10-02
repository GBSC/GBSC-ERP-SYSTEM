import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services';
import { ActivatedRoute } from '@angular/router';
import { PatientVital } from '../../../models/patientvitals';



@Component({
    selector: 'app-vitals',
    templateUrl: './vitals.component.html',
    styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

    public leatestPatientVitals ={};
 
    id: number;

    // patientVital :  PatientVital   ;
    public patientVital : any = {}; 
    constructor(private PatientServiceobj : PatientService, private route : ActivatedRoute) { }

   async ngOnInit() {
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
       let x = this.PatientServiceobj.GetLastestPatientVital(this.id).subscribe(patientVital => this.patientVital = patientVital );
  console.log(x);
  
     });

    }

}
