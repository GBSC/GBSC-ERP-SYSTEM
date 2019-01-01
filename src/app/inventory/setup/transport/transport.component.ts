import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { Transport } from '../../../core/Models/Inventory/Setup/Transport';

@Component({
    selector: 'app-transport',
    templateUrl: './transport.component.html',
    styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
    public Transports: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetTransportsByCompany(this.CompanyId).subscribe((res: Transport) => {
            this.Transports = res;
        });
    }

    AddTransport(value) {
        this.InventoryService.AddTransport(value.data).subscribe(res => {
            this.InventoryService.GetTransportsByCompany(this.CompanyId).subscribe((res: Transport) => {
                this.Transports = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateTransport() {
        return this.InventoryService.UpdateTransport(this.UpdatedModel).subscribe();
    }

    DeleteTransport(value) {
        return this.InventoryService.DeleteTransport(value.key).subscribe();
    }

}