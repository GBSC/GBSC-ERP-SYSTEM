import { Component, OnInit } from '@angular/core';
import { PatientService, PharmacyService } from '../../../core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../../../core/Models/HIMS/appointment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientInvoice } from '../../../core/Models/HIMS/patientinvoice';
import { PatientInvoiceItem } from '../../../core/Models/HIMS/patientinvoiceitem';
import { Test } from '../../../core/Models/HIMS/Test';
import { Package } from '../../../core/Models/HIMS/packages';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { PatientPackage } from '../../../core/Models/HIMS/PatientPackage';
import { Consultant } from '../../../core/Models/HIMS/consultant';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../../../core/Models/HIMS/patient';

@Component({
    selector: 'app-appointmentpaymentreceipt',
    templateUrl: './appointmentpaymentreceipt.component.html',
    styleUrls: ['./appointmentpaymentreceipt.component.scss']
})
export class AppointmentpaymentreceiptComponent implements OnInit {
    private Consultants: Consultant[] = [];
    private Tests: Test[] = [];
    private Packages: Package[] = [];
    private InventoryItems: InventoryItem[] = [];

    private SelectedAppointment: any;
    private InvoiceForm: FormGroup;

    private PatientInvoice: PatientInvoice;
    private PatientInvoiceItem: any[] = [];
    private PatientInvoiceItemsArrayForPost: PatientInvoiceItem[] = [];

    private SelectedPatientPackage: any = {};

    private SelectedInvoiceItemUnitPrice: number;
    private SelectedInvoiceItemNameId: number;
    private SelectedInvoiceItemName: string;

    private TotalGrossAmount: number = 0;
    private TotalDiscountAmount: number = 0;
    private TotalNetAmount: number = 0;

    private Index: number = 0;

    private PatientPackage: PatientPackage;
    private OldPatientPackage: PatientPackage = null;
    private ContainsPackage: boolean = false;
    private PatientIdForPackage: number = null;
    private PatientPackageInvoiceItemIndexNumber: number = 0;

    private AppointmentDate: Date;
    private NewBalance: number = 0;
    private CurrentDate: Date = new Date();

    private TempCreditCardPercentage: number = 0;
    private TempBank: string = '';
    private TempChequeNumber: string = '';
    private TempCurrentPayment: number = 0;
    private TempPaymentMethod: string = '';

    private InvoiceType: string = '';
    private DeletedKeyIndex: number = null;

    private InvoiceItemNatureWithoutPackage: any[] = [
        { id: 1, Name: "Consultation" },
        { id: 2, Name: "Lab Test" },
        { id: 3, Name: "Medicine" },
        { id: 5, Name: "Other" }
    ];

    private InvoiceItemNature: any[] = [
        { id: 1, Name: "Consultation" },
        { id: 2, Name: "Lab Test" },
        { id: 3, Name: "Medicine" },
        { id: 4, Name: "Package" },
        { id: 5, Name: "Other" }
    ];

    private InvoiceItemNatureDataSource: any[] = this.InvoiceItemNature;

    //Update

    private SelectedPatient: any;

    constructor(private PatientService: PatientService, private Toastr: ToastrService, private PharmacyService: PharmacyService, private ActivatedRoute: ActivatedRoute, private Router: Router, private FormBuilder: FormBuilder) {
        this.InvoiceForm = this.FormBuilder.group({
            MRN: [''],
            Date: [],
            VisitNature: [''],
            SlipNumber: [''],
            PatientName: [''],
            Consultant: [''],
            SpouseName: [''],
            Package: [''],
            TotalPrice: [0],
            TotalAmountPaid: [0],
            TotalBalance: [0],
            CurrentPayment: [0],
            NewBalance: [this.NewBalance],
            Remarks: [''],
            PaymentMethod: [''],
            ChequeNumber: [''],
            Bank: [''],
            CreditCardChargesPercentage: [0],
            GrossAmount: [0],
            DiscountAmount: [0],
            NetAmount: [0],
        });
    }

