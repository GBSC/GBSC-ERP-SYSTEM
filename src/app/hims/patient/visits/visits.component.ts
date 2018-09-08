import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {PatientService} from '../../../hims/patient/services/patient.services'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../models/patient';
import { Visits } from '../../../models/visits';
 import {Location} from '@angular/common';




@Component({
    selector: 'app-visits',
    templateUrl: './visits.component.html',
    styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

    public PatientVisitNoteForm: FormGroup;

    public currentPatient: any;
    public visitid : any;
    id: number;
    vistid: number;
    Patient : Patient;
    Visits : Visits;
    
    // private _location: Location ,
    constructor( private formBuilder: FormBuilder,private PatientServiceobj : PatientService , private router: Router,  private route : ActivatedRoute) { 

        this.PatientVisitNoteForm = this.formBuilder.group({
            'ClinicalNote' : ['',Validators.required],
            'VisitId' :['',Validators.required],
        })
    }

   async ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = +params['id'];
     
           this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe((Patient)=> {

            this.Patient = Patient;
            console.log(Patient.PatientId)
         });
           
         });
        
          console.log(this.id);
    
        this.vistid = await this.PatientServiceobj.visitid.visitID;
     }

    onSubmit()  {
        
        //console.log(this.PatientServiceobj.currentPatient);
       // console.log(this.id);
        this.router.navigate(['/hims/patient/patientvitals/'+this.vistid]);
        console.log(this.visitid);

    }

  async  onEndVisit()
    {
// this._location.back();
//let x = await this.PatientServiceobj.endVisit(this.vistid, value);
// console.log(x);
//   this.router.navigate(['/hims/patient/profile/'+this.id]);
// last
// "await this.PatientServiceobj.endVisit(this.vistid , value);
//  this.router.navigate(['/hims/patient/visits/'+this.id]);

      let x = await this.PatientServiceobj.getVisitId(this.id);
      await this.PatientServiceobj.endVisit(this.vistid , x);
      console.log(x)
        console.log(this.id);
    }

    async onsubmit(value){
        let y = await this.PatientServiceobj.visitid.visitID;
 
        this.PatientVisitNoteForm.value.VisitId = y

       let x=  await this.PatientServiceobj.addVisitNote(value);
       console.log(x)
    }



    // backClicked() {
    //     this._location.back();
    // }
    

}
