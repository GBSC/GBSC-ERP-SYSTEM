import { Component, OnInit, Input } from '@angular/core';
import { PayrollSetupService, SetupService } from '../../../../core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-salarystructure',
    templateUrl: './salarystructure.component.html',
    styleUrls: ['./salarystructure.component.scss']
})
export class SalarystructureComponent implements OnInit {

    public isDisabled = true;
    public payrollTypes: any;
    public salarystructure: any;
    public groups: any;
    public salaryStructure: any;
    public Detail: any[] =[];
    public StructureDetail: any= [];
    public salaryStructureForm: FormGroup;
    
    @Input('salaryStructureId') id: number;

    constructor(public fb: FormBuilder, public toastr: ToastrService,  public router: Router, public activatedRoute: ActivatedRoute,public payrollsetupservice: PayrollSetupService, public setupservice: SetupService) {
   
        this.salaryStructureForm = this.fb.group({
            GroupId: [''],
            PayrollTypeId: [''],
            Title: [''],
            IsHourlyPay: [''],
            PerHourPay: [''],
            MinimumSalary: [''],
            MaximumSalary: ['']
        })
     }

    async ngOnInit() {

        this.StructureDetail = [];

        this.salarystructure = await this.payrollsetupservice.getSalaryStructures();

        this.payrollTypes = await this.payrollsetupservice.getPayrollTypes();

        this.groups = await this.setupservice.getAllGroups();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
            
        });
        if (this.isUpdate() === true) {
            this.payrollsetupservice.getSalaryStructure(this.id).subscribe(resp => {
                console.log(this.id);
                
                this.salaryStructure = resp;
                let a = this.salaryStructure.salaryStructureDetail;
                this.Detail = a.map(b => {
                    delete b.salaryStructureDetailId;
                    delete b.salaryStructureId;
                    return b;
                }); 
                this.patchValues(this.salaryStructure);
            });
        }
    }

    async addSalaryStructure(value) {
        let structure :any;
        structure = { ...structure, ...value };
        structure.salaryStructureDetail = this.StructureDetail;
       console.log(structure);
       
        // await this.payrollsetupservice.addSalaryStructure(structure);
    }
   
    async addSalaryStructureDetail(value) {
        console.log(value);
        
 }

    check() {
        this.isDisabled = !this.isDisabled;
        return;
    }
    async updateSalaryStructure(value) {
        value.salaryStructureId = this.id;
        value.salaryStructureDetails = this.Detail;
         this.payrollsetupservice.updateSalaryStructure(value).subscribe(resp=>{
             this.toastr.success("Salary Structure or Detail Updated");
             this.router.navigate(['/hrm/payroll/payrollsetup/salarystructuredetail']);
         });
    }

    async deleteSalaryStructure(value) {
        await this.payrollsetupservice.deleteSalaryStructure(value.key);
    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    patchValues(structure: any) {

        this.salaryStructureForm.patchValue({
            PayrollTypeId: structure.payrollTypeId,
            MinimumSalary: structure.minimumSalary,
            MaximumSalary: structure.maximumSalary,
            IsHourlyPay: structure.isHourlyPay,
            PerHourPay: structure.perHourPay,
        })

    }

}