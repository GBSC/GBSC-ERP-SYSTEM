import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService, EmployeeService } from '../../../core';

@Component({
    selector: 'app-bank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

    public bank: any;
    public employee: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService, public empService: EmployeeService) { }

    async ngOnInit() {

        this.bank = await this.dataService.getAllBanks();

        this.employee = await this.empService.GetAllEmployees();
    }

    addNewbank(bank) {
        this.dataService.addbank(bank.data);
        this.bank = this.dataService.getAllBanks();
    }

    UpdateBank(bank) {

        this.dataService.updateBank(bank)
    }

    deletebank(bnk) {
        this.dataService.DeleteBank(bnk.key);
    }


}