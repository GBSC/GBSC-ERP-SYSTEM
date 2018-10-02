import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-transport',
    templateUrl: './transport.component.html',
    styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
    private Transports : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.Transports = await this.InventoryService.GetTransports();
    }

    async AddTransport(value) {
        await this.InventoryService.AddTransport(value.data);
        this.Transports = await this.InventoryService.GetTransports();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateTransport() {
        return this.InventoryService.UpdateTransport(this.UpdatedModel);
    }

    async DeleteTransport(value) {
        return this.InventoryService.DeleteTransport(value.key);
    }

}