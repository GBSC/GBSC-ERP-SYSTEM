import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SuperadminserviceService } from '../../core/Services/SuperAdmin/superadminservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-setupcompany',
    templateUrl: './setupcompany.component.html',
    styleUrls: ['./setupcompany.component.scss']
})
export class SetupcompanyComponent implements OnInit {

    public companyForm: FormGroup;

    public systemAdminForm: FormGroup;

    public company: any;

    public companyId: number;

    public HimsInstalled: boolean;

    public HrmInstalled: boolean;

    public ImsInstalled: boolean;

    public PmsInstalled: boolean;

    public AccountingSystemInstalled: boolean;

    public LisInstalled: boolean;

    public InventoryInstalled: boolean;

    public eTrackerInstalled: boolean;


    public companymodules : any[] = [];

    public modulefeatures : any[] = [];
    public unassignedfeatures : any[] = [];
    public assignedfeatures : any[] = [];
    public companymoduleids : number[] = [];

    constructor(public route: ActivatedRoute, public formBuilder: FormBuilder, public superAdminService: SuperadminserviceService) {

        this.companyForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'numberOfEmployees': ['', Validators.required]
        });

        this.systemAdminForm = this.formBuilder.group({
            'UserName': ['', Validators.required],
            'Password': ['', Validators.required],
            'Email': ['', Validators.required],
            'CNIC': ['', Validators.required],
            'FirstName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'Phone': ['', Validators.required],
            'DOB': [new Date()]
        });

        


    }

    ngOnInit() {

        // function comparer(otherArray){
        //     return function(current){
        //         return otherArray.filter(function(other){
        //             return other.value == current.value && other.display == current.display
        //         }).length == 0;
        //     }
        // }


        this.route.params.subscribe((params) => {
            this.companyId = +params['id'];
        });

        if (this.companyId) {
            console.log(this.companyId);

            this.superAdminService.getCompanyInfo(this.companyId).subscribe(company => {
                this.company = company;

                for (let modul of company.modules) {
                    this.checkModulesInstalled(modul);
                }

                this.companymoduleids = company.moduleIds;
                console.log(this.companymoduleids);

                this.superAdminService.getAllModuleFeatures(this.companymoduleids).subscribe((res : any[]) => {
                    this.modulefeatures = res;
                    // console.log(this.modulefeatures);

                    this.superAdminService.getFeaturesByModules(this.companymoduleids).subscribe((res : any[]) => {
                        this.assignedfeatures = res;
                        // console.log(this.assignedfeatures);
                    });

                    // var uniqueResultOne = this.modulefeatures.filter(function(obj) {
                    //     return !this.assignedfeatures.some(function(obj2) {
                    //         return obj.value.name == obj2.value.name;
                    //     });
                    // });

                    // console.log(uniqueResultOne);

                    

                    //   console.log(this.modulefeatures.filter(comparer(this.assignedfeatures)));

                    this.modulefeatures.forEach((feature : any) => {
                        // console.log(this.assignedfeatures.find(a => a.name === feature.name));
                        // console.log(this.assignedfeatures.find(a => a.name == feature.name));

                        // console.log(this.assignedfeatures.find(a => a.name != feature.name));
                        // console.log(this.assignedfeatures.find(a => a.name = feature.name));
                        // console.log(this.assignedfeatures.find(a => a.name != feature.name));
                        // console.log(this.assignedfeatures.find(a => a.name = feature.name));

                        // if(this.assignedfeatures.find(a => a.name === feature.name) == 'undefined') {
                        //     this.unassignedfeatures.push(feature);
                        //     console.log(this.unassignedfeatures);
                        // };
                    });


                     this.modulefeatures.filter(t=>{
                        console.log('t');
                        this.assignedfeatures = this.assignedfeatures.filter(x=>
                            x.name == t.name
                        );
                        console.log(this.assignedfeatures)
                    });
                    // console.log(this.unassignedfeatures);

                    this.superAdminService.getModulesByCompany(this.companyId).subscribe((res : any[]) => {
                        this.companymodules = res;
                        // console.log(this.companymodules);
                    });

                });
            });
        }
    }


    
    addFeature(value) {
        console.log(value);
        // this.superAdminService.addCompanyFeatures()
    }

    deleteFeature(value) {
        console.log(value)
    }


    async onAddCompany(value) {
        // console.log(value);
        this.superAdminService.addCompany(value).subscribe(resp => {
            console.log("Company Added");
            this.companyId = resp.companyID;
            this.superAdminService.addModule({ Name: "Security Admin", CompanyId: this.companyId, Code: "000", ModuleId: 0 }).subscribe();
        });
    }


    async onAddModule(value) {

        var modue = { Name: value, CompanyId: this.companyId, Code: "000", ModuleId: 0 };

        this.superAdminService.addModule(modue).subscribe(s => {

            this.checkModulesInstalled(value);
        });
    }

    checkModulesInstalled(value) {
        if (value == "Hospital Management System") {
            this.HimsInstalled = true;
        }
        else if (value == "Human Resource Management") {
            this.HrmInstalled = true;
        }
        else if (value == "Inventory Management System") {
            this.ImsInstalled = true;
        }
        else if (value == "Payroll Management System") {
            this.PmsInstalled = true;
        }
        else if (value == "Accounting System") {
            this.AccountingSystemInstalled = true;
        }
        else if (value == "Lab Information System") {
            this.LisInstalled = true;
        }
        else if (value == "Inventory") {
            this.InventoryInstalled = true;
        }
        else if (value == "eTracker") {
            this.eTrackerInstalled = true;
        }
    }

    async onSubmitRegistration(value: SystemAdminRegistrationViewModel) {

        value.CompanyId = this.companyId;
        value.IsSystemAdmin = true;

        this.superAdminService.registerAdmin(value).subscribe(resp => {

            console.log("Admin registerd");
        });

    }

}
