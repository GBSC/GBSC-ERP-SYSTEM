import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';

import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { SalesOrder } from '../../core/Models/Pharmacy/SalesOrder';
import { Inventory } from '../../core/Models/Pharmacy/Inventory';
import { SalesIndent } from '../../core/Models/Pharmacy/SalesIndent';
import { SalesIndentItem } from '../../core/Models/Pharmacy/SalesIndentItem';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-issuance',
    templateUrl: './issuance.component.html',
    styleUrls: ['./issuance.component.css']
})
export class IssuanceComponent implements OnInit {

    public IssuanceForm: FormGroup;
    public InventoryItemForm: FormGroup;

    public SelectedSalesIndent: SalesIndent;
    public SelectedSalesIndentDetails: SalesIndentItem[] = [];

    public SalesOrders: SalesOrder;
    public InventoryItems: InventoryItem;
    public Items: InventoryItem[] = [];
    public aaa: InventoryItem[];
    public FilteredItems: InventoryItem;
    public GridDataSource: any;
    public LookUpDataSource: any;
    public SalesOrderItemForm: FormGroup;
    public filterItems: InventoryItem[];

    public customerdata: any = {};
    public AllItems: any;
    public AllCustomers: any;
    public data: any = {};
    public arraydata = [];
    public StockQuantityarraydata: any[] = [];
    public total: number = 0;
    public desc: any;
    public TotalQuantity: number = 0;
    public ItemTotal: number = 0;
    public ItemPackQuantity: number = 0;

    public Inv: Inventory;
    public Invs: Inventory[];

    constructor(public PharmacyService: PharmacyService, public FormBuilder: FormBuilder, public Toast: ToastrService) {

        this.IssuanceForm = this.FormBuilder.group({
            Department: [''],
            Remarks: [''],
            OrderAmount: [''],
            SlipNumber: ['', Validators.required],
            Status: ['', Validators.required],
            IssuanceNo: [''],
            CRN: ['', Validators.required],
            IssuanceDate: ['', Validators.required],
            PatientName: [''],
            SpouseName: [''],
            SalesOrderItems: this.FormBuilder.array([])
        });

        this.InventoryItemForm = FormBuilder.group({
            Description: [''],
            PackType: [''],
            PackTypeId: [''],
            PackSize: [''],
            PackSizeId: [''],
            PackQuantity: [''],
            PackQuantityId: [''],
            UnitPrice: [''],
            InventoryItemId: ['', Validators.required],
            ItemCode: [''],
            OrderUnitQuantity: ['', Validators.required],
            ItemTotalAmount: [''],
            InventoryId: [''],
            StockQuantity: [''],
            BasicAmount: ['']
        });

    }


    async  ngOnInit() {
        // this.PharmacyService.GetSalesOrders().subscribe((res: SalesOrder) => this.SalesOrders = res);
        // this.PharmacyService.GetInventoryItems().subscribe((result: InventoryItem) => { this.InventoryItems = result; console.log(this.InventoryItems); this.FilteredItems = result; this.aaa.push(result); console.log(this.aaa); });
        this.AllItems = await this.PharmacyService.GetInventoryItemstest();
        this.filterItems = this.AllItems;
        // console.log(this.AllItems);

        this.PharmacyService.getCustomers().subscribe(result => this.AllCustomers = result);
    }

    getcellvalueForCustomer(value) {
        // console.log(value);
        this.customerdata = this.AllCustomers.find(x => x.crn == value);
        // console.log(this.customerdata);

    }

    getcellvalue(value) {
        // console.log(value);
        this.data = this.AllItems.find(x => x.inventoryItemId == value);
        // this.GetStockPosition(value);
        // console.log(value.inventoryItemId);
        // console.log(this.AllItems);
        // console.log(this.data);
    }

    async UpdateSalesOrder(value) {
        return await this.PharmacyService.UpdateSalesOrder(value.Key).toPromise();
    }

    async DeleteSalesOrder(value) {
        return await this.PharmacyService.DeleteSalesOrder(value.Key.SalesOrderId).toPromise();
    }

    public issuanceformvalue: any;

    onsubmit(value) {
        this.IssuanceForm.value.CRN = this.customerdata.crn || '';
        this.IssuanceForm.value.PatientName = this.customerdata.name || '';
        this.IssuanceForm.value.SpouseName = this.customerdata.contactName || '';

        // console.log(value);
    }

    async GetSelectedSalesIndentDetails(value, event) {
        if (event.key === "Enter") {
            this.InventoryItemForm.reset();
            this.IssuanceForm.reset();
            this.PharmacyService.GetSalesIndentDetailsByCode(value).subscribe((res: SalesIndent) => {
                if (res != null) {
                    this.SelectedSalesIndent = res;
                    this.SelectedSalesIndentDetails = this.SelectedSalesIndent.salesIndentItems;
                }
                else {
                    this.Toast.error('Order already exists for selected Prescription!', 'Error!');
                }
            });
        }
    }

    public finalstockquantity: any;

