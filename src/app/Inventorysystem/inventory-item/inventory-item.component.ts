import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../Inventorysystem/service/Inventorysystem.service';



@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  public unit : any;
  public category : any;
  public inventryitem : any;
  

  constructor(public InventorysystemServiceobj : InventorysystemService )
   
  {

   }

  async ngOnInit() {
    await this.InventorysystemServiceobj.GetUnits();
    this.unit = this.InventorysystemServiceobj.units;
    console.log(this.unit);

    await this.InventorysystemServiceobj.Getcategories();
    this.category = this.InventorysystemServiceobj.catogories;
    console.log(this.category);

    await this.InventorysystemServiceobj.GetInventoryitems();
    this.inventryitem = this.InventorysystemServiceobj.inventoryitems;
    console.log(this.inventryitem);
    
  }


  async AddInventryItem(value)
  {
    console.log(value.Key);
    await this.InventorysystemServiceobj.AddInventoryitem(value.key);     
  }

  async UpdateInventoryItem(value)
  {

    console.log(value.key);
    await this.InventorysystemServiceobj.UpdateInventoryitem(value.key)
  }

  async DeleteInventoryItem(value)
  {
    console.log(value.key.InventoryItemId);
    await this.InventorysystemServiceobj.DeleteInventoryitem(value.key.inventoryItemId);
  }

}
