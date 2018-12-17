import { Component, OnInit } from '@angular/core';
import form from 'devextreme/ui/form';
import { SystemAdministrationService } from '../../core';

@Component({
    selector: 'app-module',
    templateUrl: './module.component.html',
    styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

    constructor(public SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {

        await this.SystemAdministrationServiceobj.getModules();
        let x = this.SystemAdministrationServiceobj.modules;



    }

    async addModule(value) {
        await this.SystemAdministrationServiceobj.addModule(value.key);
    }

    async updateModule(value) {
        await this.SystemAdministrationServiceobj.updateModule(value.key);

    }

    async deleteModule(value) {

        await this.SystemAdministrationServiceobj.deletModule(value.key.moduleId);
    }
}
