import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';

import { PharmacyService, AuthService, PatientService, HrmsService } from '../../core';
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
    public InventoryItems: any;
    public Items: any[] = [];
    public FilteredItems: any;
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

    public AllDepartments : any;

    public Inv: Inventory;
    public Invs: Inventory[];

    public PackSizes : any;
    public SelectedPackSize : number = 1;
    public packTypes : any;
    public packType : any;

    constructor(public PharmacyService: PharmacyService, public HRService : HrmsService, public HimsService : PatientService, public Auth : AuthService, public FormBuilder: FormBuilder, public Toast: ToastrService) {

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


    ngOnInit() {


        this.PharmacyService.GetInventoryItems().subscribe((result: any) => { 
            this.InventoryItems = result; this.FilteredItems = this.InventoryItems;
         });
        
        // this.PharmacyService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
        //     this.AllItems = res;
        //     this.filterItems = this.AllItems;
        // });

        //this.PharmacyService.getCustomers().subscribe(result => this.AllCustomers = result);

        this.HimsService.getPatientsWithPartners().subscribe((res : any) => {
            this.AllCustomers = res;
            // console.log(this.AllCustomers);
        });

        // this.HimsService.getPatientsWithPartnersByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
        //     this.AllCustomers = res;
        //     // console.log(this.AllCustomers);
        // });

        this.HRService.GetAllDepartments().subscribe((res : any) => {
            this.AllDepartments = res;
            // console.log(this.AllDepartments);
        });

        // this.HRService.GetAllDepartmentsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
        //     this.AllDepartments = res;
        //     // console.log(this.AllDepartments);
        // });

        // this.HimsService.getPatientsWithPartnersByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
        //     this.AllCustomers = res;
        // });

        this.PharmacyService.GetPackSizes().subscribe((res : any) => {
            this.PackSizes = res;
        });


        this.PharmacyService.GetPackTypes().subscribe(res=>{
            this.packTypes = res;
            console.log(this.packTypes);
        });
    }

    getcellvalueForCustomer(value) {
        // console.log(value);
        this.customerdata = this.AllCustomers.find(x => x.mrn == value);
        // console.log(this.customerdata);
    }



    getcellvalue(value) {
        this.data = this.InventoryItems.find(x => x.inventoryItemId == value);
        console.log(this.data);

         this.packType = this.packTypes.find(x=> x.packTypeId == this.data.packTypeId)
        console.log(this.packType);
        let a : any = this.PackSizes.find(c => c.packSizeId == this.data.packSizeId);
        this.SelectedPackSize = a.size;
    }

    async UpdateSalesOrder(value) {
        return await this.PharmacyService.UpdateSalesOrder(value.Key).toPromise();
    }

    async DeleteSalesOrder(value) {
        return await this.PharmacyService.DeleteSalesOrder(value.Key.SalesOrderId).toPromise();
    }

    public issuanceformvalue: any;

    onsubmit(value) {
        let partnername : string = '';
        if(this.customerdata.partner) {
            partnername = this.customerdata.partner.display || '';
        }
        this.IssuanceForm.value.CRN = this.customerdata.mrn || '';
        this.IssuanceForm.value.PatientName = this.customerdata.fullName || '';
        this.IssuanceForm.value.SpouseName = partnername || '';
    }

    GetSelectedSalesIndentDetails(value, event) {
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
        let data = value;
        console.log(data);
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
        this.InventoryItemForm.value.BasicAmount = (Number.parseFloat(this.data.unitPrice) * Number.parseFloat(this.InventoryItemForm.value.OrderUnitQuantity)).toFixed(1);
        data.ItemCode = this.data.itemCode;
        this.FilteredItems = this.FilteredItems.filter(a => a.itemCode != this.data.itemCode);

        data.InventoryItemId = Number.parseInt(data.InventoryItemId);
        this.arraydata.push(data);
        if(this.data.inventory != null && this.data.inventory != undefined) {
            let x = {
                CompanyId : this.Auth.getUserCompanyId() || null,
                StockQuantity: Number.parseInt(data.StockQuantity) || null,
                InventoryItemId: Number.parseInt(data.InventoryItemId) || null,
                InventoryId: Number.parseInt(this.data.inventory.inventoryId) || null
            };
            this.StockQuantityarraydata.push(x);
        }

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
        this.TotalQuantity -= Number.parseInt(d.OrderUnitQuantity);
    }

    CalculatenetAmount(quantity) {
        this.ItemTotal = Number.parseFloat((Number.parseInt(quantity) * Number.parseFloat(this.data.unitPrice)).toFixed(4));
        this.ItemPackQuantity = Number.parseFloat((Number.parseInt(quantity) / this.SelectedPackSize).toFixed(2));
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

        let approvalstatus : boolean = false;
        if(this.IssuanceForm.value.Status == true) {
            approvalstatus = true;
        }

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
            AgainstLotNumber: this.IssuanceForm.value.CRN,
            CompanyId : this.Auth.getUserCompanyId(),
            UserId : this.Auth.getUserId(),
            IsInternalOrder : false,
            IsIssued : true,
            IsProcessed : true,
            IsApproved : approvalstatus
        };

        console.log(a);

        this.PharmacyService.AddSalesOrder(a).subscribe(r => {
            console.log(r);
            if(this.StockQuantityarraydata.length > 0) {
                this.PharmacyService.UpdateInventories(this.StockQuantityarraydata).subscribe(res => {
                    // console.log(res);
                    this.StockQuantityarraydata = [];
                    this.IssuanceForm.value.SalesOrderItems = {};
                    this.IssuanceForm.reset();
                    this.InventoryItemForm.reset();
                    this.total = 0;
                    this.arraydata = [];
                });
            }
        });

        
    }


}
