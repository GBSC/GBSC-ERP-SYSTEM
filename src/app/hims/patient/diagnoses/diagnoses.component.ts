import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../core';
=======
import { PatientService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
>>>>>>> master

@Component({
    selector: 'app-diagnoses',
    templateUrl: './diagnoses.component.html',
    styleUrls: ['./diagnoses.component.css']
})
export class DiagnosesComponent implements OnInit {

 
    id: number;
    public patientVisitDiagnoses= []; 

    constructor(private PatientServiceobj : PatientService, private route : ActivatedRoute) {

     }

   async ngOnInit() {
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
       let x = this.PatientServiceobj.GetPatientLastestDiagnosis(this.id).subscribe((patientVisitDiagnoses : any) => {
        this.patientVisitDiagnoses = patientVisitDiagnoses;
        console.log(patientVisitDiagnoses);
        console.log(this.patientVisitDiagnoses)
       } );
  console.log(x);
  
     });

    }

}
