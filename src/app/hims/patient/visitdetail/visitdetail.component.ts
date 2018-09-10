import { Component, OnInit} from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services'
import { ActivatedRoute } from '@angular/router';
import { Visits } from '../../../models/visits';


@Component({
  selector: 'app-visitdetail',
  templateUrl: './visitdetail.component.html',
  styleUrls: ['./visitdetail.component.scss']
})
export class VisitdetailComponent implements OnInit {

  id: number;

  public visit : any = {}; 

  constructor(private PatientServiceobj : PatientService, private route : ActivatedRoute) {

   }

  async ngOnInit() {

this.route.params.subscribe(params => {

       this.id = +params['id'];

      let x = this.PatientServiceobj.Getvisit(this.id).subscribe(visit=> this.visit = visit );
 console.log(x);
    });
  
  }
  

}
