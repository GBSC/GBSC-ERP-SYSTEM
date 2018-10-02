import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-mode-of-payment',
    templateUrl: './mode-of-payment.component.html',
    styleUrls: ['./mode-of-payment.component.scss']
})
export class ModeOfPaymentComponent implements OnInit {
    private ModeOfPayments : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) { }

    async ngOnInit() {
        this.ModeOfPayments = await this.InventoryService.GetModeOfPayments();
    }

    async AddModeOfPayment(value) {
        //console.log(value.data);
        await this.InventoryService.AddModeOfPayment(value.data);
        this.ModeOfPayments = await this.InventoryService.GetModeOfPayments();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateModeOfPayment() {
        return await this.InventoryService.UpdateModeOfPayment(this.UpdatedModel);
    }

    async DeleteModeOfPayment(value) {
        return await this.InventoryService.DeleteModeOfPayment(value.key);
    }

}