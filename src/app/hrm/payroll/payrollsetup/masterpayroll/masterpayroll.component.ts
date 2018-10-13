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
<<<<<<< HEAD
    public masterPayrollDetail: any;
    private payrollDetail: MasterPayrollDetail[];

    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    public MasterPayrollForm: any;
    public Masterdetail = [];
    public MasterDetailForm: any;
=======
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
>>>>>>> master

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService, public empservice: EmployeeService) { }

    async ngOnInit() {

        this.payrollDetail = [];

        this.MasterPayrollForm = this.fb.group({
            UserId: ['', Validators.required],
            BankTransferCode: ['', Validators.required],
            CurrencyId: ['', Validators.required],
            PayrollBankId: ['', Validators.required]
        });

<<<<<<< HEAD
        //   this.MasterDetailForm = this.fb.group({
        //     Value: ['', Validators.required],
        //     EffectiveDate: ['', Validators.required],
        //     EndDate: ['', Validators.required],
        //     AllowanceId: ['', Validators.required],
        //     FrequencyId: ['', Validators.required],
        //     PayrollTypeId: ['', Validators.required]

        // });
=======

        this.masterPayroll = await this.payrollsetupservice.getMasterPayrolls();
>>>>>>> master

        this.masterPayrollDetail = await this.payrollsetupservice.getMasterPayrollDetails();

<<<<<<< HEAD
        await this.payrollsetupservice.getmasterpayrolls();
        this.masterPayroll = this.payrollsetupservice.masterpayroll;

        await this.payrollsetupservice.getmasterpayrolldetails();
        this.masterPayrollDetail = this.payrollsetupservice.masterpayrolldetail;

        await this.empservice.GetAllEmployees();
        let users = this.empservice.employeereg;

        await this.payrollsetupservice.getCurrencies();
        let currency = this.payrollsetupservice.Currency;

        await this.payrollsetupservice.getallowances();
        let allowance = this.payrollsetupservice.allowance;

        await this.payrollsetupservice.getfrequencies();
        let frequency = this.payrollsetupservice.frequency;

        await this.payrollsetupservice.getpayrolltypes();
        let payrolltype = this.payrollsetupservice.payrolltype;
    }
=======
        this.users = await this.empservice.GetAllEmployees();

        this.currency = await this.payrollsetupservice.getCurrencies();

        this.allowance = await this.payrollsetupservice.getAllowances();

        this.banksPayroll = await this.payrollsetupservice.getPayrollBanks();

        this.frequency = await this.payrollsetupservice.getFrequencies();

        this.payrollType = await this.payrollsetupservice.getPayrollTypes();
    }

>>>>>>> master

    async addMasterPayrolldetail(value) {
        let data = value.data;
        this.payrollDetail.push(data);
    }

<<<<<<< HEAD
    async addMasterPayrolldetail(value) {
        let data = value.data;
        this.payrollDetail.push(data);
    }

    updateMasterDetail(value) {
        let data = value.data;

        console.log(this.payrollDetail);
    }
    async submitForm(value) {

        let masterPayroll = new MasterPayroll();
        masterPayroll = { ...masterPayroll, ...value };
        masterPayroll.MasterPayrollDetails = this.payrollDetail;
        let x = await this.payrollsetupservice.addmasterpayroll(masterPayroll);

    }

    async updateMasterPayroll(value) {
        console.log(value);
        await this.payrollsetupservice.updatemasterpayroll(value);
    }

    async deleteMasterPayroll(value) {
        await this.payrollsetupservice.Deletemasterpayroll(value.key);
    }
=======
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

>>>>>>> master


    async deleteMasterPayroll(value) {
        await this.payrollsetupservice.deleteMasterPayroll(value.key);
    }

}