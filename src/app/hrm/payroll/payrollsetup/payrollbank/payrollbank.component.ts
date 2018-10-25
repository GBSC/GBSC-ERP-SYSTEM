import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PayrollSetupService, SetupService } from '../../../../core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-payrollbank',
    templateUrl: './payrollbank.component.html',
    styleUrls: ['./payrollbank.component.scss']
})
export class PayrollbankComponent implements OnInit {
 

    public payrollBank: any;
    public PayrollBankForm: FormGroup;
    private updatingbank: any;
    public chequeTemplate: any;
    public msg: any;
    public bankAdviceTemplate: any;

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService, public setupservice: SetupService) { }

    async ngOnInit() {

        this.PayrollBankForm = this.fb.group({
            BankTitle: ['', Validators],
            AccountNumber: ['', Validators],
            RoutingCode: ['', Validators],
            UniqueId: ['', Validators],
            RemitType: ['', Validators],
            RemitKey: ['', Validators],
            BranchCode: ['', Validators],
            Branch: ['', Validators],
            BranchContactNumber: ['', Validators],
            BranchAddress: ['', Validators],
            BranchEmplyeeName: ['', Validators],
            BranchEmplyeeDesignation: ['', Validators],
            FirstApproverName: ['', Validators],
            FirstApproverDesignation: ['', Validators],
            SecondApproverName: ['', Validators],
            SecondApproverDesignation: ['', Validators],
            BankAdviceTemplateId: ['', Validators],
            ChequeTemplateId: ['', Validators],
            CostCentreCode: ['', Validators],
            CompanyBank: ['', Validators],
            GlCode: ['', Validators],
            Active: ['', Validators]
        });

        this.payrollBank = await this.payrollsetupservice.getPayrollBanks();

        this.bankAdviceTemplate = await this.payrollsetupservice.getBankAdviceTemplates();

        this.chequeTemplate = await this.payrollsetupservice.getChequeTemplates();
    }

    async addPayrollBank() {
        await this.payrollsetupservice.addPayrollBank(this.PayrollBankForm.value);
        this.PayrollBankForm.reset();
        //  alert('Bank Added Successfully');
        this.msg = 'success';
        setTimeout(() => {
            this.msg = null;
          }, 3000);
    }
 

    updatingPayrollBank(value) {
        this.updatingbank = { ...value.oldData, ...value.newData };
    }
    async updatePayrollBank() {
        await this.payrollsetupservice.updatePayrollBank(this.updatingbank);
       
    }

    async deletePayrollBank(value) {
        await this.payrollsetupservice.deletePayrollBank(value.key);
    }

}