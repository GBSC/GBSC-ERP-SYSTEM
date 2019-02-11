import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { Brand } from '../../../core/Models/Inventory/Setup/Brand';

@Component({
  selector: 'app-general-brand',
  templateUrl: './general-brand.component.html',
  styleUrls: ['./general-brand.component.css']
})
export class GeneralBrandComponent implements OnInit {
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
        this.newbrand = Object.assign(value.oldData, value.newData);
        //console.log(this.newbrand);
    }

    AddBrand(value) {
        //console.log(value);
        value.data.companyId = this.CompanyId;
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