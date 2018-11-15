import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../../../core/Models/HIMS/patient';
import { Appointment } from '../../../core/Models/HIMS/appointment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-paymentreceipt',
    templateUrl: './paymentreceipt.component.html',
    styleUrls: ['./paymentreceipt.component.css']
})
export class PaymentreceiptComponent implements OnInit {

    private Appointments: Appointment[] = [];
    // private SelectedAppointment : Appointment;

    id: number;


    private nature: any[] = ['Select Nature', 'Package', 'Lab Tests', 'Medicines', 'Others'];
    //constructor(private PatientServiceobj: PatientService , private formBuilder : FormBuilder , private Toast : ToastrService ,private route : ActivatedRoute) { 

    constructor(private PatientService: PatientService, private Toastr: ToastrService, private ActivatedRoute: ActivatedRoute, private Router: Router) {
    }

    async  ngOnInit() {

        this.ActivatedRoute.params.subscribe(params => {
            if (params['id']) {
                this.id = params['id'];
                this.Router.navigate(['hims/patient/paymentreceipt/' + params['id']]);
            }
        });

    }

    GetAppointmentsByMRN(mrn: string) {
        this.PatientService.GetFinalizedAppointmentsByMRN(mrn).subscribe((res: Appointment[]) => {
            this.Appointments = res;
            console.log(this.Appointments);
        });
    }

    GenerateInvoice(value) {
        this.Router.navigate(['hims/patient/paymentreceipt/' + value.data.appointmentId]);
    }

    ViewInvoice(value) {
        console.log(value.data);
    }



}
