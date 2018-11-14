import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
 import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patientpackage',
  templateUrl: './patientpackage.component.html',
  styleUrls: ['./patientpackage.component.scss']
})
export class PatientpackageComponent implements OnInit {
public id : any;

  constructor(private PatientService: PatientService , private Router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      // let x = this.PatientService.GetPatientVisits(this.id).subscribe(res =>{
      //     // this.visits = res
      //     // console.log(this.visits);
      // } );
   
  });
    
  }


}
