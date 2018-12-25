import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { InventorysystemService, AuthService } from '../../../../app/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
@Component({
    selector: 'app-distributers',
    templateUrl: './distributers.component.html',
    styleUrls: ['./distributers.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DistributersComponent implements OnInit {

    public distributors: any;
    public distributor: any;
    public territories: any;
    public companyId: any;
    public distributorTerritories: string[];
    public distributorForm: FormGroup;
    public value: string[] = [];
    public options: Select2Options;
    public territoryOptions: Array<Select2OptionData>;

    public isEdit: boolean = false;

    constructor(
        public formBuilder: FormBuilder,
        public inventoryService: InventorysystemService,
        public authService: AuthService) {

        this.companyId = this.authService.getUserCompanyId();


        this.distributorForm = this.formBuilder.group({
            'Name': [],
            'ContactNumber': [],
            'Address': [],
            'Email': []
        })
    }

    ngOnInit() {

        this.options = {
            multiple: true
        }

        this.inventoryService.getTerritoriesByCompany(this.companyId).subscribe(t => {
            this.territories = t;

            this.territoryOptions = [];
            for (let territory of this.territories) {
                this.territoryOptions.push({ id: territory.territoryId.toString(), text: territory.name })
            }

        });

        this.inventoryService.GetDistributorsByCompany(this.companyId).subscribe(d => {
            this.distributors = d;
        })
    }

    changed(data: { value: string[] }) {
        this.value = data.value;
    }

    onEdit(id) {

        this.isEdit = true;

        this.inventoryService.GetDistributor(id).subscribe(dist => {

            this.distributor = dist;

            this.patchValues(this.distributor);

            this.value = [];

            for (let territory of this.distributor.territories) {
                this.value.push(territory.territoryId.toString());
            }

        })
    }

    addDistributor(value) {

        value.companyId = this.companyId;
        var dist = { Distributor: value, TerritoryIds: this.value };
        this.inventoryService.AddDistributorWithTerritories(dist).subscribe(resp => {
            console.log(resp);
        });
    }

    updateDistributor(value) {

        value.companyId = this.companyId;
        value.distributorId = this.distributor.distributorId;
        var dist = { Distributor: value, TerritoryIds: this.value };
        this.inventoryService.UpdateDistributorWithTerritories(dist).subscribe(resp => {
            console.log(resp);
        });

    }

    patchValues(distributor) {
        this.distributorForm.patchValue({
            'Name': distributor.name,
            'Email': distributor.name,
            'ContactNumber': distributor.contactNumber,
            'Address': distributor.address
        })
    }


}