    onsubmitInventeryDetail(value) {
        console.log(this.data);
        let data = value;

        if (!this.data.packType) {
            this.InventoryItemForm.value.PackType = '';
            this.InventoryItemForm.value.PackTypeId = null;
        }
        else {
            this.InventoryItemForm.value.PackType = this.data.packType.name || '';
            this.InventoryItemForm.value.PackTypeId = this.data.packType.packTypeId || null;
        }

        if (!this.data.packSize) {
            this.InventoryItemForm.value.PackSize = 1;
            this.InventoryItemForm.value.PackSizeId = null;
        }
        else {
            this.InventoryItemForm.value.PackSize = this.data.packSize.size || 1;
            this.InventoryItemForm.value.PackSizeId = this.data.packSize.packSizeId || null;
        }

        if (!this.data.inventory) {
            this.InventoryItemForm.value.InventoryId = null;
            this.InventoryItemForm.value.StockQuantity = 0;
        }
        else {
            this.InventoryItemForm.value.InventoryId = this.data.inventory.inventoryId || null;
            this.InventoryItemForm.value.StockQuantity = this.data.inventory.stockQuantity || 0;
        }

        this.InventoryItemForm.value.Description = this.data.description;
        this.InventoryItemForm.value.PackQuantity = (Number.parseInt(this.InventoryItemForm.value.OrderUnitQuantity) / Number.parseFloat(this.InventoryItemForm.value.PackSize)).toFixed(1);
        this.InventoryItemForm.value.UnitPrice = this.data.unitPrice || 1;
        this.InventoryItemForm.value.ItemTotalAmount = (Number.parseInt(this.InventoryItemForm.value.OrderUnitQuantity) * Number.parseFloat(this.InventoryItemForm.value.UnitPrice)).toFixed(1);
        this.finalstockquantity = Number.parseInt(this.InventoryItemForm.value.StockQuantity) - Number.parseInt(this.InventoryItemForm.value.OrderUnitQuantity);
        this.InventoryItemForm.value.StockQuantity = this.finalstockquantity;
        this.InventoryItemForm.value.BasicAmount = (Number.parseFloat(this.data.costPrice) * Number.parseFloat(this.InventoryItemForm.value.OrderUnitQuantity)).toFixed(1);
        data.ItemCode = this.data.itemCode;
        // console.log(data);

        this.filterItems = this.filterItems.filter(a => a.itemCode != this.data.itemCode);

        data.InventoryItemId = Number.parseInt(data.InventoryItemId);
        // console.log(data);
        this.arraydata.push(data);
        // console.log(this.arraydata);
        // console.log(this.InventoryItemForm.value);
        // console.log(data.InventoryItemId);

        // console.log(Number.parseInt(data.InventoryItemId));

        let x = {
            StockQuantity: Number.parseInt(data.StockQuantity),
            InventoryItemId: Number.parseInt(data.InventoryItemId),
            InventoryId: Number.parseInt(this.data.inventory.inventoryId)
        };
        // console.log(x);

        this.StockQuantityarraydata.push(x);
        // console.log(this.StockQuantityarraydata);

        this.total += Number.parseFloat(this.InventoryItemForm.value.ItemTotalAmount);
        this.TotalQuantity += Number.parseInt(this.InventoryItemForm.value.OrderUnitQuantity);
        this.InventoryItemForm.reset();
    }

    AddItem(value) {
        var a: any = this.FilteredItems;
        this.FilteredItems = a.filter(a => a.itemCode != value.data.itemCode);
    }

    removed(d) {
        console.log(d);
        this.total -= Number.parseInt(d.UnitPrice);
        // console.log(d.key)
        this.TotalQuantity -= Number.parseInt(d.OrderUnitQuantity);
        // console.log(d.key)
        console.log("removed")
    }

    CalculatenetAmount(quantity) {
        this.ItemTotal = Number.parseFloat((Number.parseInt(quantity) * Number.parseFloat(this.data.unitPrice)).toFixed(4));
        this.ItemPackQuantity = Number.parseFloat((Number.parseInt(quantity) / Number.parseFloat(this.data.packSize.size)).toFixed(2));
    }

    addfinal(value) {

        this.onsubmit(value);

        this.arraydata.filter(t => {
            delete t.Description;
            delete t.PackQuantity;
            delete t.PackQuantityId;
            delete t.PackSize;
            delete t.PackType;
            delete t.Rate;
            delete t.StockQuantity;
            delete t.ItemCode;
        });

        console.log(this.arraydata);

        this.IssuanceForm.value.SalesOrderItems = this.arraydata;
        this.IssuanceForm.value.OrderAmount = this.total;


        var a: any = {
            IssueDate: this.IssuanceForm.value.IssuanceDate,
            Remarks: this.IssuanceForm.value.Remarks,
            SlipNumber: this.IssuanceForm.value.SlipNumber,
            Status: this.IssuanceForm.value.Status,
            // ContactPerson = Patient Name
            ContactPerson: this.IssuanceForm.value.PatientName,
            // ContactPersonNumber = Spouse Name
            ContactPersonNumber: this.IssuanceForm.value.SpouseName,
            TotalQuantity: this.TotalQuantity,
            SalesOrderItems: this.IssuanceForm.value.SalesOrderItems,
            OrderAmount: this.total,
            // AgainstLotNumber = MRN/CRN
            AgainstLotNumber: this.IssuanceForm.value.CRN
        };


        console.log(a)
        this.PharmacyService.AddSalesOrder(a).subscribe(r => {
            console.log(r);
            this.PharmacyService.UpdateInventories(this.StockQuantityarraydata).subscribe(res => {
                console.log(res);
            });
        });

        this.IssuanceForm.reset();
        this.InventoryItemForm.reset();
        this.total = 0;
    }


}
