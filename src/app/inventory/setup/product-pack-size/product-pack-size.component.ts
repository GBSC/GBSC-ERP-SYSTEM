import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { PackSize } from '../../../core/Models/Inventory/Setup/PackSize';
@Component({
    selector: 'app-product-pack-size',
    templateUrl: './product-pack-size.component.html',
    styleUrls: ['./product-pack-size.component.scss']
})
export class ProductPackSizeComponent implements OnInit {
    public PackSizes: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetPackSizesByCompany(this.CompanyId).subscribe((res: PackSize) => {
            this.PackSizes = res;
        });
    }

    AddPackSize(value) {
        this.InventoryService.AddPackSize(value.data).subscribe(res => {
            this.InventoryService.GetPackSizesByCompany(this.CompanyId).subscribe((res: PackSize) => {
                this.PackSizes = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdatePackSize() {
        return this.InventoryService.UpdatePackSize(this.UpdatedModel).subscribe();
    }

    DeletePackSize(value) {
        return this.InventoryService.DeletePackSize(value.key).subscribe();
    }
}