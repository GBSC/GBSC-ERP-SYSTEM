import { Component, OnInit } from '@angular/core';

import { InventorysystemService } from '../../Inventorysystem/service/Inventorysystem.service';



@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    constructor(public InventorysystemServiceobj: InventorysystemService) { }

    async ngOnInit() {
        await this.InventorysystemServiceobj.Getcategories();
        let x = this.InventorysystemServiceobj.catogories;
        console.log(x);
    }


    async AddCategory(value) {
        console.log(value.key);
        await this.InventorysystemServiceobj.AddCategory(value.key);
    }

    async UpdateCategory(value) {
        console.log(value.key);
        await this.InventorysystemServiceobj.UpdateCategory(value.key);
    }

    async DeleteCategory(value) {
        console.log(value.key.categoryId);
        await this.InventorysystemServiceobj.DeleteCategory(value.key.categoryId);

    }

}
