import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';

@Component({
    selector: 'app-bank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

    public bank: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {

        this.bank = await this.dataService.getAllBanks();
    }

    addNewbank(bank) {
        this.dataService.addbank(bank.data);
    }

    UpdateBank(bank) {

        this.dataService.updateBank(bank)
    }

    deletebank(bnk) {
        this.dataService.DeleteBank(bnk.key);
    }


}