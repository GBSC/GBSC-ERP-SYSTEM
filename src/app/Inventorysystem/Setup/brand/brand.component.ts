import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { Brand } from '../../models/Setup/Brand';

@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})

export class BrandComponent implements OnInit {
    private Brands : any;
    private newbrand : Brand;
    
    constructor(private InventoryService : InventorysystemService) {
    }

    async ngOnInit() {
        this.Brands = await this.InventoryService.GetBrands();
        //console.log(this.Brands);
    }

    mergeBrand(value) {
        this.newbrand = Object.assign(value.oldData, value.newData);
        //console.log(this.newbrand);
    }

    async AddBrand(value) {
        //console.log(value);
        await this.InventoryService.AddBrand(value.data);
        this.Brands = await this.InventoryService.GetBrands();
    }

    async UpdateBrand() {
        return await this.InventoryService.UpdateBrand(this.newbrand);
    }

    async DeleteBrand(value) {
        //console.log(value);
        return await this.InventoryService.DeleteBrand(value.key);
    }

}