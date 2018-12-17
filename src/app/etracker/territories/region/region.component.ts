import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../../app/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  public regions : any;
  public companyId : any;

  constructor(public inventoryService : InventorysystemService, public authService : AuthService) {
    this.companyId = this.authService.getUserCompanyId();
   }

  ngOnInit() {

    this.inventoryService.getRegionsByCompany(this.companyId).subscribe(reg=> this.regions = reg);
  }

  addRegions(region){

  }

  updateRegion(region)
  {

  }

  deleteRegion(region)
  {

  }

}