    ngOnInit() {

        this.PatientService.GetTests().subscribe((res: Test[]) => {
            this.Tests = res;
            // console.log(this.Tests);
        });

        this.PatientService.GetPackages().subscribe((res: Package[]) => {
            this.Packages = res;
            // console.log(this.Packages);
        });

        this.PharmacyService.GetInventoryItemsArray().subscribe((res: InventoryItem[]) => {
            this.InventoryItems = res;
            // console.log(this.InventoryItems);
        });

        this.PatientService.GetConsultants().subscribe((res: Consultant[]) => {
            this.Consultants = res;
            // console.log(this.Consultants);
        });

        this.ActivatedRoute.params.subscribe(params => {
            if (params['id']) {
                // console.log("Add = ", (params.id.includes('mrn') === false));
                if (params.id.includes('mrn') === false) {
                    // console.log("Add");
                    this.InvoiceForm.get('MRN').disable();
                    this.InvoiceForm.get('Date').disable();
                    this.InvoiceForm.get('VisitNature').disable();
                    this.InvoiceForm.get('SlipNumber').disable();
                    this.InvoiceForm.get('PatientName').disable();

                    this.PatientService.GetAppointmentDetails(params['id']).subscribe((res: Appointment) => {
                        // console.log("Appointment Details = ", res);
                        // console.log((res.IsPaid == null || res.IsPaid == false) && (res.PatientInvoice == null && res.PatientInvoiceId == null));
                        // console.log("Invoice = ", (res.PatientInvoice == null && res.PatientInvoiceId == null));
                        // console.log("Invoie IsPaid === ", (res.IsPaid === null || res.IsPaid === false));
                        // console.log("Invoie IsPaid == ", (res.IsPaid == null || res.IsPaid == false));
                        if ((res.IsPaid == null || res.IsPaid == false) && (res.PatientInvoice == null && res.PatientInvoiceId == null)) {
                            this.SelectedAppointment = res;
                            // console.log(this.SelectedAppointment);
                            this.InvoiceType = "Appointment Invoice"
                            this.PatientIdForPackage = this.SelectedAppointment.patientId;
                            // this.CurrentDate = this.AppointmentDate;

                            this.AppointmentDate = new Date(this.SelectedAppointment.appointmentDate);

                            let packagename: string = '';
                            let totalPrice: number = 0;
                            let totalAmountPaid: number = 0;
                            let totalBalance: number = 0;

                            if (this.SelectedAppointment.patient.patientPackage) {

                                this.OldPatientPackage = this.SelectedAppointment.patient.patientPackage;
                                this.InvoiceForm.get('CurrentPayment').enable();
                                this.SelectedPatientPackage = this.Packages.find(a => a.packageId === this.SelectedAppointment.patient.patientPackage.packageId);
                                // console.log("SelectedPackage", this.SelectedPatientPackage);
                                packagename = this.SelectedPatientPackage.packageName || '';

                                // console.log("SelectedPatientPackage", this.SelectedAppointment.patient.patientPackage);
                                totalPrice = this.SelectedAppointment.patient.patientPackage.totalPrice || 0;
                                totalAmountPaid = this.SelectedAppointment.patient.patientPackage.totalAmountPaid || 0;
                                totalBalance = this.SelectedAppointment.patient.patientPackage.totalBalance || 0;
                                this.NewBalance = this.SelectedAppointment.patient.patientPackage.totalBalance || 0;

                                this.InvoiceItemNatureDataSource = this.InvoiceItemNatureWithoutPackage;

                            } else {
                                packagename = '';
                                totalPrice = 0;
                                totalAmountPaid = 0;
                                totalBalance = 0;
                            }

                            let partner: string = '';
                            if (this.SelectedAppointment.patient.partner === null)
                                partner = '';
                            else
                                partner = this.SelectedAppointment.patient.partner.firstName || '';

                            let nature: string = '';
                            if (this.SelectedAppointment.visitNature)
                                nature = this.SelectedAppointment.visitNature.nature;
                            else
                                nature = '';

                            let consultant: string = '';
                            if (this.SelectedAppointment.consultant)
                                consultant = this.SelectedAppointment.consultant.name;
                            else
                                consultant = '';

                            this.InvoiceForm.patchValue({
                                MRN: this.SelectedAppointment.patient.mrn || '',
                                VisitNature: nature || '',
                                PatientName: this.SelectedAppointment.patient.fullName || '',
                                Consultant: consultant || '',
                                SpouseName: partner || '',
                                Package: packagename || '',
                                TotalPrice: totalPrice || 0,
                                TotalAmountPaid: totalAmountPaid || 0,
                                TotalBalance: totalBalance || 0,
                            });
                        }
                        else {
                            this.Toastr.error("Invoice already exists for selected appointment");
                            this.Router.navigate(['hims/patient/paymentreceipt']);
                        }
                    });
                }
            }
            else {
                // console.log("No ID");
                this.InvoiceForm.get('MRN').enable();
                // this.InvoiceForm.get('Date').enable();
                this.InvoiceForm.get('VisitNature').enable();
                // this.InvoiceForm.get('SlipNumber').enable();
                this.InvoiceForm.get('PatientName').enable();
                this.InvoiceItemNatureDataSource = this.InvoiceItemNatureWithoutPackage;
                this.InvoiceType = "Walk-in Customer Invoice";
            }
        });
    }

