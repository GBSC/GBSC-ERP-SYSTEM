import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowancearrear',
    templateUrl: './allowancearrear.component.html',
    styleUrls: ['./allowancearrear.component.scss']
})
export class AllowancearrearComponent implements OnInit {

    public updatingModel: any;
    public allowancearrear: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    ngOnInit() {

        this.payrollsetupservice.getAllowanceArrears().subscribe(rp => {
            this.allowancearrear = rp; 
        });
    }

     addallowancearrear(value) {
         this.payrollsetupservice.addAllowanceArrear(value.data).subscribe(res => {
            console.log(res);
            this.payrollsetupservice.getAllowanceArrears().subscribe(resp => {
                this.allowancearrear = resp;
            });
        });
    }

    updatingAllowanceArrear(value) {
        this.updatingModel = {...value.oldData, ...value.newData};
    }

     updateAllowanceArrear() {
         this.payrollsetupservice.updateAllowanceArrear(this.updatingModel).subscribe(rep => {
             console.log(rep);
             
         });
    }

    deleteallowancearrear(value) {
         this.payrollsetupservice.deleteAllowanceArrear(value.key).subscribe(del => {
             console.log(del); 
         });
    }

}