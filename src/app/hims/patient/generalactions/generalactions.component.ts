import { Component, OnInit, VERSION } from '@angular/core';
import { PatientService } from '../../../core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../core/Models/HIMS/patient';
import date_box from 'devextreme/ui/date_box';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-generalactions',
    templateUrl: './generalactions.component.html',
    styleUrls: ['./generalactions.component.css']
})
export class GeneralactionsComponent implements OnInit {

    version = VERSION.full;

    public currentPatient: any;
    public visitid: any;
    id: number;
    public Patient: any;
    public lastpatientvisit: any;
    public visits: any;

    public time: any;

    constructor(private toastr: ToastrService, private PatientServiceobj: PatientService, private router: Router, private route: ActivatedRoute) { }

    async  ngOnInit() {

        this.time = new Date();

        this.route.params.subscribe(params => {

            this.id = +params['id'];

            this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe(Patient => this.Patient = Patient);

            this.PatientServiceobj.GetPatientVisits(this.id).subscribe((res) => {
                this.visits = res
                console.log(this.visits);
            });
        });

        this.lastpatientvisit = await this.PatientServiceobj.GetLastestVisitByPatientId(this.id)


        this.currentPatient = this.PatientServiceobj.getpatient(this.id).subscribe(Patient => this.Patient = Patient);
        console.log( this.currentPatient);
        console.log(this.Patient);

        console.log(this.Patient);
        
    }
    async startVisit() {
         if(this.Patient.appointments.length){
                      if(this.Patient.appointments.find(t => t.appointmentDate === this.formatDate(new Date())  && t.isFinalAppointment == true )  ){
                         
                      if(this.lastpatientvisit === null){
                          console.log(this.lastpatientvisit);
                          console.log('1');
                                await this.PatientServiceobj.AddVisits(this.id);
                                this.router.navigate(['/hims/patient/visits/' + this.id]);
                           }
                           else  if (this.formatDate(new Date(this.lastpatientvisit.endTime)) == this.formatDate(new Date())) {
                                     this.displayToastError("Cannot create more than 1 visit on the same day")
                                }
                                else {
                                        await this.PatientServiceobj.AddVisits(this.id);
                                        console.log('2');
                                        this.router.navigate(['/hims/patient/visits/' + this.id]);
                                    }
                    
                 }
                  else{
                    this.displayToastError("Current Date Appointment Not Schedule")
                  }
        }

        else{
            this.displayToastError("Appointment Not Schedule");
        }

    }

    formatDate(date: Date) {

        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    }


    async Endvisit() {
        let x = await this.PatientServiceobj.endVisit(this.visits[0].visitId, this.visits[0]);
        this.lastpatientvisit = await this.PatientServiceobj.GetLastestVisitByPatientId(this.id)
    }

    displayToastSuccess(message) {

        this.toastr.success(message);

    }

    displayToastError(message) {
        this.toastr.error(message);

    }

}