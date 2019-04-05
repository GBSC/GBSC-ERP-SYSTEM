import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PayrollSetupService } from '../../../../core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-allowance-deduction',
    templateUrl: './allowance-deduction.component.html',
    styleUrls: ['./allowance-deduction.component.css']
})
export class AllowanceDeductionComponent implements OnInit {

    public allowancededuction: any;
    public allowanceCalculationTypes: any;
    public AllowanceorDeductionForm: FormGroup;
 

    constructor(public fb: FormBuilder, public toaster : ToastrService ,public payrollSetupService: PayrollSetupService, public router: Router) { }

    async ngOnInit() {

        this.AllowanceorDeductionForm = this.fb.group({
            Title: ['', Validators],
            FixedValue: ['', Validators],
            Type: ['', Validators],
            AllowanceCalculationTypeId: ['', Validators],
            ValueExpressionPayment: ['', Validators],
            ValueExpressionPaymentFrom: ['', Validators],
            ValueExpressionForecast: ['', Validators],
            ValueExpressionForecastFrom: ['', Validators],
            CalculationSequenceNumber: ['', Validators],
            RemitKey: ['', Validators],
            GlCodeAllowance: ['', Validators],
            RepostNumber: ['', Validators],
            GlCodeDeduction: ['', Validators],
            GlCode: ['', Validators],
            DefaultCostCenter: ['', Validators],
            IsProrated: ['', Validators],
            IsBaseAllowance: ['', Validators],
            IsOneTimeAllowance: ['', Validators],
            IsGrossSalary: ['', Validators]
        });


        this.payrollSetupService.getAllowanceDeductions().subscribe(resp => {
            this.allowancededuction = resp;
        });

        this.allowanceCalculationTypes = await this.payrollSetupService.getAllowanceCalculationTypes();
    }

     addAllowanceDeduction() {
         this.payrollSetupService.addAllowanceDeduction(this.AllowanceorDeductionForm.value).subscribe(resp => {
            console.log(resp);   
            this.payrollSetupService.getAllowanceDeductions().subscribe(rs =>{
                this.allowancededuction = rs;  }); 
        });
        this.toaster.success("Successfully! Added");
        this.router.navigate(['/hrm/payroll/allowancedeductiondetail']);
    }

}
