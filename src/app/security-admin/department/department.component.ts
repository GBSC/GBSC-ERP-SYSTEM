import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService, AuthService } from '../../core';
import { Department } from '../../core/Models/HRM/department';
import { Branch } from '../../core/Models/HRM/branch';
@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    public deprt: any;
    public branch: any;
    public updatingModel: any;

    constructor(public SystemAdministrationServiceobj: SystemAdministrationService, public authService : AuthService) { }

    async ngOnInit() {

        this.SystemAdministrationServiceobj.getDepartmentsByCompanyId(this.authService.getUserCompanyId()).subscribe((res : Department[]) => {
            this.deprt = res;
        });

        this.SystemAdministrationServiceobj.getBranchesByComapnyId(this.authService.getUserCompanyId()).subscribe((res : Branch[]) => {
            this.branch = res;
        });
    }


     addDepartment(value) {
        console.log(value);
        value.data.companyId = this.authService.getUserCompanyId();
         this.SystemAdministrationServiceobj.addDepartment(value.data);
        this.SystemAdministrationServiceobj.getDepartmentsByCompanyId(this.authService.getUserCompanyId()).subscribe((res : Department[]) => {
            this.deprt = res; 
            console.log(res);
            
        });
        console.log(value.data);
    }

    updatingDepartment(value){
        console.log(value.oldData);
        console.log(value.newData);

        this.updatingModel = {...value.oldData, ...value.newData};
        this.updatingModel.companyId = this.authService.getUserCompanyId(); 
    }

     updateDepartment() { 
        console.log(this.updatingModel);
        
         this.SystemAdministrationServiceobj.updateDepartment(this.updatingModel).subscribe(r => {
            console.log(r);
            
        });
    }
     deletDepartment(value) {
        console.log(value); 
           this.SystemAdministrationServiceobj.deletDepartment(value.key.departmentId).subscribe(rep => {
              console.log(rep); 
          });
    }

}
