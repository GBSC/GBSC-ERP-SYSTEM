import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../../../core/Services/Finance/finance.service';


@Component({
  selector: 'app-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {

  detailAccount: any;
  DetailAccountForm: any;
  secondSubAccount: any;
  UpdatingdetailAccount: any;

  constructor(private fb: FormBuilder, public financeService: FinanceService) { }

  async ngOnInit() {

      this.DetailAccountForm = this.fb.group({
        DetailAccountCode: [''],
        Name: [''], 
        OpeningBalance: [''], 
        SecondSubAccountId: [''] 
      });

      this.detailAccount = await this.financeService.getDetailAccounts();
      
      this.secondSubAccount = await this.financeService.getSecondSubAccounts();
  }

  async addDetailaccount() {

      await this.financeService.addDetailAccount(this.DetailAccountForm.value);
  }

  async updatingDetailaccount(value) {

      this.UpdatingdetailAccount = { ...value.oldData, ...value.newData };
  }
  async updateDetailaccount() {

      await this.financeService.updateDetailAccount(this.UpdatingdetailAccount);
  }

  async deleteDetailaccount(value) {

      await this.financeService.DeleteDetailAccount(value.data);
  }

}