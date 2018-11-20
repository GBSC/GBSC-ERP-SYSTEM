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

    private IssuanceForm: FormGroup;
    private InventoryItemForm: FormGroup;

    private SelectedSalesIndent: SalesIndent;
    private SelectedSalesIndentDetails: SalesIndentItem[] = [];

    private SalesOrders: SalesOrder;
    private InventoryItems: InventoryItem;
    private Items: InventoryItem[] = [];
    private aaa: InventoryItem[];
    private FilteredItems: InventoryItem;
    private GridDataSource: any;
    private LookUpDataSource: any;
    private SalesOrderItemForm: FormGroup;
    private filterItems: InventoryItem[];

    private customerdata: any = {};
    private AllItems: any;
    private AllCustomers: any;
    private data: any = {};
    private arraydata = [];
    private StockQuantityarraydata: any[] = [];
    private total: number = 0;
    private desc: any;
    private TotalQuantity: number = 0;
    private ItemTotal: number = 0;
    private ItemPackQuantity: number = 0;

    private Inv: Inventory;
    private Invs: Inventory[];

<<<<<<< HEAD
    
    
    submitted = false;


    constructor(private PharmacyService: PharmacyService, private FormBuilder: FormBuilder) {
=======
    constructor(private PharmacyService: PharmacyService, private FormBuilder: FormBuilder, private Toast: ToastrService) {
>>>>>>> master

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
        // console.log(this.data);
        let data = value;

        if (!this.data.packType) {
            this.data.packType = {};
            this.data.packType.name = '';
            this.InventoryItemForm.value.PackType = this.data.packType.name;
        }
        else {
            this.InventoryItemForm.value.PackType = this.data.packType.name;
        }
        this.InventoryItemForm.value.PackTypeId = this.data.packType.packTypeId;
        this.InventoryItemForm.value.Description = this.data.description;
        this.InventoryItemForm.value.PackSize = this.data.packSize.size;
        this.InventoryItemForm.value.PackSizeId = this.data.packSize.packSizeId;
        this.InventoryItemForm.value.PackQuantity = (Number.parseInt(this.InventoryItemForm.value.OrderUnitQuantity) / Number.parseFloat(this.InventoryItemForm.value.PackSize)).toFixed(1);
        this.InventoryItemForm.value.UnitPrice = this.data.unitPrice;
        this.InventoryItemForm.value.ItemTotalAmount = (Number.parseInt(this.InventoryItemForm.value.OrderUnitQuantity) * Number.parseFloat(this.InventoryItemForm.value.UnitPrice)).toFixed(1);
        this.InventoryItemForm.value.InventoryId = this.data.inventory.inventoryId;
        this.InventoryItemForm.value.StockQuantity = this.data.inventory.stockQuantity;
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
        this.total -= Number.parseInt(d.UnitPrice);
        console.log(d.key)
        this.TotalQuantity -= Number.parseInt(d.OrderUnitQuantity);
        console.log(d.key)
    }
    remove(index, amount, quantity) {
        let item = this.arraydata.splice(index, 1);
        // this.StockQuantityarraydata.splice(index,1);
        // this.Invs = this.Invs.find(item.inventoryId);
        // this.Invs = this.Invs.splice(index, 1);
        // console.log(item);
        this.total -= Number.parseFloat(amount);
        this.TotalQuantity -= Number.parseInt(quantity);
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
            SalesOrderItems: value,
            OrderAmount: this.total,
            // AgainstLotNumber = MRN/CRN
            AgainstLotNumber: this.IssuanceForm.value.CRN
        };


        console.log(a)
        this.PharmacyService.AddSalesOrder(a).subscribe(r => {
        });

        this.PharmacyService.UpdateInventories(this.StockQuantityarraydata).subscribe(res => {
        });
        //    this.IssuanceForm.reset();
        this.total = 0;


        console.log(value);

    }

    valueChanged(data) {
        let x = data.value;
        console.log(x);
    }


}
