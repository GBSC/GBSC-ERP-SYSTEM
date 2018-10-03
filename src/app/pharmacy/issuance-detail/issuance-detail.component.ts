import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';

@Component({
  selector: 'app-issuance-detail',
  templateUrl: './issuance-detail.component.html',
  styleUrls: ['./issuance-detail.component.scss']
})
export class IssuanceDetailComponent implements OnInit {

  private PackType: any;
  private SalesOrder: any;
  private InventoryItem: any;
  private Inventory: any;
  private SalesOrderItem: any;

  constructor(private PharmacyService: PharmacyService) {

  }

  async ngOnInit() {
      this.PackType = await this.PharmacyService.GetPackTypes();
      this.SalesOrder = await this.PharmacyService.GetSalesOrders();
      this.InventoryItem = await this.PharmacyService.GetInventoryItems();
      this.Inventory = await this.PharmacyService.GetInventories();
      this.SalesOrderItem = await this.PharmacyService.GetSalesOrderItems();
  }

  async AddSalesOrderItem(value) {
      return await this.PharmacyService.AddSalesOrderItem(value);
  }

  async UpdateSalesOrderItem(value) {
      return await this.PharmacyService.UpdateSalesOrderItem(value.Key);
  }

  async DeleteSalesOrderItem(value) {
      return await this.PharmacyService.DeleteSalesOrderItem(value.Key.SalesOrderItemId);
  }
}
