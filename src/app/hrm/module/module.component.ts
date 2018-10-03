import { Component, OnInit } from '@angular/core';
import form from 'devextreme/ui/form';
import { SystemAdministrationService } from '../../core';

@Component({
    selector: 'app-module',
    templateUrl: './module.component.html',
    styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

    constructor(private SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {

        await this.SystemAdministrationServiceobj.getModules();
        let x = this.SystemAdministrationServiceobj.modules;
        console.log(x);



    }

    async addModule(value) {
        console.log(value);
        await this.SystemAdministrationServiceobj.addModule(value.key);
    }

    async updateModule(value) {
        console.log(value.key);
        await this.SystemAdministrationServiceobj.updateModule(value.key);

    }

    async deleteModule(value) {
        console.log(value.key.moduleId);

        await this.SystemAdministrationServiceobj.deletModule(value.key.moduleId);
    }
}
