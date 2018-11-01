import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { Voucher } from '../../core/Models/Finance/voucher';
import { VoucherDetail } from '../../core/Models/Finance/voucherDetail';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { SetupService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {

  public departments: any;
  public financialYear: any;
  public Detail: any[] = [];
  public voucherType: any;
  public voucher: any;
  public detailAccount: any;
  public VoucherForm: any;
  public Voucher: any;
  public voucherDetail: VoucherDetail[];

  @Input('voucherId') id:number;

  constructor(private toastr: ToastrService, public router: Router, private fb: FormBuilder, public activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService, public SetupService: SetupService) { }

  async ngOnInit() {

    this.voucherDetail = [];

    this.VoucherForm = this.fb.group({

      VoucherCode: [''],
      Date: [''],
      Description: [''],
      ChequeNumber: [''],
      Total: [''],
      IsFinal: [''],
      VoucherTypeId: ['']
    })

    // this.VoucherDetailForm = this.fb.group({

    //   DetailAccountId: [''],
    //   DebitAmount: [''],
    //   CreditAmount: [''],
    //   DepartmentName: [''],
    //   UniqueName: [''],
    //   Description: [''],
    // })
 
    this.voucherType = await this.financeSetupService.getVoucherTypes();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();

    this.financialYear = await this.financeSetupService.getFinancialYears();

    this.departments = await this.SetupService.getAllDepartments();    

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.isUpdate() === true) {

      this.financeService.getVoucher(this.id).subscribe(resp => {

        this.Voucher = resp; 
        let a = this.Voucher.voucherDetails;
        this.Detail = a.filter(b => {
          delete b.voucherDetailId;
          delete b.voucherId;
          return b;
        });
        this.patchValues(this.Voucher);
      });
    }

  }

  isUpdate(): boolean {

    if (this.id > 0) {
      return true;
    }
    else
      return false;
  }

   addVoucherDetail(value) {
     console.log(value);
    let data = value.data;
    this.voucherDetail.push(data);
  }

  onEditorPreapring(e) {
    console.log(e);
  }
 

  onContentReady(e) {
    
    if (!e.component.rowAdded) {
      e.component.rowAdded = true;
      e.component.addRow();
    }

    // if(!e.component.hasEditdata()) {
    //   console.log('aa');
    // }
    // if(e.component.hasEditdata()) {
    //   console.log('bb');
    // }
  }
 
  closeEditCell(e){
    console.log(e);
  }

  editorPrepared(e) {
    console.log(e);
    // e.editorElement.dxTextBox('instance').option('onValueChanged', args => {
    //     e.setValue(args.value);
    //     console.log(args);
    //     console.log("asdf");
        
    // });
      if (e.parentType == 'dataRow' && e.dataField == 'creditAmount') {

          e.editorOptions.onValueChanged( args => {
            console.log("args");
          });
        }
    }

    // e.editorOptions.onValueChanged(), args => {
    //   console.log("args");
    // }

  onValueChanged(e) {
    console.log("e");
  }

  getCellElement(rowIndex, visibleColumnIndex){
    console.log(rowIndex,visibleColumnIndex);
    
  }
  async addVoucher(value) {
    let v = new Voucher();
    v = { ...v, ...value };
    v.VoucherDetails = this.voucherDetail;
     await this.financeService.addVoucher(v); 
     this.router.navigate(['/finance/voucher-detail']);

  }

   updatevoucherDetail(value) {
    console.log(value);
  }

  async update(value){

    value.voucherId = this.id;
    value.VoucherDetails = this.Detail;
    this.financeService.updateVoucher(value).subscribe(resp=>{
      this.toastr.success("Voucher Updated"); 
      this.router.navigate(['finance/voucher-detail']);
    })
  }
 
  patchValues(voucher: any) {

    this.VoucherForm.patchValue({

      Date: voucher.date,
      VoucherCode: voucher.voucherCode,
      DepartmentName: voucher.departmentName,
      DepartmentCode: voucher.departmentCode,
      Description: voucher.description,
      ChequeNumber: voucher.chequeNumber,
      TotalCreditAmount: voucher.totalCreditAmount,
      TotalDebitAmount: voucher.totalDebitAmount,
      IsFinal: voucher.isFinal,
      VoucherTypeId: voucher.voucherTypeId,
      FinancialYearId: voucher.financialYearId 

    })

  }
}
