import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../Inventorysystem/service/Inventorysystem.service';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public catgory : any;

    constructor(public InventorysystemServiceobj: InventorysystemService, public httpClient: HttpClient,) { }

    async ngOnInit() {
        await this.InventorysystemServiceobj.Getcategories();
    this.catgory = this.InventorysystemServiceobj.catogories;
        console.log(this.catgory );
    }


    async addCategory(catg) {
        console.log(catg);
        await this.InventorysystemServiceobj.AddCategory(catg.data);
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
