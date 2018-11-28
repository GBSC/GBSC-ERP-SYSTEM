import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs/observable/from';
import { PatientInvoice } from '../../../core/Models/HIMS/patientinvoice';
import { PatientService } from '../../../core';
import { ToastrService } from 'ngx-toastr';
import { PatientInvoiceReturnItem } from '../../../core/Models/HIMS/PatientInvoiceReturnItem';

@Component({
    selector: 'app-patient-invoice-return',
    templateUrl: './patient-invoice-return.component.html',
    styleUrls: ['./patient-invoice-return.component.scss']
})

export class PatientInvoiceReturnComponent implements OnInit {

    private ReturnForm: FormGroup;
    private CurrentDate : Date = new Date();
    private PurchaseDate : Date = new Date();
    private PatientInvoiceReturnItems : PatientInvoiceReturnItem[] = [];

    private TotalGrossReturn : number = 0;
    private TotalDiscountDeduction : number = 0;
    private TotalNetReturn : number = 0;

    private InvoiceId : number = null;
    private PatientId : number = null;


    private ReturnItem : any = {
        Nature : '',
        Name : '',
        InvoiceType : '',
        Description: '',
        UnitPrice: 0,
        SaleQuantity: 0,
        SaleGrossAmount: 0,
        SaleDiscountPercentage: 0,
        SaleDiscountAmount: 0,
        SaleNetAmount: 0,
        IsPaid: false,
        ReturnQuantity: 0,
        DiscountDeductionAmount: 0,
        ReturnNetAmount: 0,
        Remarks: '',
    };

    constructor(private PatientService : PatientService, private FormBuilder: FormBuilder, private Toastr: ToastrService) {
        this.ReturnForm = this.FormBuilder.group({
            InvoiceType: [''],
            ReturnDate: new Date(),
            Remarks: [''],
            SlipNumber : [''],
            PurchaseDate : Date,
            MRN: [''],
            PatientName: [''],
            SpouseName: [''],
            NetSale: [0],
            GrossReturn: [0],
            DeductedDiscount: [0],
            NetReturn: [0]
        });
    }

    ngOnInit() {
    }

    GetInvoiceBySlipNumber(event, SlipNumber) {
        if (event.key === 'Enter') {
            this.PatientService.GetPatientInvoiceWithDetailsBySlipNumberForReturn(SlipNumber).subscribe((res: any) => {
                console.log(res);
                this.PatientInvoiceReturnItems = [];
                this.TotalDiscountDeduction = 0;
                this.TotalGrossReturn = 0;
                this.TotalNetReturn = 0;
                if (res != null) {
                    if(res.patientInvoiceReturnId != null || res.patientInvoiceReturn != null) {
                        this.ReturnForm.reset();
                        this.Toastr.error("Return for selected invoice already exists");
                    } else {
                        this.InvoiceId = res.patientInvoiceId;
                        if(res.patientInvoiceItems.length > 0) {
                            res.patientInvoiceItems.forEach((PatientInvoiceItem : any ) => {
                                if(PatientInvoiceItem.isPaid === true) {
                                    let ReturnItem : any = {
                                        Nature : PatientInvoiceItem.nature || '',
                                        Name : PatientInvoiceItem.name || '',
                                        Description: PatientInvoiceItem.description || '',
                                        UnitPrice: PatientInvoiceItem.unitPrice || 0,
                                        SaleQuantity: PatientInvoiceItem.quantity || 0,
                                        SaleGrossAmount: PatientInvoiceItem.grossAmount || 0,
                                        SaleDiscountPercentage: PatientInvoiceItem.discountPercentage || 0,
                                        SaleDiscountAmount: PatientInvoiceItem.discountAmount || 0,
                                        SaleNetAmount: PatientInvoiceItem.netAmount || 0,
                                        IsPaid: PatientInvoiceItem.isPaid || false,
                                        ReturnQuantity: 0,
                                        DiscountDeductionAmount: 0,
                                        ReturnNetAmount: 0,
                                        Remarks: '',
                                    };
                                    // console.log(ReturnItem);
                                    this.PatientInvoiceReturnItems.push(ReturnItem);
                                    // console.log(this.PatientInvoiceReturnItems);
                                }
                            });
                        }

                        let patientname : string = '';
                        let patientmrn : string = '';
                        let partnername : string = '';

                        if(res.patient) {
                            this.PatientId = res.patientId;
                            patientname = res.patient.fullName;
                            patientmrn = res.patient.mrn;
                            if(res.patient.partner) {
                                partnername = res.patient.partner.fullName;
                            }
                        }

                        this.PurchaseDate = new Date(res.dateCreated);
                        
                        this.ReturnForm.patchValue({
                            InvoiceType : res.invoiceType || '',
                            MRN : patientmrn,
                            PatientName : patientname,
                            SpouseName : partnername,
                            NetSale : res.totalNetAmount || 0
                        });

                        this.Toastr.success("Invoice details for slip # " + SlipNumber);
                    }
                } else {
                    this.Toastr.error("Invalid Slip Number");
                }
            });
        } else {
            this.Toastr.info("Press enter to get Invoice");
        }
    }

    UpdatingModel(event) {
        // console.log(event);
        if(event.newData.ReturnQuantity) {
            if(event.newData.ReturnQuantity > event.oldData.SaleQuantity) {
                event.newData.ReturnQuantity = Number.parseFloat(event.oldData.SaleQuantity);
                this.Toastr.error("Return quantity can't be greater than purchased quantity");
            }
            event.newData.DiscountDeductionAmount = (event.oldData.SaleDiscountPercentage / 100) * (event.oldData.UnitPrice * event.newData.ReturnQuantity);
            event.newData.ReturnNetAmount = (event.oldData.UnitPrice * event.newData.ReturnQuantity) - event.newData.DiscountDeductionAmount;

            this.TotalDiscountDeduction -= event.oldData.DiscountDeductionAmount;
            this.TotalDiscountDeduction += event.newData.DiscountDeductionAmount;
            this.TotalNetReturn -= event.oldData.ReturnNetAmount;
            this.TotalNetReturn += event.newData.ReturnNetAmount;
            this.TotalGrossReturn =  this.TotalNetReturn + this.TotalDiscountDeduction;
        }
        // console.log(event.oldData, event.newData);
    }

    SubmitReturn(value) {
        // console.log(value);
        let returninvoice : any = {
            ReturnDate: new Date(value.ReturnDate).toISOString(),
            Remarks: value.Remarks,
            TotalReturnAmount: this.TotalNetReturn,
            PatientInvoiceId: this.InvoiceId,
            PatientInvoiceReturnItems: this.PatientInvoiceReturnItems
        }
        if(this.PatientId) {
            returninvoice.PatientId = this.PatientId;
        }
        // console.log(returninvoice);

        this.PatientService.AddPatientInvoiceReturn(returninvoice).subscribe((resReturn : any) => {
            console.log(resReturn);
            this.ReturnForm.reset();
            this.PatientInvoiceReturnItems = [];
            this.TotalDiscountDeduction = 0;
            this.TotalGrossReturn = 0;
            this.TotalNetReturn = 0;
            this.PatientService.GetPatientInvoice(this.InvoiceId).subscribe((resGetInvoice : PatientInvoice) => {
                console.log(resGetInvoice);
                resGetInvoice.PatientInvoiceReturnId = resReturn.patientInvoiceReturnID;
                this.PatientService.UpdatePatientInvoice(resGetInvoice).subscribe((resUpdateInvoice : any) => {
                    console.log(resUpdateInvoice);
                });
            });
        });
    }

}
