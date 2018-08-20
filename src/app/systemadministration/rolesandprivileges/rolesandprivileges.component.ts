

import { NgModule, Component, Pipe, PipeTransform, enableProdMode , OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeViewModule, DxListModule, DxTemplateModule } from 'devextreme-angular';

import { Product, SystemAdministrationService } from '../service/systemadministration.services';


// @Pipe({ name: 'title' })
// export class TitlePipe implements PipeTransform {
//     transform(value: any): string {
//         return value.text;
//     }
// }



@Component({
  selector: 'app-rolesandprivileges',
  templateUrl: './rolesandprivileges.component.html',
  styleUrls: ['./rolesandprivileges.component.css'],
  providers: [SystemAdministrationService]
})

export class RolesandprivilegesComponent implements OnInit {

  products: Product[];
  checkedItems: Product[] = [];

  public comp: any;

  constructor(public serviceobj: SystemAdministrationService ) {
      this.products = serviceobj.getProducts();
  }
  processProduct(product) {
    let itemIndex = -1;

    this.checkedItems.forEach((item, index) => {
        if (item.id === product.id) {
            itemIndex = index;
            return false;
        }
    });
    if (product.selected && itemIndex === -1) {
        this.checkedItems.push(product);
    } else if (!product.selected) {
        this.checkedItems.splice(itemIndex, 1);
    }
}
  ngOnInit() {
 


  }

}
