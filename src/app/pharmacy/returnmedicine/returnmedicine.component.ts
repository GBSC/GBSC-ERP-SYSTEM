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
    public SelectedSalesOrder: any;
    public SelectedSalesOrderDetails: any[] = [];
    public SalesReturnDetails: any[] = [];
    public SalesReturn: any;
    public UpdateInventories: any[] = [];

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
        });
    }

    GetSelectedReturnReasonDetails(value) {
        this.SelectedReturnReason = this.ReturnReasons.find(a => a.returnReasonId == value);
    }

    async GetSelectedSalesOrderDetails(value, event) {
        // console.log("SelectedSalesOrderDetailsValue", value);
        if (event.key === "Enter") {
            this.ResetGrid();
            this.PharmacyService.GetSalesOrderDetailsByCode(value).subscribe((res: any) => {
                if (res != null) {
                    this.SelectedSalesOrder = res;
                    this.SelectedSalesOrderDetails = this.SelectedSalesOrder.salesOrderItems;
                }
                else {
                    this.Toast.error('Return already exists for selected SO!', 'Error!');
                }
            });
        }
    }

    CalculateReturnAmount(returnquantity, rate, index) {
        // displaygridrowitem.returnAmount = Number.parseFloat(rate) * Number.parseInt(returnquantity);
        // this.TotalReturnAmount = this.SelectedSalesOrderDetails.reduce(function(a, b) { return a + b; }, 0);

        if(this.ReturnAmount == null) {
            this.ReturnAmount = [];
        }

        this.ReturnAmount[index] = Number.parseFloat(rate) * Number.parseInt(returnquantity);
        this.TotalReturnAmount = this.ReturnAmount.reduce(function(a, b) { return a + b; }, 0);


        // displaygridrowitem.returnQuantity = Number.parseInt(returnquantity);
        // this.TotalReturnQuantity = this.ReturnQuantity.reduce(function(a, b) { return a + b; }, 0);

        if(this.ReturnQuantity == null) {
            this.ReturnQuantity = [];
        }
        this.ReturnQuantity[index] = Number.parseInt(returnquantity);
        this.TotalReturnQuantity = this.ReturnQuantity.reduce(function(a, b) { return a + b; }, 0);
    }

    CreateSalesReturnDetails(index, returnquantity) {

        let packtype : string = '';
        if(this.SelectedSalesOrderDetails[index].inventoryItem.packType) {
            packtype = this.SelectedSalesOrderDetails[index].inventoryItem.packType.name;
        };

        let packsize : number = null;
        if(this.SelectedSalesOrderDetails[index].inventoryItem.packSize) {
            packsize = Number.parseInt(this.SelectedSalesOrderDetails[index].inventoryItem.packSize.size);
        }

        let inventoryid : number = null;
        let stockquantity : number = null;
        if(this.SelectedSalesOrderDetails[index].inventory) {
            stockquantity = Number.parseInt(this.SelectedSalesOrderDetails[index].inventory.stockQuantity);
            inventoryid = Number.parseInt(this.SelectedSalesOrderDetails[index].inventory.inventoryId);
        }

        let mu : string = '';
        if(this.SelectedSalesOrderDetails[index].inventoryItem.measurementUnit) {
            mu = this.SelectedSalesOrderDetails[index].inventoryItem.measurementUnit.name;
        }

        this.ReturnMedicineDetailsForm.value.ItemCode = this.SelectedSalesOrderDetails[index].inventoryItem.itemCode || '';
        this.ReturnMedicineDetailsForm.value.Description = this.SelectedSalesOrderDetails[index].inventoryItem.description || '';
        this.ReturnMedicineDetailsForm.value.PackType = packtype;
        this.ReturnMedicineDetailsForm.value.PackSize = packsize;
        this.ReturnMedicineDetailsForm.value.StockQuantity = stockquantity;
        this.ReturnMedicineDetailsForm.value.PerUnit = mu;
        this.ReturnMedicineDetailsForm.value.Rate = this.SelectedSalesOrderDetails[index].inventoryItem.unitPrice || 1;
        this.ReturnMedicineDetailsForm.value.PurchaseQuantity = this.SelectedSalesOrderDetails[index].orderUnitQuantity || 1;
        this.ReturnMedicineDetailsForm.value.ReturnQuantity = Number.parseInt(returnquantity);
        this.ReturnMedicineDetailsForm.value.PurchaseAmount = this.SelectedSalesOrderDetails[index].itemTotalAmount || 0;
        this.ReturnMedicineDetailsForm.value.ReturnAmount = Number.parseFloat(this.SelectedSalesOrderDetails[index].inventoryItem.unitPrice || 1) * Number.parseInt(returnquantity);
        
        if(this.SalesReturnDetails == null) {
            this.SalesReturnDetails = [];
        }
        if(this.SalesReturnDetails.find(a => a.InventoryItemId == this.SelectedSalesOrderDetails[index].inventoryItemId) == undefined) {
            let salesreturnitem: any = {
                CompanyId : this.Auth.getUserCompanyId(),
                ReturnQuantity: Number.parseInt(returnquantity),
                ReturnAmount: this.ReturnMedicineDetailsForm.value.ReturnAmount,
                InventoryId: inventoryid,
                InventoryItemId: this.SelectedSalesOrderDetails[index].inventoryItemId
            };

            
            this.SalesReturnDetails.push(salesreturnitem);
            console.log("SalesReturnDetail", this.SalesReturnDetails);
            if(this.SelectedSalesOrderDetails[index].inventory != null && this.SelectedSalesOrderDetails[index].inventory != undefined) {
                let inventoryupdateobject: any = {
                    inventoryId: inventoryid,
                    stockQuantity: stockquantity + Number.parseInt(returnquantity),
                    inventoryItemId: this.SelectedSalesOrderDetails[index].inventoryItem.inventoryItemId
                };
                if(this.UpdateInventories == null) {
                    this.UpdateInventories = [];
                }
                this.UpdateInventories.push(inventoryupdateobject);
                console.log(this.UpdateInventories);
            }
            
            this.Toast.success("Item Added");
        } else {
            this.Toast.error("Item already added");
        }
    }

    AddSalesReturn() {

        this.ReturnMedicineForm.value.PatientName = this.SelectedSalesOrder.customerName || '';
        this.ReturnMedicineForm.value.SpouseName = this.SelectedSalesOrder.customerContactNumber;
        this.ReturnMedicineForm.value.TotalReturnAmount = this.TotalReturnAmount;
        this.ReturnMedicineForm.value.SalesOrderId = this.SelectedSalesOrder.salesOrderId;
        this.ReturnMedicineForm.value.SalesReturnItems = this.SalesReturnDetails;
        // console.log("ReturnMedicineForm", this.ReturnMedicineForm);

        let salesreturnsubmitobject: any = {
            CompanyId : this.Auth.getUserCompanyId(),
            SalesOrderId: Number.parseInt(this.SelectedSalesOrder.salesOrderId),
            ReturnDate: this.ReturnMedicineForm.value.ReturnDate,
            Remarks: this.ReturnMedicineForm.value.Remarks,
            TotalReturnAmount: this.TotalReturnAmount,
            ReturnReasonId: Number.parseInt(this.ReturnMedicineForm.value.ReturnReasonId),
            SalesReturnItems: this.SalesReturnDetails
        };
        // console.log("salesreturnsubmitobject", salesreturnsubmitobject)
        this.SalesReturn = salesreturnsubmitobject;
        console.log("SalesReturn", this.SalesReturn);
        this.PharmacyService.AddSalesReturn(this.SalesReturn).subscribe(res => {
            // console.log("SalesReturnPostRequestPostRequest", res);
            if(this.UpdateInventories.length > 0) {
                this.PharmacyService.UpdateInventories(this.UpdateInventories).subscribe(res => {
                    // console.log("UpdateInventoriesPutRequest", res);
                });
            }
            this.Toast.success("Return Processed");
            this.ResetWholeForm();
        });
    }

    ResetWholeForm() {
        this.ReturnMedicineForm.reset();
        this.ReturnMedicineDetailsForm.reset();
        this.SelectedReturnReason = null;
        this.SelectedSalesOrder = null;
        this.SelectedSalesOrderDetails = [];
        this.SalesReturn = null;
        this.SalesReturnDetails = [];
        this.UpdateInventories = [];
        this.ReturnQuantity = [];
        this.ReturnAmount = [];
        this.TotalReturnAmount = 0;
        // this.ReturnQuantity = null;
        this.TotalReturnQuantity = 0;
    }

    ResetGrid() {
        this.ReturnMedicineDetailsForm.reset();
        this.SelectedSalesOrder = null;
        this.SelectedSalesOrderDetails = [];
        this.SalesReturn = null;
        this.SalesReturnDetails = [];
        this.UpdateInventories = [];
        this.ReturnAmount = [];
        this.TotalReturnAmount = 0;
        this.ReturnQuantity = [];
        this.TotalReturnQuantity = 0;
    }



}
