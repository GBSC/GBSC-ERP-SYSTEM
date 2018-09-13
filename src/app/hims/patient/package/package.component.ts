import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../sharedservices/patient.service'

@Component({
    selector: 'app-package',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

    public packg: any;

    constructor(private PatientServiceobj: PatientService) { }

    async ngOnInit() {

        await this.PatientServiceobj.getPackage();
        this.packg = this.PatientServiceobj.package;
        console.log(this.packg)
    }

    async addpackage(value) {

        let x = await this.PatientServiceobj.addPackage(value.key);
        console.log(x);
    }

    async updatepackage(value) {
        let x = await this.PatientServiceobj.updatePackage(value.key);
        console.log(x);
    }

    async deletepackage(value) {

        let x = await this.PatientServiceobj.daletePackage(value.key.packageId);
        console.log(x);

    }

}
