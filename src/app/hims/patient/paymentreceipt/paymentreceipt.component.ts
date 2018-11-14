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

    constructor(private PatientService: PatientService, private Toastr: ToastrService, private ActivatedRoute: ActivatedRoute, private Router: Router) {

    }
    
    private showApp = { 'active show' : 'app' };
    private showMRN = { 'active show' : '' };
    private showID = { 'active show' : '' };

    async  ngOnInit() {

        this.ActivatedRoute.params.subscribe(params => {
            if(params['id']) {
                let idOrMrn = params;
                if(idOrMrn.id.includes('MRN') || idOrMrn.id.includes('mrn')) {
                    this.showMRN = { 'active show' : 'mrn' };
                    this.showApp = { 'active show' : '' };
                    this.showID = { 'active show' : '' };
                }else if(idOrMrn.id) {
                    this.showID = { 'active show' : 'id' };
                    this.showMRN = { 'active show' : '' };
                    this.showApp = { 'active show' : '' };
                } else {
                    this.showID = { 'active show' : '' };
                    this.showMRN = { 'active show' : '' };
                    this.showApp = { 'active show' : 'app' };
                } 
            } else{
                this.Router.navigate(['hims/patient/paymentreceipt']);
            }
        });

    }

    GetAppointmentsByMRN(mrn: string) {
        this.PatientService.GetFinalizedAppointmentsByMRN(mrn).subscribe((res: Appointment[]) => {
            this.Appointments = res;
            console.log(this.Appointments);
        });
    }

    SwitchTab(what, row, mrn) {
        // console.log(what);
        // console.log(row);
        // console.log(mrn);
        
        if (what === 'id') {
            this.Router.navigate(['hims/patient/paymentreceipt/' + row.data.appointmentId]);
            // console.log('In Add Invoice')
        } else if (what === 'mrn') {
            // console.log('In View Invoice')
            this.Router.navigate(['hims/patient/paymentreceipt/' + mrn]);
        }
    }



}
