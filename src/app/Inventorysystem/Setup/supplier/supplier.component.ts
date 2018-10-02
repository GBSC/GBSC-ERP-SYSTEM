import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { InventorysystemService } from '../../service/Inventorysystem.service';


@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
    public Supplier: any;
    public UpdatedModel : any;

    constructor(private InventoryService: InventorysystemService) {
       
    }

    async  ngOnInit() {
        this.Supplier = await this.InventoryService.GetSuppliers();
    }

    async AddSupplier(value) {
        await this.InventoryService.AddSupplier(value.data);
        this.Supplier = await this.InventoryService.GetSuppliers();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateSupplier() {
        return await this.InventoryService.UpdateSupplier(this.UpdatedModel);
    }

    async DeleteSupplier(value) {
        return await this.InventoryService.DeleteSupplier(value.key);
    }





}
