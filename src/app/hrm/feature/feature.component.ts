import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../services/systemadministration.services';

@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

    public mod: any;
    constructor(private SystemAdministrationServicebj: SystemAdministrationService) { }

    async  ngOnInit() {

        await this.SystemAdministrationServicebj.getModules();
        this.mod = this.SystemAdministrationServicebj.modules;
        console.log(this.mod);




        await this.SystemAdministrationServicebj.getFeatures();
        let x = this.SystemAdministrationServicebj.features;
        console.log(x);

    }

    async addFeature(value) {
        console.log(value);
        await this.SystemAdministrationServicebj.addFeature(value.key)
    }

    async updateFeature(value) {
        console.log(value.key);
        await this.SystemAdministrationServicebj.updateFeature(value.key)
    }


    async deletFeature(value) {
        console.log(value.key.featureId);

        await this.SystemAdministrationServicebj.deletFeature(value.key.featureId)
    }
}
