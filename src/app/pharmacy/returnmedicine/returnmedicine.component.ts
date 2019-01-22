import { Component, OnInit } from '@angular/core';
import { PharmacyService, AuthService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SalesOrder } from '../../core/Models/Pharmacy/SalesOrder';
import { SalesOrderItem } from '../../core/Models/Pharmacy/SalesOrderItem';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { SalesReturnItem } from '../../core/Models/Pharmacy/SalesReturnItem';
import { SalesReturn } from '../../core/Models/Pharmacy/SalesReturn';
import { Inventory } from '../../core/Models/Pharmacy/Inventory';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-returnmedicine',
    templateUrl: './returnmedicine.component.html',
    styleUrls: ['./returnmedicine.component.css']
})
export class ReturnmedicineComponent implements OnInit {

    public ReturnMedicineForm: FormGroup;
    public ReturnMedicineDetailsForm: FormGroup;

    public ReturnReasons: any;
    public SelectedReturnReason: any;
    public Customers: any;
    public SelectedCustomer: any;
    public SelectedSalesOrder: SalesOrder;
    public SelectedSalesOrderDetails: any[] = [];
    public SalesReturnDetails: SalesReturnItem[] = [];
    public SalesReturn: SalesReturn;
    public UpdateInventories: Inventory[] = [];

    public ReturnAmount: number[] = [];
    public TotalReturnAmount: number = 0;
    public ReturnQuantity: number[] = [];
    public TotalReturnQuantity: number = 0;

