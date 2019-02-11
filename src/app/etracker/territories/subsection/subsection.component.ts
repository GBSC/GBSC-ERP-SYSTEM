import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../../app/core';

@Component({
    selector: 'app-subsection',
    templateUrl: './subsection.component.html',
    styleUrls: ['./subsection.component.scss']
})
export class SubsectionComponent implements OnInit {

    public subsections: any;
    public sections: any;
    public companyId: any;

    constructor(public inventoryService: InventorysystemService, public authService: AuthService) {
        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.inventoryService.getSubsectionsByCompany(this.companyId).subscribe(resp => {
            this.subsections = resp;
        });

        this.inventoryService.getSectionsByCompany(this.companyId).subscribe(s => {
            this.sections = s;
        })
    }

    addSubsection(value) {

        value.data.companyId = this.companyId;
        this.inventoryService.AddSubsection(value.data).subscribe(resp => {
            console.log(resp);
        })

    }

    updateSubsection(value) {
        value.companyId = this.companyId;
        let model = { ...value.oldData, ...value.newData };
        this.inventoryService.UpdateSubsection(model).subscribe(resp => {
            console.log(resp);
        });
    }

    deleteSubsection(value) {

        this.inventoryService.DeleteSubsection(value.key).subscribe(resp=>console.log('Subsection Deleted'));
    }

}