    GetPatientByMRN(value, mrn: string) {
        if (value.key === "Enter") {
            this.PatientService.GetPatientWithPackageAndPartnerByMRN(mrn).subscribe((res: Patient) => {
                if (res) {
                    this.SelectedPatient = res;
                    // console.log(this.SelectedPatient);
                    this.InvoiceType = "Patient Invoice";
                    let packageName: string = '';
                    let totalPrice: number = 0;
                    let totalAmountPaid: number = 0;
                    let totalBalance: number = 0;

                    if (this.SelectedPatient.patientPackage) {
                        this.InvoiceItemNatureDataSource = this.InvoiceItemNatureWithoutPackage;
                        this.OldPatientPackage = this.SelectedPatient.patientPackage;
                        let selpackage: Package = this.Packages.find(a => a.packageId === this.SelectedPatient.patientPackage.packageId);
                        packageName = selpackage.packageName || '';
                        this.InvoiceForm.get('CurrentPayment').enable();

                        totalPrice = this.SelectedPatient.patientPackage.totalPrice;
                        totalAmountPaid = this.SelectedPatient.patientPackage.totalAmountPaid;
                        totalBalance = this.SelectedPatient.patientPackage.totalBalance;
                        this.NewBalance = this.SelectedPatient.patientPackage.totalBalance;
                    }
                    else {
                        this.InvoiceForm.get('CurrentPayment').disable();
                        this.InvoiceItemNatureDataSource = this.InvoiceItemNature;
                        packageName = '';
                        totalPrice = 0;
                        totalAmountPaid = 0;
                        totalBalance = 0;
                    }

                    let partnerName: string = '';

                    if (this.SelectedPatient.partner)
                        partnerName = this.SelectedPatient.partner.FirstName;
                    else
                        partnerName = '';

                    this.InvoiceForm.patchValue({
                        MRN: this.SelectedPatient.mrn || '',
                        // Date : this.CurrentDate,
                        PatientName: this.SelectedPatient.fullName || '',
                        SpouseName: partnerName || '',
                        Package: packageName || '',
                        TotalPrice: totalPrice || 0,
                        TotalAmountPaid: totalAmountPaid || 0,
                        TotalBalance: totalBalance || 0,
                    });
                    this.Toastr.success("Patient Information Received");

                    // this.InvoiceItemNatureDataSource = this.InvoiceItemNature;
                    this.InvoiceForm.get('MRN').disable();
                    // this.InvoiceForm.get('SpouseName').disable();
                    this.InvoiceForm.get('PatientName').disable();
                }
                else {
                    this.Toastr.error("Incorrect MRN");
                    this.SelectedPatient = null;
                }
            });
        }
        else {
            this.Toastr.info("Press Enter to get Patient details");
        }
    }

