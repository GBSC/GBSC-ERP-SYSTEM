import { Component, OnInit } from '@angular/core';
import { PatientInvoice } from '../../../core/Models/HIMS/patientinvoice';
import { PatientService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../core/Models/HIMS/patient';

@Component({
    selector: 'app-patient-invoice-view',
    templateUrl: './patient-invoice-view.component.html',
    styleUrls: ['./patient-invoice-view.component.scss']
})
export class PatientInvoiceViewComponent implements OnInit {
    private PatientInvoices: PatientInvoice[] = [];

    constructor(private PatientService: PatientService, private ActivatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.ActivatedRoute.params.subscribe(params => {
            if (params['id']) {
                this.PatientService.GetPatientInvoicesWithDetailsByMRN(params['id']).subscribe((res: Patient) => {
                    console.log(res);
                    this.PatientInvoices = res.patientInvoices;
                });
            }
        });
    }

}
