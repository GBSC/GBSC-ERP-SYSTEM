import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';
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
<<<<<<< HEAD
    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService) { }

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

        await this.payrollsetupservice.getpayrollbanks();
        this.payrollBank = this.payrollsetupservice.payrollbank;

        await this.payrollsetupservice.getbankadvicetemplates();
        let bankAdviceTemplate = this.payrollsetupservice.bankadvicetemplate;

        await this.payrollsetupservice.getchequetemplates();
        let chequeTemplate = this.payrollsetupservice.chequetemplate;
    }

    async addPayrollBank() {
        await this.payrollsetupservice.addpayrollbank(this.PayrollBankForm.value);
        console.log(this.PayrollBankForm.value);
        this.PayrollBankForm.reset();
    }

    updatingPayrollBank(value) {
        this.updatingbank = { ...value.oldData, ...value.newData };
    }
    async updatePayrollBank() {
        await this.payrollsetupservice.updatepayrollbank(this.updatingbank);
    }

    async deletePayrollBank(value) {
        await this.payrollsetupservice.Deletepayrollbank(value.key);
=======
    public chequeTemplate: any;
    public bankAdviceTemplate: any;

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService) { }

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
    }

    updatingPayrollBank(value) {
        this.updatingbank = { ...value.oldData, ...value.newData };
    }
    async updatePayrollBank() {
        await this.payrollsetupservice.updatePayrollBank(this.updatingbank);
    }

    async deletePayrollBank(value) {
        await this.payrollsetupservice.deletePayrollBank(value.key);
>>>>>>> master
    }

}