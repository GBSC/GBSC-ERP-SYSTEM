import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';

@Component({
    selector: 'app-return-reason',
    templateUrl: './return-reason.component.html',
    styleUrls: ['./return-reason.component.scss']
})
export class ReturnReasonComponent implements OnInit {
    private ReturnReasons : any;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    async ngOnInit() {
        this.ReturnReasons = await this.PharmacyService.GetReturnReasons();
    }

    async AddReturnReason(value) {
        await this.PharmacyService.AddReturnReason(value.data);
        this.ReturnReasons = await this.PharmacyService.GetReturnReasons();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateReturnReason() {
        return await this.PharmacyService.UpdateReturnReason(this.UpdatedModel);
    }

    async DeleteReturnReason(value) {
        return await this,this.PharmacyService.DeleteReturnReason(value.key);
    }

}