    constructor(public PharmacyService: PharmacyService, public FormBuilder: FormBuilder, public Toast: ToastrService, public Auth : AuthService) {

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
            SalesOrderId: [''],
            SalesReturnItems: this.FormBuilder.array([])
        });

        this.ReturnMedicineDetailsForm = this.FormBuilder.group({
            ItemCode: [''],
            Description: [''],
            PackType: [''],
            PackSize: [''],
            StockQuantity: [''],
            PerUnit: [''],
            Rate: [''],
            PurchaseQuantity: [''],
            ReturnQuantity: [''],
            PurchaseAmount: [''],
            ReturnAmount: ['']
        });

    }

    ngOnInit() {
        this.PharmacyService.GetReturnReasons().subscribe(res => {
            this.ReturnReasons = res;
            // console.log(this.ReturnReasons) 
        });
        this.PharmacyService.getCustomers().subscribe(result => {
            this.Customers = result;
            // console.log(this.Customers); 
        });
    }

    GetSelectedCustomerDetails(value) {
        // console.log("CustomerValue", value);
        this.SelectedCustomer = this.Customers.find(a => a.crn == value);
        // console.log("SelectedCustomer", this.SelectedCustomer);
    }

    GetSelectedReturnReasonDetails(value) {
        // console.log("ReasonValue", value);
        this.SelectedReturnReason = this.ReturnReasons.find(a => a.returnReasonId == value);
        // console.log("SelectedReturnReason", this.SelectedReturnReason);
    }

    async GetSelectedSalesOrderDetails(value, event) {
        // console.log("SelectedSalesOrderDetailsValue", value);
        if (event.key === "Enter") {
            this.ResetGrid();
            this.PharmacyService.GetSalesOrderDetailsByCode(value).subscribe((res: SalesOrder) => {
                if (res != null) {
                    this.SelectedSalesOrder = res;
                    // console.log("SelectedSalesOrder", this.SelectedSalesOrder);
                    this.SelectedSalesOrderDetails = this.SelectedSalesOrder.salesOrderItems;
                    // console.log("SelectedSalesOrderDetails", this.SelectedSalesOrderDetails);
                }
                else {
                    this.Toast.error('Return already exists for selected SO!', 'Error!');
                }
            });
            // console.log("SelectedSalesOrder", this.SelectedSalesOrder);
            // this.SelectedSalesOrderDetails = this.SelectedSalesOrder.salesOrderItems;
            // this.SelectedSalesOrderDetails = this.PharmacyService.GetSalesOrderItemsByCodeAsync(this.SelectedSalesOrder.salesOrderId);
            // this.PharmacyService.GetSalesOrderItemsBySalesOrderID(this.SelectedSalesOrder.salesOrderId).subscribe((res : SalesOrderItem[]) => { 
            //     this.SelectedSalesOrderDetails = res; 
            //     // console.log("SelectedSalesOrderDetails", this.SelectedSalesOrderDetails); 
            // });
            // console.log("SelectedSalesOrderDetails", this.SelectedSalesOrderDetails);
        }
    }

    // CalculateReturnAmount(rate, quantity) {
    //     this.ReturnAmount = Number.parseInt(quantity) * Number.parseFloat(rate);
    // }

    CalculateReturnAmount(returnquantity, rate, index) {
        // console.log("Return Quantity", returnquantity);
        // console.log("Retail Price", rate);
        this.ReturnAmount[index] = Number.parseFloat(rate) * Number.parseInt(returnquantity);
        this.TotalReturnAmount = this.ReturnAmount.reduce(function(a, b) { return a + b; }, 0);
        this.ReturnQuantity[index] = Number.parseInt(returnquantity);
        this.TotalReturnQuantity = this.ReturnQuantity.reduce(function(a, b) { return a + b; }, 0);
        // console.log("ReturnAmountIndex", this.ReturnAmount[index]);
        // console.log("TotalReturnAmount", this.TotalReturnAmount);
    }

    CreateSalesReturnDetails(index, returnquantity) {
        // console.log(index);
        // console.log(this.SelectedSalesOrderDetails[index]);
        this.ReturnMedicineDetailsForm.value.ItemCode = this.SelectedSalesOrderDetails[index].inventoryItem.itemCode;
        this.ReturnMedicineDetailsForm.value.Description = this.SelectedSalesOrderDetails[index].inventoryItem.description;
        this.ReturnMedicineDetailsForm.value.PackType = this.SelectedSalesOrderDetails[index].inventoryItem.packType.name;
        this.ReturnMedicineDetailsForm.value.PackSize = this.SelectedSalesOrderDetails[index].inventoryItem.packSize.size;
        this.ReturnMedicineDetailsForm.value.StockQuantity = this.SelectedSalesOrderDetails[index].inventory.stockQuantity;
        this.ReturnMedicineDetailsForm.value.PerUnit = this.SelectedSalesOrderDetails[index].inventoryItem.measurementUnit.name;
        this.ReturnMedicineDetailsForm.value.Rate = this.SelectedSalesOrderDetails[index].inventoryItem.retailPrice;
        this.ReturnMedicineDetailsForm.value.PurchaseQuantity = this.SelectedSalesOrderDetails[index].orderUnitQuantity;
        this.ReturnMedicineDetailsForm.value.ReturnQuantity = Number.parseInt(returnquantity);
        this.ReturnMedicineDetailsForm.value.PurchaseAmount = this.SelectedSalesOrderDetails[index].itemTotalAmount;
        this.ReturnMedicineDetailsForm.value.ReturnAmount = Number.parseFloat(this.SelectedSalesOrderDetails[index].inventoryItem.retailPrice) * Number.parseInt(returnquantity);
        // console.log("ReturnMedicineDetailsForm", this.ReturnMedicineDetailsForm);

        var salesreturnitem: any = {
            CompanyId : this.Auth.getUserCompanyId(),
            ReturnQuantity: Number.parseInt(returnquantity),
            ReturnAmount: this.ReturnMedicineDetailsForm.value.ReturnAmount,
            InventoryId: this.SelectedSalesOrderDetails[index].inventory.inventoryId,
            inventoryItemId: this.SelectedSalesOrderDetails[index].inventoryItem.inventoryItemId
        };
        // console.log("salesreturnitem", salesreturnitem);
        this.SalesReturnDetails.push(salesreturnitem);
        // console.log("SalesReturnDetail", this.SalesReturnDetails);

        var inventoryupdateobject: any = {
            inventoryId: this.SelectedSalesOrderDetails[index].inventory.inventoryId,
            stockQuantity: this.SelectedSalesOrderDetails[index].inventory.stockQuantity + Number.parseInt(returnquantity),
            inventoryItemId: this.SelectedSalesOrderDetails[index].inventoryItem.inventoryItemId
        };
        // console.log("inventoryupdateobject", inventoryupdateobject);
        this.UpdateInventories.push(inventoryupdateobject);
        // console.log("UpdateInventories", this.UpdateInventories);
        // this.ReturnAmount[index] = Number.parseFloat(this.SelectedSalesOrderDetails[index].inventoryItem.retailPrice) * Number.parseInt(returnquantity);
        // console.log("ReturnAmount", this.ReturnAmount);
        // this.TotalReturnAmount += this.ReturnAmount[index];
        // console.log("TotalReturnAmount", this.TotalReturnAmount);
        // this.TotalReturnQuantity += Number.parseInt(returnquantity);
        // console.log("TotalReturnQuantity", this.TotalReturnQuantity);

        // this.SelectedSalesOrderDetails.splice(index, 1);
        // this.ReturnMedicineDetailsForm.disable();
    }

    AddSalesReturn() {

        this.ReturnMedicineForm.value.PatientName = this.SelectedCustomer.name;
        this.ReturnMedicineForm.value.SpouseName = this.SelectedCustomer.contactName;
        this.ReturnMedicineForm.value.TotalReturnAmount = this.ReturnAmount;
        this.ReturnMedicineForm.value.SalesOrderId = this.SelectedSalesOrder.salesOrderId;
        this.ReturnMedicineForm.value.SalesReturnItems = this.SalesReturnDetails;
        // console.log("ReturnMedicineForm", this.ReturnMedicineForm);

        var salesreturnsubmitobject: any = {
            SalesOrderId: this.SelectedSalesOrder.salesOrderId,
            ReturnDate: this.ReturnMedicineForm.value.ReturnDate,
            Remarks: this.ReturnMedicineForm.value.Remarks,
            TotalReturnAmount: this.TotalReturnAmount,
            ReturnReasonId: this.ReturnMedicineForm.value.ReturnReasonId,
            SalesReturnItems: this.SalesReturnDetails
        };
        console.log("salesreturnsubmitobject", salesreturnsubmitobject)
        this.SalesReturn = salesreturnsubmitobject;
        // console.log("SalesReturn", this.SalesReturn);
        this.PharmacyService.AddSalesReturn(this.SalesReturn).subscribe(res => {
            // console.log("SalesReturnPostRequestPostRequest", res);
        });
        this.PharmacyService.UpdateInventories(this.UpdateInventories).subscribe(res => {
            // console.log("UpdateInventoriesPutRequest", res);
        });
        this.ResetWholeForm();
    }

    ResetWholeForm() {
        this.ReturnMedicineForm.reset();
        this.ReturnMedicineDetailsForm.reset();
        this.SelectedReturnReason = null;
        this.SelectedCustomer = null;
        this.SelectedSalesOrder = null;
        this.SelectedSalesOrderDetails = null;
        this.SalesReturn = null;
        this.SalesReturnDetails = null;
        this.UpdateInventories = null;
        this.ReturnAmount = null;
        this.TotalReturnAmount = 0;
        this.ReturnQuantity = null;
        this.TotalReturnQuantity = 0;
    }

    ResetGrid() {
        this.ReturnMedicineDetailsForm.reset();
        this.SelectedSalesOrder = null;
        this.SelectedSalesOrderDetails = null;
        this.SalesReturn = null;
        this.SalesReturnDetails = null;
        this.UpdateInventories = null;
        this.ReturnAmount = null;
        this.TotalReturnAmount = 0;
        this.ReturnQuantity = null;
        this.TotalReturnQuantity = 0;
    }



}
