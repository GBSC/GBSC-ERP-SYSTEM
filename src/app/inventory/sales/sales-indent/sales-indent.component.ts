import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { SalesIndent } from '../../../core/Models/Inventory/Sales/SalesIndent';
import { SalesIndentItem } from '../../../core/Models/Inventory/Sales/SalesIndentItem';
import { InventoryItem } from '../../../core/Models/Inventory/Setup/InventoryItem';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-sales-indent',
    templateUrl: './sales-indent.component.html',
    styleUrls: ['./sales-indent.component.scss']
})
export class SalesIndentComponent implements OnInit {

    public IndentMasterForm : FormGroup;

    private SalesIndentItems : any[] = [];
    private InventoryItems : any;
    private Distributors : any;

    constructor(public InventoryService: InventorysystemService, private Auth : AuthService, private FormBuilder : FormBuilder) {
        this.IndentMasterForm = this.FormBuilder.group({
            Date : [''],
            DistributorId : [''],
            CustomerName : ['']
        });
    }

    async ngOnInit() {
        // this.InventoryService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
        //     this.InventoryItems = res;
        //     console.log(this.InventoryItems);
        // });

        this.InventoryService.GetInventoryItems().subscribe((res : any) => {
            this.InventoryItems = res;
            // console.log(this.InventoryItems);
        });

        this.InventoryService.GetDistributors().subscribe((res : any) => {
            this.Distributors = res;
            // console.log(this.Distributors);
        });
    
    }

    async AddSalesIndent(value) {
        let a : any = {
            distributorId : value.DistributorId,
            date : value.Date,
            customerName : value.CustomerName,
            salesIndentItems : this.SalesIndentItems
        };
        // console.log(a);
        await this.InventoryService.AddSalesIndent(a).subscribe(res => console.log(res));
    }

}
