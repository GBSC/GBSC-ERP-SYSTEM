import { NgModule, Component, OnInit } from '@angular/core';
import { SystemAdministrationService, AuthService } from '../../core';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-rolesandprivileges',
    templateUrl: './rolesandprivileges.component.html',
    styleUrls: ['./rolesandprivileges.component.css'],
    providers: [SystemAdministrationService]
})

export class RolesandprivilegesComponent implements OnInit {

    public showPopup: boolean = false;
    public companyId: any;
    public editting: boolean = false;
    public requestSent: boolean = false;
    public modules: any = [];
    public roles: any = [];
    public role: any;
    public currentFeature: any;
    public selectedPermissions: any = [];
    public typeOfPermissions: any = ['Read', 'Write', 'Update', 'Delete'];
    public moduleColums: any = [];
    public popup: boolean = false;
    public mockRoles = [];

    constructor(public systemAdmin: SystemAdministrationService, public authService: AuthService, public toaster: ToastrService) {

        this.companyId = this.authService.getUserCompanyId();
        console.log(this.companyId);
    }

    ngOnInit() {

        this.fetchRoles();

        this.systemAdmin.getPermissions();
        this.systemAdmin.getModulesByCompanyId(this.companyId);
        this.modules = this.systemAdmin.modules;
        console.log(this.modules);

    }

    fetchRoles() {
        this.systemAdmin.getRolesByCompanyId(this.companyId).subscribe(resp => {
            console.log(resp);
            this.roles = resp;
        });
    }

    editRoleName(e) {
        this.role.roleName = e.target.value
        console.log(this.role);
    }

    createNewRole() {
        this.editting = false;
        this.requestSent = false;
        this.role = {
            roleName: '',
            companyId: '',
            roleModules: [],
            roleFeatures: [],
            rolePermissions: []

        }

        this.showPopup = true;

    }

    getSelectedModules(e) {
        console.log(e);
    }

    editRole(e) {
        this.editting = true;
        this.requestSent = false;
        console.log(e);
        this.role = e.key;
        console.log(this.role);
        this.showPopup = true;
    }

    changeModule(e, _module) {
        let mod = { moduleId: _module.moduleId };
        if (!this.moduleAlreadySelected(mod)) {
            this.role.roleModules.push(mod);
        } else {
            this.removeModule(mod);
        }
    }

    changeFeatures(e, feature) {
        let fet = { featureId: feature.featureId }
        if (!this.featuerAlreadySelected(fet)) {
            this.role.roleFeatures.push(fet);
        } else {
            this.removeFeature(fet);
        }
    }

    changePermissions(e, permission) {
        let perm = { permissionName: permission, featureId: this.currentFeature.featureId };
        if (!this.permissionAlreadySelected(perm)) {
            this.role.rolePermissions.push(perm);
        } else {
            this.removePermission(perm);
        }
    }

    removeModule(_module) {
        this.role.roleModules = this.role.roleModules.filter(m => m.moduleId !== _module.moduleId);
    }

    removeFeature(feature) {
        this.role.roleFeatures = this.role.roleFeatures.filter(f => f.featureId !== feature.featureId);
    }

    removePermission(permission) {
        let index;
        this.role.rolePermissions.find((p, i) => {
            if (p.permissionName === permission.permissionName && p.featureId === permission.featureId) {
                index = i;
                return p;
            }

        });

        this.role.rolePermissions.splice(index, 1);
        console.log(this.role);
    }


    moduleAlreadySelected(_module) {
        return this.role.roleModules.find(m => m.moduleId === _module.moduleId);
    }
    featuerAlreadySelected(feature) {
        return this.role.roleFeatures.find(f => f.featureId === feature.featureId);
    }

    permissionAlreadySelected(permission) {
        return this.role.rolePermissions.find(p => p.permissionName === permission.permissionName && p.featureId === permission.featureId);
    }

    setCurrentFeature(feature) {
        console.log(feature);
        this.popup = !this.popup;
        this.currentFeature = feature;
        if (this.currentFeature.permissions) {
            return;
        } else {
            this.currentFeature.permissions = [];
        }
    }

    savePermissions() {
        this.popup = false;
    }

    async saveRole() {
        if (this.roles.find(r => r.roleName === this.role.roleName) && !this.editting) {
            this.toaster.warning("Role with this name already exists");
            return;
        }
        this.requestSent = true;
        console.log('roles', this.roles);
        console.log('role', this.role);
        console.log('modules', this.modules);
        this.role.companyId = this.companyId;

        if (!this.role.roleName) {
            this.toaster.warning("Role cannot be saved without a name");
        } else {
            this.role.companyId = this.companyId;
            let response;
            let alert;
            if (this.editting) {
                console.log(this.role, 'update')
                response = await this.systemAdmin.updateRole(this.role);
                alert ='update'
            } else {
                console.log(this.role);
                response = await this.systemAdmin.saveNewRoleData(this.role);
                alert = 'create'
            }
            console.log(response);
            if (response) {
                if (alert === 'update') {
                    this.toaster.success("Role Updated Successfully");
                } else {
                    this.toaster.success("Role Created Successfully");
                }
                this.editting = false;
                this.fetchRoles();
                this.resetRoleValues();
            }
            else {
                this.toaster.error("Error Creating Role");
            }
            this.showPopup = false;
            this.editting = false;
            this.requestSent = false;
        }

    }

    resetRoleValues() {
        this.role = {
            roleName: '',
            companyId: '',
            roleModules: [],
            roleFeatures: [],
            rolePermissions: []

        }
    }

}
