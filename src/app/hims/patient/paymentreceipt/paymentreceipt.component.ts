import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Route , ActivatedRoute} from '@angular/router'


@Component({
    selector: 'app-paymentreceipt',
    templateUrl: './paymentreceipt.component.html',
    styleUrls: ['./paymentreceipt.component.css']
})
export class PaymentreceiptComponent implements OnInit {

    private SelectedPatient : any;
    private Appointments : Appointment[] = [];
    private SelectedAppointment : Appointment;
    private paymentForm : FormGroup;

    id: number;


    private nature: any[] = ['Select Nature', 'Package', 'Lab Tests', 'Medicines', 'Others'];
    //constructor(private PatientServiceobj: PatientService , private formBuilder : FormBuilder , private Toast : ToastrService ,private route : ActivatedRoute) { 

    constructor(private PatientService : PatientService, private FormBuilder : FormBuilder, private Toastr : ToastrService, private route : ActivatedRoute) {
        this.paymentForm = this.FormBuilder.group({
            MRN : ['']
        });
    }

    async  ngOnInit() {


        this.route.params.subscribe(params => {
            this.id = +params['id'];
            
            console.log(this.id);


        });



        // await this.PatientServiceobj.getPatient();
        // let par = this.PatientServiceobj.patients;
        // console.log(par);

        this.route.params.subscribe(params => {
            this.PatientService.GetAppointmentById(params['id']).subscribe((res : Appointment) => {
                this.SelectedAppointment = res;
            });
        });

    }

    GetPatientByMrn(mrn : string, keycode){
       if(keycode.key === "Enter") {
           console.log(mrn);
           
            this.PatientService.SearchPatientByMrn(mrn).subscribe((res : any) => {
                if(res === null)
                    this.Toastr.error("Incorrect MRN");
                else
                    this.SelectedPatient = res;
            });
        }
    }

    GetAppointmentByDateAndPatientID(date : Date) {
        // console.log(date);
        this.PatientService.GetAppointmentsByDateAndPatientID(date, this.SelectedPatient.patientId).subscribe((res : Appointment[]) => {
            this.Appointments = res;
        });
    }



}
 