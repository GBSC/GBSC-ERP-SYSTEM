import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { PharmacyService, PatientService } from '../../../core';
import { SalesIndentItem } from '../../../core/Models/Pharmacy/SalesIndentItem';
import { Patient } from '../../../core/Models/HIMS/patient';
import { ActivatedRoute } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { SalesIndent } from '../../../core/Models/Pharmacy/SalesIndent';

@Component({
    selector: 'app-visit-prescription',
    templateUrl: './visit-prescription.component.html',
    styleUrls: ['./visit-prescription.component.scss']
})

export class VisitPrescriptionComponent implements OnInit {
    @ViewChild(DxDataGridComponent) gridContainer: DxDataGridComponent

    public InventoryItems: InventoryItem;
    public InventoryItemDataSource: InventoryItem;
    public FilteredInventoryItems: any;
    public SelectedInventoryItem: any;

    public CurrentPatient: any;
    // public CurrentPatientID : number;

    public Prescriptions: any[] = [];
    public SalesIndentItems: SalesIndentItem[] = [];
    public SalesIndent: SalesIndent;

    public TotalQuantity: number = 0;
    public TotalCostPrice: number = 0;
    public TotoalRetailPrice: number = 0;

    public Index: number = 0;

    constructor(public PharmacyService: PharmacyService, public PatientService: PatientService, public Router: ActivatedRoute) {
    }

    async ngOnInit() {
        this.PharmacyService.GetInventoryItems().subscribe((res: any) => {
            this.InventoryItems = res;
            this.FilteredInventoryItems = this.InventoryItems;
            this.InventoryItemDataSource = this.InventoryItems;
        });

        this.Router.params.subscribe(params => {
            // this.CurrentPatientID = params['id'];
            this.PatientService.getpatient(params['id']).subscribe((res: Patient) => {
                this.CurrentPatient = res;
                // console.log(this.CurrentPatient);
            });
        });
    }

    onEditorPreparing(e) {
        this.InventoryItemDataSource = this.FilteredInventoryItems;
    }

    addDays(date: Date, days: string): Date {
        // console.log("Before : ", date);
        date.setDate(date.getDate() + Number.parseInt(days));
        // console.log("After : ", date);
        return date;
    }

    AddPrescription(value) {
        // var startDate : Date = new Date(value.data.treatmentStart);
        var endDate: Date = new Date(value.data.treatmentStart);
        // var daysAdded = value.data.treatmentTimeInDays;
        endDate = this.addDays(endDate, value.data.treatmentTimeInDays);
        // startDate = value.data.treatmentStart;

        this.SelectedInventoryItem = this.FilteredInventoryItems.find(a => a.inventoryItemId == value.data.inventoryItemId);
        // console.log("SelectedInventoryItem", this.SelectedInventoryItem);

        var a: any = {
            inventoryItemId: <number>value.data.inventoryItemId,
            treatmentStart: value.data.treatmentStart,
            treatmentTimeInDays: value.data.treatmentTimeInDays,
            treatmentEnd: endDate,
            dosage: <number>value.data.dosage,
            index: this.Index
        };

        // console.log(a);
        this.Prescriptions.push(a);
        // console.log(this.Prescriptions);
        this.Prescriptions.splice(this.Index, 1);
        // console.log(this.Prescriptions);
        // this.SalesIndentItems.push(a);
        this.TotalQuantity += Number.parseInt(value.data.dosage) * Number.parseInt(value.data.treatmentTimeInDays);
        this.TotalCostPrice += Number.parseInt(value.data.dosage) * Number.parseInt(value.data.treatmentTimeInDays) * Number.parseFloat(this.SelectedInventoryItem.costPrice);
        this.TotoalRetailPrice += Number.parseInt(value.data.dosage) * Number.parseInt(value.data.treatmentTimeInDays) * Number.parseFloat(this.SelectedInventoryItem.retailPrice);
        this.Index += 1;

        this.FilteredInventoryItems = this.FilteredInventoryItems.filter(a => a.inventoryItemId != value.data.inventoryItemId);
        this.InventoryItemDataSource = this.InventoryItems;

        var b: any = {
            quantity: Number.parseInt(value.data.dosage) * Number.parseInt(value.data.treatmentTimeInDays),
            tradeOfferPricePerUnit: Number.parseFloat(this.SelectedInventoryItem.retailPrice),
            totalTradeOfferPerItem: Number.parseInt(value.data.dosage) * Number.parseInt(value.data.treatmentTimeInDays) * Number.parseFloat(this.SelectedInventoryItem.unitPrice),
            totalTradePricePerItem: Number.parseInt(value.data.dosage) * Number.parseInt(value.data.treatmentTimeInDays) * Number.parseFloat(this.SelectedInventoryItem.retailPrice),
            inventoryItemId: <number>value.data.inventoryItemId,
            treatmentStart: value.data.treatmentStart,
            treatmentTimeInDays: <number>value.data.treatmentTimeInDays,
            treatmentEnd: endDate,
            dosage: <number>value.data.dosage
        };
        // console.log("b", b);
        this.SalesIndentItems.push(b);
        // console.log("SalesIndentItems", this.SalesIndentItems);
    }

    DeletePrescription(value) {
        // console.log(value);
        let b: any = this.InventoryItems;
        let a: InventoryItem = b.find(c => c.inventoryItemId == value.data.inventoryItemId);
        this.FilteredInventoryItems.push(a);
        let c: SalesIndentItem[] = this.SalesIndentItems.splice(value.data.index, 1);
        this.TotalQuantity -= c[0].quantity;
        this.TotalCostPrice -= c[0].totalTradeOfferPerItem;
        this.TotoalRetailPrice -= c[0].totalTradePricePerItem;
    }

    setItemValue(rowData: any, value: any): void {
        rowData.inventoryItemId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

    onSubmit() {
        // 
        // console.log("SalesIndentItems", this.SalesIndentItems);
        // console.log(this.CurrentPatient);
        var partner: string = '';
        if (this.CurrentPatient.partner == null || this.CurrentPatient.partner.firstName == null) {
            partner = '';
        }
        else {
            partner = this.CurrentPatient.partner.firstName;
        }

        var a: any = {
            date: new Date(),
            totalTradePrice: this.TotoalRetailPrice,
            totalTradeOffer: this.TotalCostPrice,
            totalQuantity: this.TotalQuantity,
            issueDate: new Date(),
            salesIndentItems: this.SalesIndentItems,
            customerName: this.CurrentPatient.fullName || '',
            customerSecondName: partner || '',
            consultantName: '',
            customerCode: this.CurrentPatient.mrn
        }

        this.SalesIndent = a;
        console.log("Sales Indent", this.SalesIndent);

        this.PharmacyService.AddSalesIndent(this.SalesIndent).subscribe(res => {
            console.log(res);
        });
    }

    onReset() {
        this.SalesIndentItems = [];
        this.Prescriptions = [];
        this.SalesIndent = null;
    }
}
