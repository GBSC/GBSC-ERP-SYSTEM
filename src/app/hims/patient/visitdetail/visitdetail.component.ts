import { Component, OnInit} from '@angular/core';
import {PatientService} from '../../../hims/patient/services/patient.services'
import { ActivatedRoute } from '@angular/router';
import { Visits } from '../../../models/visits';

import { Appointment } from '../../../models/appointment';
import { Consultant } from '../../../models/consultant';

@Component({
  selector: 'app-visitdetail',
  templateUrl: './visitdetail.component.html',
  styleUrls: ['./visitdetail.component.scss']
})
export class VisitdetailComponent implements OnInit {

  id: number;
  public consultant : any = {}; 
  public visitnature : any = {};
  public visit : any = {}; 
  public appointment : any = {};
  private testing : any = {}; 
  public consult :Consultant;
  constructor(private PatientServiceobj : PatientService, private route : ActivatedRoute) {

   }

  async ngOnInit() {
  await  this.PatientServiceobj.getConsultant();
         this.consultant = this.PatientServiceobj.consultant;
         console.log(this.consultant)
    this.route.params.subscribe(params => {

      this.id = +params['id'];
      
      let x = this.PatientServiceobj.Getvisit(this.id).subscribe(visit=> this.visit = visit );
      console.log(x);
      
    });
    
    this.route.params.subscribe(params => {
      
      this.id = +params['id'];
      
      let x = this.PatientServiceobj.GetAppointmentByVisit(this.id).subscribe((appointment : any)=> {
        this.appointment = appointment;
        // console.log(this.consultant);
        this.testing  = this.consultant.find(t => t.consultantId === appointment.consultantId);
      console.log(appointment);
      console.log(this.testing.name);
      console.log(this.consultant)
    } );
    console.log(x);
    
  });
  
  
  
  

  }
  

}
