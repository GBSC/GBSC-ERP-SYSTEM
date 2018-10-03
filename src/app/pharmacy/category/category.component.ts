import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PharmacyService } from '../../core';


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public catgory : any;

    constructor(public InventorysystemServiceobj: PharmacyService, public httpClient: HttpClient,) { }

    async ngOnInit() {
        
        this.catgory = await this.InventorysystemServiceobj.GetInventoryItemCategories();
        console.log(this.catgory );
    }


    async addCategory(catg) {
        console.log(catg);
        await this.InventorysystemServiceobj.AddInventoryItemCategory(catg.data);
    }

    async UpdateCategory(value) {
        console.log(value.key);
        await this.InventorysystemServiceobj.UpdateInventoryItemCategory(value.key);
    }

    async DeleteCategory(value) {
        console.log(value.key.categoryId);
        await this.InventorysystemServiceobj.DeleteInventoryItemCategory(value.key.categoryId);

    }

}
