import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services'
import { ActivatedRoute } from '@angular/router';
import { PatientVital } from '../../../models/patientvitals';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public id : any
  public patientVisitTest=[]; 
  constructor(private PatientServiceobj : PatientService, private route : ActivatedRoute) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {

        this.id = +params['id'];
 
       let x = this.PatientServiceobj.getpatientLatestTest(this.id).subscribe((patientVisitTest : any) => {
        this.patientVisitTest = patientVisitTest;
        console.log(patientVisitTest);
        console.log(this.patientVisitTest)
       } );
  console.log(x);
  
     });

    }

}
