import { Component, OnInit, ViewChild } from '@angular/core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { Account } from '../../core/Models/Finance/Account';
import { SetupService } from '../../core';
import { Router } from '@angular/router';
import { UnpostedVoucherViewModel } from '../../core/Models/Finance/UnpostedVoucherViewModel';
import { PostedVoucherViewModel } from '../../core/Models/Finance/PostedVoucherViewModel';
import { FinancialYear } from '../../core/Models/Finance/financialYear';
import { DxDataGridComponent } from 'devextreme-angular';
import { ToastrService } from 'ngx-toastr';
import { TransactionAccount } from '../../core/Models/Finance/TransactionAccount';
import { VoucherType } from '../../core/Models/Finance/vouchertype';

@Component({
    selector: 'app-voucher-detail',
    templateUrl: './voucher-detail.component.html',
    styleUrls: ['./voucher-detail.component.scss']
})
export class VoucherDetailComponent implements OnInit {

<<<<<<< HEAD
    public departments: any;
    public financialYear: any;
    public voucherType: any;
    public voucher: any;
    public detailAccount: any;
    public voucherId: any;

    constructor(public financeSetupService: FinanceSetupService, public router: Router, public financeService: FinanceService, public SetupService: SetupService) { }

    async ngOnInit() {

        this.voucher = await this.financeService.getVouchers();
        this.voucherType = await this.financeSetupService.getVoucherTypes();
        this.detailAccount = await this.financeSetupService.getDetailAccounts();
        this.financialYear = await this.financeSetupService.getFinancialYears();

        // this.departments = await this.SetupService.getAllDepartments();    
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
=======
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

    public financialYears: any[];
    public voucherTypes: any[];
    public unprocessedaccounts: TransactionAccount[] = [];

    public UnpostedVouchers: UnpostedVoucherViewModel[] = [];
    public PostedVouchers: PostedVoucherViewModel[] = [];

    constructor(public financeSetupService: FinanceSetupService, public router: Router, public financeService: FinanceService, public SetupService: SetupService, public Toastr: ToastrService) { }

    async ngOnInit() {

        this.financeService.getUnpostedVouchers().subscribe((res: UnpostedVoucherViewModel[]) => {
            this.UnpostedVouchers = res;
            console.log(this.UnpostedVouchers);
        });

        this.financeService.getPostedVouchersByDate(new Date()).subscribe((res: PostedVoucherViewModel[]) => {
            this.PostedVouchers = res;
            console.log(this.PostedVouchers);
        });

        this.financeSetupService.GetVoucherTypes().subscribe((res: VoucherType[]) => {
            this.voucherTypes = res;
        });

        this.financeService.getTransactionAccounts().subscribe((res: TransactionAccount[]) => {
            res.forEach((element: TransactionAccount) => {
                element.description = element.accountCode + '-' + element.description;
                this.unprocessedaccounts.push(element);
            });
        });

        this.financeSetupService.GetFinancialYears().subscribe((res: FinancialYear[]) => {
            this.financialYears = res.filter(a => a.isActive == true);
        });
    }

    AddVoucher() {
        this.router.navigate(['/finance/voucher']);
    }

    EditVoucher(value: any) {
        // console.log(value);
        this.router.navigate(['finance/update-voucher/' + value.unpostedVoucherId]);
    }

    DeleteVoucher(value: any) {
        this.financeService.deleteUnpostedVoucher(value.unpostedVoucherId).subscribe((res: any) => {
            this.financeService.getUnpostedVouchers().subscribe((res: UnpostedVoucherViewModel[]) => {
                this.UnpostedVouchers = res;
                console.log(this.UnpostedVouchers);
            });
            this.Toastr.success("Voucher Deleted");
        });
    }

    GetPostedVoucehrsByDateRange(fromdate: Date, todate: Date) {
        this.financeService.getPostedVouchersByDateRange(fromdate, todate).subscribe((res: PostedVoucherViewModel[]) => {
            this.PostedVouchers = res;
            console.log(this.PostedVouchers);
        });
    }

    PostSelectedVouchers() {
        this.dataGrid.instance.getSelectedRowsData().then((rowData: any[]) => {

            var postvs: UnpostedVoucherViewModel[] = [];

            rowData.forEach(element => {
                var postv: any = {
                    unpostedVoucherId: element.unpostedVoucherId,
                    voucherId: element.voucherId,
                    voucherCode: element.voucherCode,
                    date: element.date,
                    description: element.description,
                    totalCreditAmount: element.totalCreditAmount,
                    totalDebitAmount: element.totalDebitAmount,
                    financialYearId: element.financialYear.financialYearId,
                    voucherTypeId: element.voucherType.voucherTypeId,
                    posted: true
                };

                postvs.push(postv);
            });

            this.financeService.postUnpostedVouchers(postvs).subscribe((res: any) => {

                this.financeService.getUnpostedVouchers().subscribe((res: UnpostedVoucherViewModel[]) => {
                    this.UnpostedVouchers = res;
                    console.log(this.UnpostedVouchers);
                });

                this.financeService.getPostedVouchersByDate(new Date()).subscribe((res: PostedVoucherViewModel[]) => {
                    this.PostedVouchers = res;
                    console.log(this.PostedVouchers);
                });

                this.Toastr.success("Selected Vouchers Posted");
            });
        });
    }

    PostVoucher(value: any) {

        var postv: any = {
            unpostedVoucherId: value.unpostedVoucherId,
            voucherId: value.voucherId,
            voucherCode: value.voucherCode,
            date: value.date,
            description: value.description,
            totalCreditAmount: value.totalCreditAmount,
            totalDebitAmount: value.totalDebitAmount,
            financialYearId: value.financialYear.financialYearId,
            voucherTypeId: value.voucherType.voucherTypeId,
            posted: true
        };

        this.financeService.postUnpostedVoucher(postv).subscribe((res: any) => {
            this.financeService.getUnpostedVouchers().subscribe((res: UnpostedVoucherViewModel[]) => {
                this.UnpostedVouchers = res;
                console.log(this.UnpostedVouchers);
            });
            this.financeService.getPostedVouchersByDate(new Date()).subscribe((res: PostedVoucherViewModel[]) => {
                this.PostedVouchers = res;
                console.log(this.PostedVouchers);
            });
            this.Toastr.success("Posted");
        });
    }

    PrintVoucher(value: any) {
        console.log(value);
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d
    }

}