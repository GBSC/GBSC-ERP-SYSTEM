import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../../../core/Models/HIMS/patient';
import { Appointment } from '../../../core/Models/HIMS/appointment';
import { ActivatedRoute ,Router } from '@angular/router';
 
@Component({
    selector: 'app-paymentreceipt',
    templateUrl: './paymentreceipt.component.html',
    styleUrls: ['./paymentreceipt.component.css']
})
export class PaymentreceiptComponent implements OnInit {

    private SelectedPatient : any;
    private Appointments : Appointment[] = [];
    // private SelectedAppointment : Appointment;

    id: number;


    private nature: any[] = ['Select Nature', 'Package', 'Lab Tests', 'Medicines', 'Others'];
    //constructor(private PatientServiceobj: PatientService , private formBuilder : FormBuilder , private Toast : ToastrService ,private route : ActivatedRoute) { 

    constructor(private PatientService : PatientService, private Toastr : ToastrService, private ActivatedRoute : ActivatedRoute , private Router : Router) {
    }

    async  ngOnInit() {
        
        this.ActivatedRoute.params.subscribe(params => {
            if(params['id']) {
                this.Router.navigate(['hims/patient/appointmentpaymentreceipt/' + params['id']]);
                // this.PatientService.GetAppointmentById(params['id']).subscribe((res : Appointment) => {
                //     this.SelectedAppointment = res;
                // });
            }
        });

    }

    GetPatientByMrn(mrn : string, keycode){
       if(keycode.key === "Enter") {
        //    console.log(mrn);
            this.PatientService.SearchPatientByMrn(mrn).subscribe((res : any) => {
                if(res === null) {
                    this.Toastr.error("Incorrect MRN");
                }
                else {
                    this.SelectedPatient = res;
                    this.Toastr.success("Patient Selected");
                }
            });
        }
    }

    GetAppointmentByDateAndPatientID(date : Date) {
        // console.log(date);
        this.PatientService.GetFinalizedAppointmentsByDateAndPatientID(date, this.SelectedPatient.patientId).subscribe((res : Appointment[]) => {
            this.Appointments = res;
            this.Toastr.success("Appointments Updated");
        });
    }

    ViewInvoice(value) {
        // this.SelectedAppointment = this.Appointments.find(a => a.AppointmentId === value.data.appointmentId);
        // console.log("SelectedAppointment", this.SelectedAppointment);
        // this.Router.navigate(['/appointmentpaymentreceipt/' + this.SelectedAppointment.AppointmentId]);
        this.Router.navigate(['hims/patient/appointmentpaymentreceipt/' + value.data.appointmentId]);
    }



}
 