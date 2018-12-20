import { Component, OnInit, ViewChild } from '@angular/core';
import { eTrackerUserService, AuthService, InventorysystemService } from '../../../app/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-salesusers',
    templateUrl: './salesusers.component.html',
    styleUrls: ['./salesusers.component.scss']
})
export class SalesusersComponent implements OnInit {

    public companyId: any;
    public users: any;
<<<<<<< HEAD

    constructor(private authService: AuthService, private userService: eTrackerUserService) {

        this.companyId = this.authService.getUserCompanyId();
=======
    public distributors: any;
    public territories: any;
    public sections: any;

    public distributorId: any;
    public territoryId: any;
    public sectionId: any;

    public userId: any;

    public error: boolean;
    public errorText: string;

    public assignForm: FormGroup;

    @ViewChild("distributorcb") distributorcb: DxSelectBoxComponent;
    @ViewChild("territorycb") territorycb: DxSelectBoxComponent;
    @ViewChild("sectioncb") sectioncb: DxSelectBoxComponent;
    

    constructor(private authService: AuthService,
        private userService: eTrackerUserService,
        private inventoryService: InventorysystemService,
        private formBuilder: FormBuilder) {

        this.companyId = this.authService.getUserCompanyId();

        this.assignForm = this.formBuilder.group({
            'TerritoryId': ['', Validators.required],
            'DistributorId': ['', Validators.required],
            'SectionId': ['', Validators.required]
        })
>>>>>>> 8c748bc0883f9459b5861e747274fc93ae4afedb
    }

    ngOnInit() {

<<<<<<< HEAD
=======
        this.inventoryService.GetDistributorsByCompany(this.companyId).subscribe(dist => {

            this.distributors = dist;
        });


>>>>>>> 8c748bc0883f9459b5861e747274fc93ae4afedb
        this.userService.getSalesUsersByCompany(this.companyId).subscribe(u => {

            this.users = u;
        });

        this.distributorcb.onValueChanged.subscribe(res => this.onDistributorChange(res.component.option("value")));

        this.territorycb.onValueChanged.subscribe(res => this.onTerritoryChange(res.component.option("value")));

        this.sectioncb.onValueChanged.subscribe(res => this.onSectionChange(res.component.option("value")));

    }

    onUserSelect(userId) {

        this.userId = userId;

        this.userService.getUser(this.userId).subscribe(resp => {

            this.distributorId = resp.distributorId;
            this.territoryId = resp.territoryId;
            this.sectionId = resp.sectionId;

        });
    }

    onDistributorChange(id) {

        this.inventoryService.getTerritoriesByDistributorId(id).subscribe(territories => {
            this.territories = territories;
            this.distributorId = id;

        });
    }

    onTerritoryChange(id) {

        this.inventoryService.getSectionsByTerritory(id).subscribe(sections => {
            this.sections = sections;
            this.territoryId = id;
        });
    }

    onSectionChange(id) {
        this.sectionId = id;
    }

    assignUserSection(value) {

        console.log(value);

        // this.userService.assignUserSection(this.userId, this.distributorId, this.sectionId).subscribe(resp => {
        //     console.log(resp);
        // });
    }

}
