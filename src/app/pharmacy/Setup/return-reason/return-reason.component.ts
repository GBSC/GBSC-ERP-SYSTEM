import { Component, OnInit } from '@angular/core';
import { PharmacyService, AuthService } from '../../../core';
import { ReturnReason } from '../../../core/Models/Pharmacy/ReturnReason';

@Component({
    selector: 'app-return-reason',
    templateUrl: './return-reason.component.html',
    styleUrls: ['./return-reason.component.scss']
})
export class ReturnReasonComponent implements OnInit {
    public ReturnReasons: ReturnReason;
    public UpdatedModel: any;

    constructor(public PharmacyService: PharmacyService, public Auth : AuthService) {

    }

    ngOnInit() {
        this.PharmacyService.GetReturnReasons().subscribe((res: ReturnReason) => this.ReturnReasons = res);
    }

    async AddReturnReason(value) {
        value.data.companyId = this.Auth.getUserCompanyId();
        await this.PharmacyService.AddReturnReason(value.data).toPromise();
        this.PharmacyService.GetReturnReasons().subscribe((res: ReturnReason) => this.ReturnReasons = res);
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateReturnReason() {
        return await this.PharmacyService.UpdateReturnReason(this.UpdatedModel).toPromise();
    }

    async DeleteReturnReason(value) {
        return await this, this.PharmacyService.DeleteReturnReason(value.key).toPromise();
    }

}