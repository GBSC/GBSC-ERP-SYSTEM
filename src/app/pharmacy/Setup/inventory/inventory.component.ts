import { Component, OnInit, Input } from '@angular/core';
import { PharmacyService, AuthService } from '../../../core';
import { Inventory } from '../../../core/Models/Pharmacy/Inventory';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    public InventoryItems: InventoryItem;
    public Inventories: Inventory;
    public UpdatedModel: any;
    // public UnassignedItems: any;
    // public DataSource: any;

    constructor(public PharmacyService: PharmacyService, public Auth : AuthService, public toastr : ToastrService) {
        // this.onPopupShown = this.onPopupShown.bind(this);
        // this.onPopupHide = this.onPopupHide.bind(this);
    }

    // async onPopupShown() {
        
    //     // this.CheckUnassignedItems();
    //     this.DataSource = this.UnassignedItems;
    // }

    // async onPopupHide() {
    //     this.DataSource = this.InventoryItems;
    //     //await this.CheckUnassignedItems();
    // }


    ngOnInit() {
        this.PharmacyService.GetInventories().subscribe(res => {
            this.Inventories = res;
            console.log(this.Inventories);
        });
        this.PharmacyService.GetInventoryItems().subscribe(res => {
            this.InventoryItems = res;
            console.log(this.InventoryItems);
        });
    }

    AddNewInventoryItem(NewItem: InventoryItem) {
        let a: any = this.InventoryItems;
        a.push(NewItem);
        this.InventoryItems = a;
        // this.CheckUnassignedItems();
    }

    GetUpdatedInventoryItems(event) {
        // console.log(event);
        // console.log("Checking Event Emitter");
        this.PharmacyService.GetInventoryItems().subscribe(res => {
            this.InventoryItems = res;
            // this.CheckUnassignedItems();
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async AddInventory(value) {
        value.data.companyId = this.Auth.getUserCompanyId();
        //!!!!!!!!!!!!!!**********************************ADD BRANCH ID HERE AND GET BY BRANCH***************************!!!!!!!!!!!!!!??
        await this.PharmacyService.AddInventory(value.data).subscribe(res => {
            this.PharmacyService.GetInventories().subscribe(res => {
                this.Inventories = res;
                // console.log(this.Inventories);
                this.toastr.success("Stock added.");
            },
            err => {
                this.toastr.error("Error!!! Unable to add stock.")
            });
        });
        
    }

    UpdateInventory() {
        this.PharmacyService.UpdateInventory(this.UpdatedModel).subscribe(res => {
                this.toastr.success("Stock updated");
            },
            err => {
                this.toastr.error("Error!!! Unable to update stock");
            });
        // this.CheckUnassignedItems();
    }

    async DeleteInventory(value) {
        await this.PharmacyService.DeleteInventory(value.key).subscribe(res => {
            this.toastr.success("Deleted successfully");
        },
        err => {
            this.toastr.error("Error!!! Unable to delete");
        });
        // this.CheckUnassignedItems();
    }

    // CheckUnassignedItems() {
    //     // this.PharmacyService.GetInventoryItems().subscribe(res => this.InventoryItems = res);
    //     // console.log(this.InventoryItems);
    //     this.DataSource = this.InventoryItems;
    //     var a: any = this.InventoryItems;
    //     // console.log(a);
    //     this.UnassignedItems = a.filter(a => a.inventory === null && a.inventoryId === null);
    //     // console.log(this.UnassignedItems);
    // }
}
