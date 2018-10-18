[1mdiff --git a/src/app/Inventorysystem/Inventorysystem.module.ts b/src/app/Inventorysystem/Inventorysystem.module.ts[m
[1mindex bd6993a..3ea2c12 100644[m
[1m--- a/src/app/Inventorysystem/Inventorysystem.module.ts[m
[1m+++ b/src/app/Inventorysystem/Inventorysystem.module.ts[m
[36m@@ -68,7 +68,7 @@[m [mimport { LowerCaseUrlSerializer } from '../LowerCaseUrlSerializer';[m
         DevExtremeModule,[m
         DxDataGridModule,[m
         routing[m
[31m-        ],[m
[32m+[m[32m    ],[m
     declarations: [[m
 [m
         RootComponent,[m
[36m@@ -124,6 +124,6 @@[m [mimport { LowerCaseUrlSerializer } from '../LowerCaseUrlSerializer';[m
         UnitComponent,[m
         DeliveryNoteComponent[m
     ],[m
[31m-    providers:[{ provide: UrlSerializer, useClass: LowerCaseUrlSerializer }][m
[32m+[m[32m    providers: [{ provide: UrlSerializer, useClass: LowerCaseUrlSerializer }][m
 })[m
 export class InventorysystemModule { }[m
[1mdiff --git a/src/app/Inventorysystem/Sales/delivery-note/delivery-note.component.ts b/src/app/Inventorysystem/Sales/delivery-note/delivery-note.component.ts[m
[1mindex f77dd61..66f3fd8 100644[m
[1m--- a/src/app/Inventorysystem/Sales/delivery-note/delivery-note.component.ts[m
[1m+++ b/src/app/Inventorysystem/Sales/delivery-note/delivery-note.component.ts[m
[36m@@ -17,7 +17,7 @@[m [mexport class DeliveryNoteComponent implements OnInit {[m
     constructor(private InventoryService: InventorysystemService) {[m
 [m
     }[m
[31m-   [m
[32m+[m
     async ngOnInit() {[m
         this.DeliveryOrder = await this.InventoryService.GetDeliveryOrders();[m
         this.Transport = await this.InventoryService.GetTransports();[m
[1mdiff --git a/src/app/Inventorysystem/Sales/sales-order/sales-order.component.ts b/src/app/Inventorysystem/Sales/sales-order/sales-order.component.ts[m
[1mindex 453ffad..e0dec22 100644[m
[1m--- a/src/app/Inventorysystem/Sales/sales-order/sales-order.component.ts[m
[1m+++ b/src/app/Inventorysystem/Sales/sales-order/sales-order.component.ts[m
[36m@@ -15,53 +15,53 @@[m [mexport class SalesOrderComponent implements OnInit {[m
     private SalesPerson: any;[m
     private ModeOfPayment: any;[m
     private Customer: any;[m
[31m-    private FilteredCustomers : any;[m
[32m+[m[32m    private FilteredCustomers: any;[m
     private Tax: any;[m
     //private SalesOrder: any;[m
[31m-    private CustomerWarehouses : any;[m
[31m-    private FilteredWarehouses : any[m
[31m-    private CustomerTypes : any;[m
[31m-    private Distributors : any;[m
[31m-    private FilteredDistributor : Distributor;[m
[31m-    private DispAddress : string = "";[m
[31m-    private SalesOrderForm : FormGroup;[m
[32m+[m[32m    private CustomerWarehouses: any;[m
[32m+[m[32m    private FilteredWarehouses: any[m
[32m+[m[32m    private CustomerTypes: any;[m
[32m+[m[32m    private Distributors: any;[m
[32m+[m[32m    private FilteredDistributor: Distributor;[m
[32m+[m[32m    private DispAddress: string = "";[m
[32m+[m[32m    private SalesOrderForm: FormGroup;[m
 [m
[31m-    constructor(private InventoryService: InventorysystemService, private FormBuilder : FormBuilder) {[m
[31m-        [m
[31m-        this.SalesOrderForm = this.FormBuilder.group( {[m
[31m-            salesOrderId : [''],[m
[31m-            salesOrderCode : [''],[m
[31m-            issueDate : [''],[m
[31m-            isIssued : [''],[m
[31m-            approvedDate : [''],[m
[31m-            isApproved : [''],[m
[31m-            processedDate : [''],[m
[31m-            isProcessed : [''],[m
[31m-            remarks : [''],[m
[31m-            slipNumber : [''],[m
[31m-            status : [''],[m
[31m-            contactPerson : [''],[m
[31m-            contactPersonNumber : [''],[m
[31m-            againstLotNumber : [''],[m
[31m-            deliveryDate : [''],[m
[31m-            totalQuantity : [''],[m
[31m-            extendedAmount : [''],[m
[31m-            discountedAmount : [''],[m
[31m-        