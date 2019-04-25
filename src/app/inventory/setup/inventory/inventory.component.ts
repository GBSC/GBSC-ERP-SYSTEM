import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { Inventory } from '../../../core/Models/Inventory/Setup/Inventory';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    public InventoryItems: any;
    public Inventories: any;
    public UpdatedModel: any;
    public UnassignedItems: any;
    public DataSource: any;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {
        this.onPopupShown = this.onPopupShown.bind(this);
        this.onPopupHide = this.onPopupHide.bind(this);
    }

    onPopupShown() {
        this.CheckUnassignedItems();
        this.DataSource = this.UnassignedItems;
    }

    onPopupHide() {
        this.DataSource = this.InventoryItems;
        //await this.CheckUnassignedItems();
    }


    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();
        this.InventoryService.GetInventoriesByCompany(this.CompanyId).subscribe((res: Inventory) => {
            this.Inventories = res;
            this.CheckUnassignedItems();
        });
        // console.log(this.Inventories);
    }

    UpdateModel(value) {
        value.companyId = this.CompanyId;
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    AddInventory(value) {
        value.data.companyId = this.CompanyId;
        this.InventoryService.AddInventory(value.data).subscribe(res => {
            this.InventoryService.GetInventoriesByCompany(this.CompanyId).subscribe((res: Inventory) => {
                this.Inventories = res;
                this.CheckUnassignedItems();
            });
        });
    }

    UpdateInventory() {
        this.InventoryService.UpdateInventory(this.UpdatedModel).subscribe(res => this.CheckUnassignedItems());
    }

    DeleteInventory(value) {
        this.InventoryService.DeleteInventory(value.key).subscribe(res => this.CheckUnassignedItems());
    }

    CheckUnassignedItems() {
        this.InventoryService.GetInventoriesByCompany(this.CompanyId).subscribe((res: Inventory) => {
            this.Inventories = res;
            this.DataSource = this.InventoryItems;
            this.UnassignedItems = this.InventoryItems.filter(a => a.inventory === null);
        });
    }
}
