import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services';
import { ActivatedRoute } from '@angular/router';
import { PatientVital } from '../../../models/patientvitals';

@Component({
    selector: 'app-diagnoses',
    templateUrl: './diagnoses.component.html',
    styleUrls: ['./diagnoses.component.css']
})
export class DiagnosesComponent implements OnInit {

 
    id: number;
    public patientVisitDiagnoses : any = {}; 

    constructor(private PatientServiceobj : PatientService, private route : ActivatedRoute) {

     }

   async ngOnInit() {
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
       let x = this.PatientServiceobj.GetPatientLastestDiagnosis(this.id).subscribe((patientVisitDiagnoses) => {
        this.patientVisitDiagnoses = patientVisitDiagnoses;
        console.log(patientVisitDiagnoses);
        console.log(this.patientVisitDiagnoses)
       } );
  console.log(x);
  
     });

    }

}
