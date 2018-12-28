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
     constructor(public InventoryService: InventorysystemService) {[m
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
     public SalesPerson: any;[m
     public ModeOfPayment: any;[m
     public Customer: any;[m
[31m-    public FilteredCustomers : any;[m
[32m+[m[32m    public FilteredCustomers: any;[m
     public Tax: any;[m
     //public SalesOrder: any;[m
[31m-    public CustomerWarehouses : any;[m
[31m-    public FilteredWarehouses : any[m
[31m-    public CustomerTypes : any;[m
[31m-    public Distributors : any;[m
[31m-    public FilteredDistributor : Distributor;[m
[31m-    public DispAddress : string = "";[m
[31m-    public SalesOrderForm : FormGroup;[m
[32m+[m[32m    public CustomerWarehouses: any;[m
[32m+[m[32m    public FilteredWarehouses: any[m
[32m+[m[32m    public CustomerTypes: any;[m
[32m+[m[32m    public Distributors: any;[m
[32m+[m[32m    public FilteredDistributor: Distributor;[m
[32m+[m[32m    public DispAddress: string = "";[m
[32m+[m[32m    public SalesOrderForm: FormGroup;[m
 [m
[31m-    constructor(public InventoryService: InventorysystemService, public FormBuilder : FormBuilder) {[m
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