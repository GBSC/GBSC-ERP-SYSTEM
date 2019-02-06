import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { InventoryItem } from '../../../core/Models/Inventory/Setup/InventoryItem';
@Component({
  selector: 'app-delivery-man',
  templateUrl: './delivery-man.component.html',
  styleUrls: ['./delivery-man.component.css']
})
export class DeliveryManComponent implements OnInit {

  public InventoryItems: any;
  public CompanyId: number;
  public UpdatedModel: any;

  constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) { }

  ngOnInit() {
    this.CompanyId = this.AuthService.getUserCompanyId();
    this.InventoryService.GetInventoryItemsByCompany(this.CompanyId).subscribe((res: any) => {
      this.InventoryItems = res;
  });
  }

  AddInventoryItem(value) {
    value.data.companyId = this.CompanyId;
    console.log(value.data);
    this.InventoryService.AddInventoryItem(value.data).subscribe(res => {
        // console.log(res);
        this.InventoryService.GetInventoryItemsByCompany(this.CompanyId).subscribe((res: InventoryItem) => {
            this.InventoryItems = res;
            console.log(this.InventoryItems);
        });
    });
    
}

UpdateModel(value) {
    value.companyId = this.CompanyId;
    this.UpdatedModel = { ...value.oldData, ...value.newData };
}

UpdateInventoryItem() {
    return this.InventoryService.UpdateInventoryItem(this.UpdatedModel).subscribe();
}

DeleteInventoryItem(value) {
    return this.InventoryService.DeleteInventoryItem(value.key).subscribe();
}

}
