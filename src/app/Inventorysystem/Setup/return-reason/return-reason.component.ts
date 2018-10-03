import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-return-reason',
    templateUrl: './return-reason.component.html',
    styleUrls: ['./return-reason.component.scss']
})
export class ReturnReasonComponent implements OnInit {
    private ReturnReasons : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.ReturnReasons = await this.InventoryService.GetReturnReasons();
    }

    async AddReturnReason(value) {
        await this.InventoryService.AddReturnReason(value.data);
        this.ReturnReasons = await this.InventoryService.GetReturnReasons();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateReturnReason() {
        return await this.InventoryService.UpdateReturnReason(this.UpdatedModel);
    }

    async DeleteReturnReason(value) {
        return await this,this.InventoryService.DeleteReturnReason(value.key);
    }

}