import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { RootComponent }    from './root/root.component';
import { HomeComponent }    from '../pharmacy/home/home.component';
import { SupplierComponent }    from '../pharmacy/supplier/supplier.component';
import { PurchseInvoiceComponent }    from '../pharmacy/purchse-invoice/purchse-invoice.component';
import { PurchaseOrderComponent }    from '../pharmacy/purchase-order/purchase-order.component';
import { SalesReturnComponent }    from '../pharmacy/sales-return/sales-return.component';
import { IssuanceComponent  }    from '../pharmacy/issuance/issuance.component';


export const routing: ModuleWithProviders = RouterModule.forChild([

 

  {
    path: 'pharmacy',
    component: RootComponent,

    children: [    

     { path: 'home',  component: HomeComponent },
     { path: 'supplier',  component: SupplierComponent },
     { path: 'purchseInvoice',  component: PurchseInvoiceComponent },
     { path: 'purchseOrder',  component: PurchaseOrderComponent },
     { path: 'salesReturn',  component: SalesReturnComponent },
     { path: 'issuance',  component: IssuanceComponent }
    ]       
  }  

]);