    onChange(value) {
        // console.log(value);
        this.TempPaymentMethod = value;
        if (value === "Cheque") {
            this.InvoiceForm.get('Bank').enable();
            this.InvoiceForm.get('ChequeNumber').enable();
            this.InvoiceForm.get('CreditCardChargesPercentage').disable();
        }
        else if (value === "CreditCard") {
            this.InvoiceForm.get('Bank').disable();
            this.InvoiceForm.get('ChequeNumber').disable();
            this.InvoiceForm.get('CreditCardChargesPercentage').enable();
        }
        else {
            this.InvoiceForm.get('Bank').disable();
            this.InvoiceForm.get('ChequeNumber').disable();
            this.InvoiceForm.get('CreditCardChargesPercentage').disable();
        }
    }

    CalculateNewBalance(event, CurrentPayment, TotalBalance) {
        // console.log(event);
        this.NewBalance = Number.parseFloat(TotalBalance) - Number.parseFloat(CurrentPayment);
        if (event.key === "Enter") {
            // console.log(event.code === "Enter");
            this.TempCurrentPayment = Number.parseFloat(CurrentPayment);
            this.TotalGrossAmount += Number.parseFloat(CurrentPayment);
            this.TotalNetAmount += Number.parseFloat(CurrentPayment);
            this.InvoiceForm.get('CurrentPayment').disable();
            this.Toastr.success("Package Payment Added");
        }
        else
            this.Toastr.info("Press Enter to add Package Payment");
    }

    CalculateNetAmount(event, CreditCardChargesPercentage) {
        if (event.key === "Enter") {
            this.TempCreditCardPercentage = Number.parseFloat(CreditCardChargesPercentage);
            let a: number = this.TotalNetAmount;
            this.TotalNetAmount += this.TotalNetAmount * (Number.parseFloat(CreditCardChargesPercentage) / 100);
            this.InvoiceForm.get('CreditCardChargesPercentage').disable();
            this.InvoiceForm.get('PaymentMethod').disable();
            this.Toastr.success(a * (Number.parseFloat(CreditCardChargesPercentage) / 100) + "PKR Credit Card Charges Added to Invoice");
        }
        else
            this.Toastr.info("Press Enter to add Credit Card Charges");
    }

    DisablePaymentMethod(event, ChequeNumber, Bank) {
        if (event.key === "Enter") {
            this.TempChequeNumber = ChequeNumber;
            this.TempBank = Bank;
            this.InvoiceForm.get('Bank').disable();
            this.InvoiceForm.get('ChequeNumber').disable();
            this.InvoiceForm.get('PaymentMethod').disable();
            this.Toastr.success("Payment Details Added to Invoice");
        }
        else
            this.Toastr.info("Press Enter to add Payment Details");
    }

    setNature(rowData: any, value: any): void {
        // console.log("Nature");
        rowData.id = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

    setConsultant(rowData: any, value: any): void {
        // console.log("Consultant");
        rowData.consultantId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

    setTest(rowData: any, value: any): void {
        // console.log("Test");
        rowData.testId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

    setPackage(rowData: any, value: any): void {
        // console.log("Package");
        rowData.packageId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

    setMedicine(rowData: any, value: any): void {
        // console.log("Medicine");
        rowData.inventoryItemId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

    onEditorPreparing(e) {
        // console.log(e);

        if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Consultation") {
            // e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
            return;
        }
        else if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Lab Test") {
            // e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
            return;
        }
        else if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Medicine") {
            // e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
            return;
        }
        else if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Package") {
            // e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
            return;
        }
        else if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Other") {
            // e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
            // e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
            return;
        }
        else {
            // 	e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
            // 	e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
            // 	e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
            // 	e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
            return;
        }
    }

