import { Component, OnInit } from '@angular/core';
import { PatientInvoiceReturn } from '../../../core/Models/HIMS/PatientInvoiceReturn';
import { PatientService } from '../../../core';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../../../core/Models/HIMS/patient';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-invoice-return-view',
    templateUrl: './invoice-return-view.component.html',
    styleUrls: ['./invoice-return-view.component.scss']
})
export class InvoiceReturnViewComponent implements OnInit {
    private CurrentDate: Date = new Date();
    private ReturnViewForm: FormGroup;
    private InvoiceReturns: any[] = [];

    constructor(private PatientService: PatientService, private Toastr: ToastrService, private FormBuilder: FormBuilder) {
        this.ReturnViewForm = this.FormBuilder.group({
            MRN: [''],
            ReturnNumber: [''],
            InvoiceNumber: [''],
            Date: Date
        });
    }

    ngOnInit() {
        this.PatientService.GetPatientInvoiceReturnsWithDetailsByDate(this.CurrentDate.toISOString()).subscribe((res: PatientInvoiceReturn[]) => {
            // console.log(res);
            if (res.length > 0) {
                this.InvoiceReturns = res;
                this.Toastr.success("Return Invoice successfully retrieved for " + this.CurrentDate.toString());
            } else {
                this.Toastr.error("No returns for " + this.CurrentDate.toString());
                // this.ReturnViewForm.reset();
            }
        });
    }

    GetAllInvoiceReturnsByMRN(event, mrn: string) {
        if (event.key === 'Enter') {
            this.PatientService.GetPatientInvoiceReturnsWithDetailsByMRN(mrn).subscribe((res: PatientInvoiceReturn[]) => {
                this.InvoiceReturns = [];
                // console.log(res);
                if (res === null) {
                    this.Toastr.error("Invalid MRN");
                } else if (res.length > 0) {
                    this.InvoiceReturns = res;
                    this.Toastr.success("Return Invoices successfully retrieved for Patient with " + mrn);
                    this.ReturnViewForm.patchValue({
                        InvoiceNumber: [''],
                        ReturnNumber: [''],
                        Date: []
                    });
                } else {
                    this.Toastr.error("No returns for Patient with " + mrn);
                    // this.ReturnViewForm.reset();
                }
            });
        } else {
            this.Toastr.info("Press enter to get Return Invoices");
        }
    }

    GetAllInvoiceReturnByReturnNumber(event, returnnumber: string) {
        if (event.key === 'Enter') {
            this.PatientService.GetPatientInvoiceReturnWithDetailsByReturnNumber(returnnumber).subscribe((res: PatientInvoiceReturn) => {
                this.InvoiceReturns = [];
                // console.log(res);
                if (res != null) {
                    this.InvoiceReturns.push(res);
                    this.Toastr.success("Return Invoice successfully retrieved with Return Number " + returnnumber);
                    this.ReturnViewForm.patchValue({
                        MRN: [''],
                        InvoiceNumber: [''],
                        Date: []
                    });
                } else {
                    this.Toastr.error("Invalid Return Number");
                    // this.ReturnViewForm.reset();
                }
            });
        } else {
            this.Toastr.info("Press enter to get Return Invoice");
        }
    }

    GetAllInvoiceReturnByInvoiceNumber(event, invoicenumber: string) {
        if (event.key === 'Enter') {
            this.PatientService.GetPatientInvoiceReturnWithDetailsByInvoiceNumber(invoicenumber).subscribe((res: PatientInvoiceReturn) => {
                this.InvoiceReturns = [];
                // console.log(res);
                if (res != null) {
                    this.InvoiceReturns.push(res);
                    this.Toastr.success("Return Invoice successfully retrieved with Slip Number " + invoicenumber);
                    this.ReturnViewForm.patchValue({
                        MRN: [''],
                        ReturnNumber: [''],
                        Date: []
                    });
                } else {
                    this.Toastr.error("No returns for Invoice with number " + invoicenumber);
                }
            });
        } else {
            this.Toastr.info("Press enter to get Return Invoice");
        }
    }

    GetAllInvoiceReturnsByDate(date: string) {
        this.PatientService.GetPatientInvoiceReturnsWithDetailsByDate(date).subscribe((res: PatientInvoiceReturn[]) => {
            this.InvoiceReturns = [];
            // console.log(res);
            if (res.length > 0) {
                this.InvoiceReturns = res;
                this.Toastr.success("Return Invoices successfully retrieved for Date " + date);
            } else {
                this.Toastr.error("No returns for Date " + date);
                // this.ReturnViewForm.reset();
            }
        });
    }

    ViewInvoiceReturns(date: string, returnnumber: string, mrn: string, invoicenumber: string) {
        // console.log("a");
    }

}
