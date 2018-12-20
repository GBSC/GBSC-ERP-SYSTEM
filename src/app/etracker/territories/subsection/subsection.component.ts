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

    }

    updateSubsection(value) {

    }

    deleteSubsection(value) {

    }

}

