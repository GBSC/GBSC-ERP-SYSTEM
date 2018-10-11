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
    public masterdetailupdating: any;
    public masterPayrollDetail: any;
    private payrollDetail: MasterPayrollDetail[];

    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    public MasterPayrollForm: any;
    public Masterdetail = [];
    public MasterDetailForm: any;

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService) { }

    async ngOnInit() {

        this.payrollDetail = [];

        this.MasterPayrollForm = this.fb.group({
            UserId: ['', Validators.required],
            BankTransferCode: ['', Validators.required],
            CurrencyId: ['', Validators.required],
            PayrollBankId: ['', Validators.required]
        });

        //   this.MasterDetailForm = this.fb.group({
        //     Value: ['', Validators.required],
        //     EffectiveDate: ['', Validators.required],
        //     EndDate: ['', Validators.required],
        //     AllowanceId: ['', Validators.required],
        //     FrequencyId: ['', Validators.required],
        //     PayrollTypeId: ['', Validators.required]

        // });


        await this.payrollsetupservice.getmasterpayrolls();
        this.masterPayroll = this.payrollsetupservice.masterpayroll;

        await this.payrollsetupservice.getmasterpayrolldetails();
        this.masterPayrollDetail = this.payrollsetupservice.masterpayrolldetail;

        this.users = await this.empservice.GetAllEmployees();


        await this.payrollsetupservice.getCurrencies();
        let currency = this.payrollsetupservice.Currency;

        await this.payrollsetupservice.getallowances();
        let allowance = this.payrollsetupservice.allowance;

        await this.payrollsetupservice.getpayrollbanks();
        let bank = this.payrollsetupservice.payrollbank;

        await this.payrollsetupservice.getfrequencies();
        let frequency = this.payrollsetupservice.frequency;

        await this.payrollsetupservice.getpayrolltypes();
        let payrolltype = this.payrollsetupservice.payrolltype;
    }


    async addMasterPayrolldetail(value) {
        let data = value.data;
        this.payrollDetail.push(data);
    }

    updatingMasterDetail(value) {
        this.masterdetailupdating = { ...value.oldData, ...value.newData };
        console.log(value);

    }
    async updateMasterDetail() {
        await this.payrollsetupservice.updatemasterpayrolldetail(this.masterdetailupdating);
    }

    async submitForm(value) {
        let masterPayroll = new MasterPayroll();
        masterPayroll = { ...masterPayroll, ...value };
        masterPayroll.MasterPayrollDetails = this.payrollDetail;
        let x = await this.payrollsetupservice.addmasterpayroll(masterPayroll);

    }

    updatingMasterPayroll(value) {
        this.payrollMaster = { ...value.oldData, ...value.newData };
    }

    async updateMasterPayroll() {
        await this.payrollsetupservice.updatemasterpayroll(this.payrollMaster);
    }



    async deleteMasterPayroll(value) {
        await this.payrollsetupservice.Deletemasterpayroll(value.key);
    }

}