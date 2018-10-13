import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';

@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

    public mod: any;
    public features: any;
    
    constructor(private SystemAdministrationServicebj: SystemAdministrationService) { }

    async  ngOnInit() {

        this.mod = await this.SystemAdministrationServicebj.getModules();
 
        this.features = await this.SystemAdministrationServicebj.getFeatures();

    }

    async addFeature(value) { 
        await this.SystemAdministrationServicebj.addFeature(value.key)
    }

    async updateFeature(value) { 
        await this.SystemAdministrationServicebj.updateFeature(value.key)
    }


    async deletFeature(value) { 
        await this.SystemAdministrationServicebj.deletFeature(value.key.featureId)
    }
}
