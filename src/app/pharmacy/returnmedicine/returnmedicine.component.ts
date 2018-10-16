import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SalesOrder } from '../../core/Models/Pharmacy/SalesOrder';
import { SalesOrderItem } from '../../core/Models/Pharmacy/SalesOrderItem';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { SalesReturnItem } from '../../core/Models/Pharmacy/SalesReturnItem';

@Component({
    selector: 'app-returnmedicine',
    templateUrl: './returnmedicine.component.html',
    styleUrls: ['./returnmedicine.component.css']
})
export class ReturnmedicineComponent implements OnInit {

    private ReturnMedicineForm: FormGroup;
    private ReturnMedicineDetailsForm : FormGroup;

    private ReturnReasons: any;
    private SelectedReturnReason : any;
    private Customers: any;
    private SelectedCustomer: any;
    private SelectedSalesOrder : SalesOrder;
    private SelectedSalesOrderDetails : SalesOrderItem[] = [];
    private SalesReturnDetails : SalesReturnItem[] = [];
    private SelectednventoryItemIDs : number[] = [];
    private SelectedInventoryItems : InventoryItem[] = [];

    private ReturnAmount : number = 0;
    private TotalReturnAmount : number = 0;

    constructor(private PharmacyService: PharmacyService, private FormBuilder: FormBuilder) {

        this.ReturnMedicineForm = this.FormBuilder.group({
            MRN: [''],
            PatientName: [''],
            SpouseName: [''],
            Department: [''],
            Remarks: [''],
            ReturnNumber: [''],
            ReturnDate: [''],
            SalesOrderNumber: [''],
            TotalReturnAmount: [''],
            ReturnReasonId: [''],
            SalesOrderId : [''],
            SalesReturnItems: this.FormBuilder.array([])
        });

        this.ReturnMedicineDetailsForm = this.FormBuilder.group({
            ItemCode : [''],
            Description : [''],
            PackType : [''],
            StockQuantity : [''],
            PerUnit : [''],
            Rate : [''],
            PurchaseQuantity : [''],
            ReturnQuantity : [''],
            PurchaseAmount : [''],
            ReturnAmount : ['']
        });

    }

    ngOnInit() {
        this.PharmacyService.GetReturnReasons().subscribe(res => { this.ReturnReasons = res; console.log(this.ReturnReasons) });
        this.PharmacyService.getCustomers().subscribe(result => { this.Customers = result; console.log(this.Customers); });
    }

    GetSelectedCustomerDetails(value) {
        console.log("CustomerValue", value);
        this.SelectedCustomer = this.Customers.find(a => a.crn == value);
        console.log("SelectedCustomer", this.SelectedCustomer);
    }

    GetSelectedReturnReasonDetails(value) {
        console.log("ReasonValue", value);
        this.SelectedReturnReason = this.ReturnReasons.find(a => a.returnReasonId == value);
        console.log("SelectedReturnReason", this.SelectedReturnReason);
    }

    async GetSelectedSalesOrderDetails(value, event) {
        console.log(value);
        if (event.key === "Enter") {
            this.SelectedSalesOrder = await this.PharmacyService.GetSalesOrderByCodeAsync(value);
            console.log("SelectedSalesOrder", this.SelectedSalesOrder);
            //this.SelectedSalesOrderDetails = this.SelectedSalesOrder.salesOrderItems;
            //this.SelectedSalesOrderDetails = this.PharmacyService.GetSalesOrderItemsByCodeAsync(this.SelectedSalesOrder.salesOrderId);
            this.PharmacyService.GetSalesOrderItemsByCode(this.SelectedSalesOrder.salesOrderId).subscribe((res : SalesOrderItem[]) => { this.SelectedSalesOrderDetails = res; console.log("SelectedSalesOrderDetails", this.SelectedSalesOrderDetails); });
            //console.log("SelectedSalesOrderDetails", this.SelectedSalesOrderDetails);
        }
    }

    // CalculateReturnAmount(rate, quantity) {
    //     this.ReturnAmount = Number.parseInt(quantity) * Number.parseFloat(rate);
    // }

    CreateSalesReturnDetails(SalesReturnDetail) {
        console.log("SalesReturnDetailFormValue", SalesReturnDetail);
        console.log("ReturnMedicineDetailsForm", this.ReturnMedicineDetailsForm);
    }

    AddSalesReturn() {
        console.log("ReturnMedicineForm", this.ReturnMedicineForm);
    }

}
