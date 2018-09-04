

import { NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeViewModule, DxListModule, DxTemplateModule } from 'devextreme-angular';

import { Product, SystemAdministrationService } from '../service/systemadministration.services';


@Pipe({ name: 'title' })
export class TitlePipe implements PipeTransform {
    transform(value: any): string {
        return value.text;
    }
}



@Component({
    selector: 'app-rolesandprivileges',
    templateUrl: './rolesandprivileges.component.html',
    styleUrls: ['./rolesandprivileges.component.css'],
    providers: [SystemAdministrationService]
})

export class RolesandprivilegesComponent implements OnInit {

    public showPopup: boolean = false;
    public systemAdmin: any;

    createNewRole() {
        this.showPopup = true;
        console.log(this.showPopup);
    }

    getSelectedModules(e) {
        console.log(e);
    }

    private modules: any = [];
    private role: any;
    private currentFeature: any;
    private selectedPermissions: any = [];
    private typeOfPermissions: any = ['Read', 'Write', 'Insert', 'Delete'];
    private moduleColums: any = [];
    private popup: boolean = false;

    ngOnInit() {
        this.systemAdmin.getPermissions();
        this.systemAdmin.getData();
        this.modules = this.systemAdmin.modules;
        this.role = {
            Name: '',
            RoleModules: [],
            RoleFeatures: [],
            permissions: []

        }
 
    }


    addThis(e, what, item, type) {
        let ifAlready = this.checkIfAreadySelected(this.role[what], item, type);
        if (e.target.checked && !ifAlready) {
            this.role[what].push({ [type]: item[type] });
        } else if (!e.target.checked) {
            this.role[what] = this.removeIfUnchecked(this.role[what], item, type);
        }
    }

    addPermissions(e, item) {
        let ifAlready = this.checkIfAreadySelected(this.currentFeature.permissions, { Attribute: item }, 'Attribute');
        if (e.target.checked && !ifAlready) {
            this.currentFeature.permissions.push({ Attribute: item, FeatureId: this.currentFeature.FeatureId, checked: true });
        } else if (!e.target.checked) {
            this.currentFeature.permissions = this.removeIfUnchecked(this.currentFeature.permissions, { Attribute: item }, 'Attribute');
        }
    }

    checkIfAreadySelected(array, item, type) {
        if (type === 'Attribute') {
            return array.find(i => i[type] === item[type] && i.FeatureId === this.currentFeature.FeatureId);
        } else {
            return array.find(i => i[type] === item[type]);
        }
    }

    removeIfUnchecked(array, item, type) {
        if (type === 'Attribute') {
            return array.filter(i => i[type] !== item[type] && i.FeatureId !== this.currentFeature.FeatureId);
        } else {
            return array.filter(i => i[type] !== item[type]);
        }
    }

    setCurrentFeature(feature) {
        this.popup = !this.popup;
        this.currentFeature = feature;
        if (this.currentFeature.permissions) {
            return;
        } else {
            this.currentFeature.permissions = [];
        }
    }

    savePermissions() {
        this.currentFeature.permissions.forEach((p, i) => {
            let pAlready = this.role.permissions.find(pr => {
                if (pr.FeatureId === p.FeatureId && pr.Attribute === p.Attribute) {
                    return pr;
                }
            });

            // console.log(pAlready);

            if (!pAlready) {
                this.role.permissions.push(p)
                // console.log(this.role);
            } else {
                // console.log(this.role);
            }
        });
        this.popup = false;
    }

    saveRole() {
        if (!this.role.Name) {
            alert('Role cannot be saved without a name');
        } else {
            console.log(this.role);
        }
        this.systemAdmin.saveNewRoleData(this.role);
        this.showPopup = false;
    }

    toggleRights(permission, i) {

        let p = this.currentFeature.permissions.find(per => per.Attribute === permission);
        if (p) {
            p.checked = true;
            return p;
        } else {
            return false
        }
    }



}
