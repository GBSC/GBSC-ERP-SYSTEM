import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { Brand } from '../../../core/Models/Inventory/Setup/Brand';

@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})

export class BrandComponent implements OnInit {
    public Brands: any;
    public newbrand: Brand;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {
    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetNonGeneralBrands(this.CompanyId).subscribe((res: Brand) => {
            this.Brands = res;
        });
        //console.log(this.Brands);
    }

    mergeBrand(value) {
        value.companyId = this.CompanyId;
        value.isGeneralBrand = false;
        this.newbrand = Object.assign(value.oldData, value.newData);
        //console.log(this.newbrand);
    }

    AddBrand(value) {
        //console.log(value);
        value.data.companyId = this.CompanyId;
        value.data.isGeneralBrand = false;
        this.InventoryService.AddBrand(value.data).subscribe(res => {
            this.InventoryService.GetBrandsByCompany(this.CompanyId).subscribe((res: Brand) => {
                this.Brands = res;
            });
        });
    }

    UpdateBrand() {
        return this.InventoryService.UpdateBrand(this.newbrand).subscribe();
    }

    DeleteBrand(value) {
        //console.log(value);
        return this.InventoryService.DeleteBrand(value.key).subscribe();
    }

}