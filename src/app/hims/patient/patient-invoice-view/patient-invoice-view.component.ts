import { Component, OnInit } from '@angular/core';
import { PatientInvoice } from '../../../core/Models/HIMS/patientinvoice';
import { PatientService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../core/Models/HIMS/patient';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-patient-invoice-view',
	templateUrl: './patient-invoice-view.component.html',
	styleUrls: ['./patient-invoice-view.component.scss']
})
export class PatientInvoiceViewComponent implements OnInit {
  private PatientInvoices : PatientInvoice[] = [];
  private CurrentDate : Date = new Date()
  private ViewForm : FormGroup;

	constructor(private PatientService : PatientService, private ActivatedRoute : ActivatedRoute, private FormBuilder : FormBuilder, private Toastr : ToastrService) {
    this.ViewForm = this.FormBuilder.group({
      MRN : [''],
      Date : Date
    });
  }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      if(params['id']) {
        // console.log("View = ", (params.id.includes('mrn') === true));
        if(params.id.includes('mrn') === true || params.id.includes('MRN') === true) {
          // console.log("View");
          this.PatientService.GetPatientInvoicesWithDetailsByMRN(params['id']).subscribe((res : Patient) => {
              // console.log(res);
              this.PatientInvoices = res.patientInvoices;
          });
		}
      }
    });
  }

  GetAllInvoicesByMRN(event, mrn : string) {
    // console.log(event);
    if(event.key === 'Enter') {
      this.PatientService.GetPatientInvoicesWithDetailsByMRN(mrn).subscribe((res : Patient) => {
        // console.log(res);
        if(res != null) {
          this.PatientInvoices = res.patientInvoices;
          this.Toastr.success("Invoices for patient with MRN : " + mrn);
        } else {
          this.Toastr.error("No invoices for selected patient or invalid MRN");
        }
    });
    } else {
      this.Toastr.info("Press enter to get patient invoice history");
    }
  }

  ViewInvoices(date : Date, mrn : string) {
    // console.log(date, mrn);
    if(mrn != null && mrn != '' && date != null) {
      // console.log(date, mrn);
      this.PatientService.GetPatientInvoicesWithDetailsByMRNandDate(mrn, date).subscribe((res : PatientInvoice[]) => {
        // console.log(res);
        if(res != null) {
          this.PatientInvoices = res;
          this.Toastr.success("Invoices for patient with MRN : " + mrn + " on Date : " + date);
        } else {
          this.Toastr.error("No invoices for this patient on this date or invalid MRN");
        }
      })
    } else if(date === null){
      // console.log(mrn);
      this.PatientService.GetPatientInvoicesWithDetailsByMRN(mrn).subscribe((res : Patient) => {
        // console.log(res);
        if(res != null) {
          this.PatientInvoices = res.patientInvoices;
          this.Toastr.success("Invoices for patient with MRN : " + mrn);
        } else {
          this.Toastr.error("No invoices for selected patient or invalid MRN");
        }
      });
    } else if(mrn === null || mrn === '') {
      // console.log(date);
      this.PatientService.GetPatientInvoicesWithDetailsByDate(date).subscribe((res : PatientInvoice[]) => {
        // console.log(res);
        if(res != null) {
          this.PatientInvoices = res;
          this.Toastr.success("Invoices for the date : " + date);
        } else {
          this.Toastr.error("No invoices for selected Date");
        }
      });
    } else {
      this.Toastr.error("Please enter MRN or select date to view Invoices");
    }
  }
}
