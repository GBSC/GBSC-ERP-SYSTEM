import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';
import { FormBuilder, Validators } from '@angular/forms';
import { MasterPayrollDetail } from '../../../../core/Models/HRM/masterPayrollDetail';
import { MasterPayroll } from '../../../../core/Models/HRM/masterPayroll';

@Component({
    selector: 'app-masterpayroll',
    templateUrl: './masterpayroll.component.html',
    styleUrls: ['./masterpayroll.component.scss']
})
export class MasterpayrollComponent implements OnInit {

    public masterPayroll: any;
    public payrollMaster: any;
    public users: any;
    public frequency: any;
    public masterdetailupdating: any;
    public masterPayrollDetail: any;
    private payrollDetail: MasterPayrollDetail[];

    public banksPayroll: any;
    public payrollType: any;
    public MasterPayrollForm: any;
    public Masterdetail = [];
    public allowance: any;
    public MasterDetailForm: any;
    public currency: any;

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService) { }

    async ngOnInit() {

        this.payrollDetail = [];

        this.MasterPayrollForm = this.fb.group({
            UserId: ['', Validators.required],
            BankTransferCode: ['', Validators.required],
            CurrencyId: ['', Validators.required],
            PayrollBankId: ['', Validators.required]
        });


        this.masterPayroll = await this.payrollsetupservice.getMasterPayrolls();

        this.masterPayrollDetail = await this.payrollsetupservice.getMasterPayrollDetails();

        this.users = await this.empservice.GetAllEmployees();

        this.currency = await this.payrollsetupservice.getCurrencies();

        this.allowance = await this.payrollsetupservice.getAllowances(); 

        this.banksPayroll = await this.payrollsetupservice.getPayrollBanks();

        this.frequency = await this.payrollsetupservice.getFrequencies();

        this.payrollType = await this.payrollsetupservice.getPayrollTypes();
    }


    async addMasterPayrolldetail(value) {
        let data = value.data;
        this.payrollDetail.push(data);
    }

    updatingMasterDetail(value) {
        this.masterdetailupdating = { ...value.oldData, ...value.newData };

    }
    async updateMasterDetail() {
        await this.payrollsetupservice.updateMasterPayrollDetail(this.masterdetailupdating);
    }

    async submitForm(value) {
        let masterPayroll = new MasterPayroll();
        masterPayroll = { ...masterPayroll, ...value };
        masterPayroll.MasterPayrollDetails = this.payrollDetail;
        let x = await this.payrollsetupservice.addMasterPayroll(masterPayroll);

    }

    updatingMasterPayroll(value) {
        this.payrollMaster = { ...value.oldData, ...value.newData };
    }

    async updateMasterPayroll() {
        await this.payrollsetupservice.updateMasterPayroll(this.payrollMaster);
    }



    async deleteMasterPayroll(value) {
        await this.payrollsetupservice.deleteMasterPayroll(value.key);
    }

}