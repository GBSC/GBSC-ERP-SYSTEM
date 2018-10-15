import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowancearrear',
    templateUrl: './allowancearrear.component.html',
    styleUrls: ['./allowancearrear.component.scss']
})
export class AllowancearrearComponent implements OnInit {
    public allowancearrear: any;
    @ViewChild('clientGrid') clientGrid: DxDataGridComponent;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getallowancearrears();
        this.allowancearrear = this.payrollsetupservice.allowancearrear;

    }

    async addallowancearrear(value) {
        await this.payrollsetupservice.addallowancearrear(value.data);
        this.clientGrid.instance.refresh();
    }

    async updateallowancearrear(value) {
        console.log(value);
        await this.payrollsetupservice.updateallowancearrear(value);
    }

    async deleteallowancearrear(value) {
        await this.payrollsetupservice.Deleteallowancearrear(value.key);
    }

}