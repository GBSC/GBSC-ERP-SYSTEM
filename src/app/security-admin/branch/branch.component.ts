import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService, AuthService, HrmsService } from '../../core';
import { Branch } from '../../core/Models/HRM/branch';
import { City } from '../../core/Models/HRM/city';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html',
    styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
    pattern: any = /^\d{3}-\d{8}$/i;
    public cities: any[] = [];
    public branches: any[] = [];
    public updatingModel: any;

    constructor(public SystemAdministrationServiceobj: SystemAdministrationService, public hrmService: HrmsService, public authService : AuthService) { }

    async ngOnInit() {

        this.SystemAdministrationServiceobj.getBranchesByComapnyId(this.authService.getUserCompanyId()).subscribe((res : Branch[]) => {
            this.branches = res;
        });

        this.hrmService.GetCitiesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : City[]) => {
            this.cities = res;
        });
    }

    async addBranches(value) {
         
        value.data.companyId = this.authService.getUserCompanyId(); 
        await this.SystemAdministrationServiceobj.addBranch(value.data).subscribe(res => {
            
            this.SystemAdministrationServiceobj.getBranchesByComapnyId(this.authService.getUserCompanyId()).subscribe((res : Branch[]) => {
                this.branches = res;
            });
        }); 
    }

    async updatingBranch(value) {
        this.updatingModel = {...value.oldData, ...value.newData};
        this.updatingModel.companyId = this.authService.getUserCompanyId();
    }

    async updateBranch() {
        await this.SystemAdministrationServiceobj.updateBranch(this.updatingModel).subscribe(r => {
            console.log(r);
            
        });
    }

     deletBranch(value) {
          this.SystemAdministrationServiceobj.deletBranch(value.key).subscribe(res => {
            console.log(res);
            
        });
    }
}