    AddInvoiceDetail(value) {

        if (value.data.id) {

            switch (value.data.id) {

                case 'Lab Test':
                    this.SelectedInvoiceItemNameId = value.data.testId;
                    let a: Test = this.Tests.find(a => a.testId === this.SelectedInvoiceItemNameId);
                    // console.log(a);
                    this.SelectedInvoiceItemUnitPrice = a.charges || 0;
                    this.SelectedInvoiceItemName = a.testName || '';
                    break;

                case 'Consultation':
                    this.SelectedInvoiceItemNameId = value.data.consultantId;
                    let b: Consultant = this.Consultants.find(a => a.consultantId === this.SelectedInvoiceItemNameId);
                    // console.log(b);
                    this.SelectedInvoiceItemUnitPrice = b.charges || 0;
                    this.SelectedInvoiceItemName = b.name || '';
                    break;

                case 'Medicine':
                    this.SelectedInvoiceItemNameId = value.data.inventoryItemId;
                    let c: InventoryItem = this.InventoryItems.find(a => a.inventoryItemId === this.SelectedInvoiceItemNameId);
                    // console.log(c);
                    this.SelectedInvoiceItemUnitPrice = Number.parseFloat(c.retailPrice) || 0;
                    this.SelectedInvoiceItemName = c.name || '';
                    break;

                case 'Package':
                    this.SelectedInvoiceItemNameId = value.data.packageId;
                    let d: Package = this.Packages.find(a => a.packageId === value.data.packageId);
                    // console.log(d);
                    this.SelectedInvoiceItemUnitPrice = d.charges || 0;
                    this.SelectedInvoiceItemName = d.packageName || '';

                    this.ContainsPackage = true;

                    let patientpackage: any = {
                        PackageId: d.packageId,
                        PatientId: this.PatientIdForPackage,
                        TotalPrice: d.charges || 0
                    };

                    this.PatientPackageInvoiceItemIndexNumber = this.Index;
                    this.PatientPackage = patientpackage;
                    this.InvoiceItemNatureDataSource = this.InvoiceItemNatureWithoutPackage;

                    this.InvoiceForm.patchValue({
                        Package: d.packageName || '',
                        TotalPrice: <number>d.charges || 0,
                        TotalAmountPaid: 0,
                    });

                    this.InvoiceForm.get('CurrentPayment').enable();

                    break;

                case 'Other':
                    this.SelectedInvoiceItemNameId = null;
                    this.SelectedInvoiceItemUnitPrice = 1;
                    this.SelectedInvoiceItemName = "Other";
                    break;

            }

            let a: any = {
                Nature: <string>(value.data.id),
                Description: <string>(value.data.description || ''),
                UnitPrice: this.SelectedInvoiceItemUnitPrice,
                NameId: this.SelectedInvoiceItemNameId,
                Name: this.SelectedInvoiceItemName,
                Quantity: <Number>(value.data.quantity || 1),
                GrossAmount: <Number>(this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity || 1)),
                DiscountPercentage: <Number>(value.data.discountPercentage || 0),
                DiscountAmount: (this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity || 1)) * Number.parseFloat(value.data.discountPercentage || 0) / 100,
                NetAmount: (this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity || 1)) - ((this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity || 1)) * Number.parseFloat(value.data.discountPercentage || 0) / 100),
                IsPaid: <boolean>(value.data.isPaid || false)
            };

            value.data.__KEY__ = this.DeletedKeyIndex || this.Index;
            value.data.nature = value.data.id;
            value.data.name = this.SelectedInvoiceItemName;
            value.data.discountPercentage = value.data.discountPercentage || 0;
            value.data.quantity = value.data.quantity || 1;
            value.data.unitPrice = this.SelectedInvoiceItemUnitPrice;
            value.data.grossAmount = this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity || 1);
            value.data.discountAmount = Number.parseFloat(value.data.grossAmount) * Number.parseFloat(value.data.discountPercentage || 0) / 100;
            value.data.netAmount = (this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity || 1)) - (Number.parseFloat(value.data.grossAmount) * Number.parseFloat(value.data.discountPercentage || 0) / 100);

            if (this.ContainsPackage === true && value.data.id === "Package") {
                this.InvoiceForm.patchValue({
                    TotalBalance: Number.parseFloat(value.data.netAmount) || 0
                });
            }

            this.PatientInvoiceItem.push(value.data);
            this.PatientInvoiceItem.splice(this.Index, 1);

            if (value.data.isPaid === true && value.data.id != "Package") {
                this.TotalGrossAmount += Number.parseFloat(value.data.grossAmount);
                this.TotalDiscountAmount += Number.parseFloat(value.data.discountAmount);
                this.TotalNetAmount += Number.parseFloat(value.data.netAmount);
            }

            // console.log(this.TotalGrossAmount, this.TotalDiscountAmount, this.TotalNetAmount);
            this.PatientInvoiceItemsArrayForPost[this.Index] = a;
            this.Index += 1;
            // console.log("Add Display = ", this.PatientInvoiceItem);
            // console.log("Add Post = ", this.PatientInvoiceItemsArrayForPost);

            if (this.DeletedKeyIndex != null) {
                this.DeletedKeyIndex = null;
            }
        }
    }

    DeleteInvoiceDetail(value) {
        // console.log(value);
        if (value.data.isPaid === true) {
            this.TotalGrossAmount -= Number.parseFloat(value.data.grossAmount);
            this.TotalDiscountAmount -= Number.parseFloat(value.data.discountAmount);
            this.TotalNetAmount -= Number.parseFloat(value.data.netAmount);
        }

        this.PatientInvoiceItemsArrayForPost.splice(value.data.__KEY__, 1);
        // console.log("Delete Display = ", this.PatientInvoiceItem);
        // console.log("Delete Post = ", this.PatientInvoiceItemsArrayForPost);
        this.DeletedKeyIndex = Number.parseInt(value.data.__KEY__);
        this.Index -= 1;

        if (this.ContainsPackage === true && value.data.__KEY__ === this.PatientPackageInvoiceItemIndexNumber) {
            this.ContainsPackage = false;
            this.PatientPackage = null;
            this.InvoiceItemNatureDataSource = this.InvoiceItemNature;
            this.TotalGrossAmount -= this.TempCurrentPayment;
            this.TempCurrentPayment = 0;

            this.InvoiceForm.patchValue({
                Package: '',
                TotalPrice: 0,
                TotalAmountPaid: 0,
                TotalBalance: 0
            });

            this.InvoiceForm.get('CurrentPayment').disable();
        }
    }

    SubmitPatientInvoice(value) {

        let patid: number = null;
        let appid: number = null;

        if (this.SelectedAppointment) {
            patid = this.SelectedAppointment.patientId;
            appid = this.SelectedAppointment.appointmentId;
        } else if (this.SelectedPatient) {
            patid = this.SelectedPatient.patientId;
            appid = null;
        } else {
            patid = null;
            appid = null;
        }

        // console.log("Post = ", this.PatientInvoiceItemsArrayForPost);
        // console.log("Display = ", this.PatientInvoiceItem);

        // console.log(value);
        let a: any = {
            DateCreated: this.AppointmentDate || (this.CurrentDate || new Date()),
            InvoiceType: this.InvoiceType,
            TotalPrice: Number.parseFloat(value.TotalPrice) || 0,
            TotalAmountPaid: Number.parseFloat(value.TotalAmountPaid) + this.TempCurrentPayment,
            TotalBalance: this.NewBalance || 0,
            LastPaidAmount: this.TempCurrentPayment,
            InvoiceRemarks: <string>value.Remarks || '',
            Consultant: <string>value.Consultant || '',
            PaymentMethod: this.TempPaymentMethod,
            ChequeNumber: this.TempChequeNumber,
            Bank: this.TempBank,
            CreditCardChargesPercentage: this.TempCreditCardPercentage,
            CreditCardChargesAmount: <number>((this.TempCreditCardPercentage / 100) * this.TotalNetAmount) || 0,
            TotalGrossAmount: this.TotalGrossAmount,
            TotalDiscountAmount: this.TotalDiscountAmount,
            TotalNetAmount: this.TotalNetAmount,
            PatientId: patid,
            AppointmentId: appid,
            PatientInvoiceItems: this.PatientInvoiceItemsArrayForPost
        }

        this.PatientInvoice = a;
        // console.log("Patient Invoice ", this.PatientInvoice);

        this.PatientService.AddPatientInvoice(this.PatientInvoice).subscribe((res: any) => {
            // console.log(res);
            this.Toastr.success("Patient Invoice Added");
        });

        if (this.ContainsPackage === true) {
            this.PatientPackage.lastPaidAmount = this.PatientInvoice.LastPaidAmount;
            this.PatientPackage.lastPaymentDate = this.PatientInvoice.DateCreated;
            this.PatientPackage.totalAmountPaid = this.PatientInvoice.TotalAmountPaid;
            this.PatientPackage.totalBalance = this.PatientInvoice.TotalBalance;
            // console.log("Patient Package ", this.PatientPackage);

            this.PatientService.AddPatientPackage(this.PatientPackage).subscribe((res: any) => {
                // console.log(res);
                this.Toastr.success("Patient Package Added");
            });

        } else if (this.OldPatientPackage) {
            this.OldPatientPackage.lastPaidAmount = this.PatientInvoice.LastPaidAmount;
            this.OldPatientPackage.lastPaymentDate = this.PatientInvoice.DateCreated;
            this.OldPatientPackage.totalAmountPaid = this.PatientInvoice.TotalAmountPaid;
            this.OldPatientPackage.totalBalance = this.PatientInvoice.TotalBalance;
            // console.log("Old Patient Package ", this.OldPatientPackage);

            this.PatientService.UpdatePatientPackage(this.OldPatientPackage).subscribe((res: any) => {
                // console.log(res);
                this.Toastr.success("Patient package details updated");
            });
        }

        if (this.SelectedAppointment) {
            this.PatientService.GetAppointmentForInvoiceUpdate(this.SelectedAppointment.appointmentId).subscribe((res: Appointment) => {
                // console.log(res);
                res.IsPaid = true;
                this.PatientService.UpdateAppointment(res).subscribe((res: any) => {
                    // console.log(res);
                    this.Toastr.success("Appointment Updated");
                });
            });
        }

        if (this.SelectedAppointment)
            this.Router.navigate(['hims/patient/paymentreceipt/' + this.SelectedAppointment.patient.mrn]);
        else if (this.SelectedPatient)
            this.Router.navigate(['hims/patient/paymentreceipt/' + this.SelectedPatient.mrn]);
        else {
            this.Router.navigate(['hims/patient/paymentreceipt']);
            this.InvoiceForm.reset();
            this.InvoiceForm.get('MRN').enable();
            this.InvoiceForm.get('VisitNature').enable();
            this.InvoiceForm.get('PatientName').enable();
            this.InvoiceForm.get('PaymentMethod').enable();
            this.InvoiceItemNatureDataSource = this.InvoiceItemNatureWithoutPackage;
            this.InvoiceType = "Walk-in Customer Invoice";
            this.SelectedAppointment = null;
            this.PatientInvoice = null;
            this.PatientInvoiceItem = [];
            this.PatientInvoiceItemsArrayForPost = [];
            this.SelectedPatientPackage = {};
            this.SelectedInvoiceItemUnitPrice = null;
            this.SelectedInvoiceItemNameId = 0;
            this.SelectedInvoiceItemName = '';
            this.TotalGrossAmount = 0;
            this.TotalDiscountAmount = 0;
            this.TotalNetAmount = 0;
            this.Index = 0;
            this.PatientPackage = null;
            this.OldPatientPackage = null;
            this.ContainsPackage = null;
            this.PatientIdForPackage = null;
            this.PatientPackageInvoiceItemIndexNumber = 0;
            this.AppointmentDate = null;
            this.NewBalance = 0;
            this.CurrentDate = null;
            this.TempCreditCardPercentage = 0;
            this.TempBank = '';
            this.TempChequeNumber = '';
            this.TempCurrentPayment = 0;
            this.TempPaymentMethod = '';
            this.InvoiceType = '';
        }

    }
}