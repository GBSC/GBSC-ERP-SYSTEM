import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { Comission } from '../../../core/Models/Inventory/Setup/Comission';

@Component({
    selector: 'app-comission',
    templateUrl: './comission.component.html',
    styleUrls: ['./comission.component.scss']
})
export class ComissionComponent implements OnInit {
    public Comissions: any;
    public updatedmodel: Comission;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) { }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();
        
        this.InventoryService.GetComissionsByCompany(this.CompanyId).subscribe((res: Comission) => {
            this.Comissions = res;
        });
    }

    UpdateModel(value) {
        this.updatedmodel = Object.assign(value.oldData, value.newData);
        console.log(this.updatedmodel);
    }

    AddComission(value) {
        console.log(value.data);
        this.InventoryService.AddComission(value.data).subscribe(res => {
            this.InventoryService.GetComissionsByCompany(this.CompanyId).subscribe((res: Comission) => {
                this.Comissions = res;
            });
        });
    }

    UpdateComission() {
        return this.InventoryService.UpdateComission(this.updatedmodel).subscribe();
    }

    DeleteComission(value) {
        console.log(value);
        return this.InventoryService.DeleteComission(value.key).subscribe();
    }

}