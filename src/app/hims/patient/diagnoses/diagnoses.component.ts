import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../core';
import { Diagnoses } from '../../../core/Models/HIMS/diagnoses';
import { VisitDiagnosis } from '../../../core/Models/HIMS/visitdiagnoses';

@Component({
    selector: 'app-diagnoses',
    templateUrl: './diagnoses.component.html',
    styleUrls: ['./diagnoses.component.css']
})
export class DiagnosesComponent implements OnInit {

 
    id: number;
    public patientVisitDiagnoses : VisitDiagnosis[] = []; 

    constructor(private PatientServiceobj : PatientService, private route : ActivatedRoute) {

     }

   async ngOnInit() {
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
        this.PatientServiceobj.GetPatientLastestDiagnosis(this.id).subscribe((res : VisitDiagnosis) => {
            this.patientVisitDiagnoses.push(res);
        })
  
     });

    }

}
