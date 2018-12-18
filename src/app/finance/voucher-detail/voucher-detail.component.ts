import { Component, OnInit } from '@angular/core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { SetupService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voucher-detail',
  templateUrl: './voucher-detail.component.html',
  styleUrls: ['./voucher-detail.component.scss']
})
export class VoucherDetailComponent implements OnInit {

  public departments: any;
  public financialYear: any;
  public voucherType: any;
  public voucher: any;
  public detailAccount: any; 
  public voucherId: any; 
  public finalvoucher : any;
  public notfinalvoucher : any;

  constructor(public financeSetupService: FinanceSetupService, public router: Router, public financeService: FinanceService, public SetupService: SetupService) { }

  async ngOnInit() {
    this.voucher = await this.financeService.getVouchers();
    console.log(this.voucher);
    this.notfinalvoucher = this.voucher.filter(t=> t.isFinal === null ||   t.isFinal ==  false);
    console.log(this.notfinalvoucher);
    this.finalvoucher = this.voucher.filter(t=> t.isFinal != null &&  t.isFinal !=  false );
    console.log(this.finalvoucher);

    this.voucherType = await this.financeSetupService.getVoucherTypes();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();

    this.financialYear = await this.financeSetupService.getFinancialYears();

    this.departments = await this.SetupService.getAllDepartments();    
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addvoucher.bind(this)
        }
      });
  }


  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
      e.component.selectRowsByIndexes(-1);
  }

  selectionChanged(e) {
    e.component.collapseAll(-0);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
  }

  addvoucher() {
    this.router.navigate(['/finance/voucher']);
  }

  getCurrentRowData(d) {
    this.voucherId = d.key;
    this.router.navigate(['finance/update-voucher/' + this.voucherId]);
  }

}
