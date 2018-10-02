import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';
<<<<<<< HEAD
=======
import { CustomerWarehouse } from '../../models/Setup/CustomerWarehouse';
import { CustomerType } from '../../models/Setup/CustomerType';
import { Customer } from '../../models/Setup/Customer';
import { Distributor } from '../../models/Setup/Distributor';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
>>>>>>> d6ac958d896e8ef818ac88e42f5a4d3ae70abb56

@Component({
    selector: 'app-sales-order',
    templateUrl: './sales-order.component.html',
    styleUrls: ['./sales-order.component.scss']
})
export class SalesOrderComponent implements OnInit {
<<<<<<< HEAD
    private User: any;
    private DeliveryOrder: any;
=======
    //private User: any;
    //private DeliveryOrder: any;
>>>>>>> d6ac958d896e8ef818ac88e42f5a4d3ae70abb56
    private SalesIndent: any;
    private SalesPerson: any;
    private ModeOfPayment: any;
    private Customer: any;
<<<<<<< HEAD
    private Tax: any;
    private SalesOrder: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.DeliveryOrder = await this.InventoryService.GetDeliveryOrders();
=======
    private FilteredCustomers : any;
    private Tax: any;
    //private SalesOrder: any;
    private CustomerWarehouses : any;
    private FilteredWarehouses : any
    private CustomerTypes : any;
    private Distributors : Distributor[] =[];
    private FilteredDistributor : Distributor;
    private DispAddress : string = "";
    private SalesOrderForm : FormGroup;

    constructor(private InventoryService: InventorysystemService, private FormBuilder : FormBuilder) {
        
        this.SalesOrderForm = this.FormBuilder.group( {
            salesOrderId : [''],
            salesOrderCode : [''],
            issueDate : [''],
            isIssued : [''],
            approvedDate : [''],
            isApproved : [''],
            processedDate : [''],
            isProcessed : [''],
            remarks : [''],
            slipNumber : [''],
            status : [''],
            contactPerson : [''],
            contactPersonNumber : [''],
            againstLotNumber : [''],
            deliveryDate : [''],
            totalQuantity : [''],
            extendedAmount : [''],
            discountedAmount : [''],
            shipped : [''],
            discountAmount : [''],
            salesTaxAmount : [''],
            orderAmount : [''],
            specialDiscountPercentage : [''],
            specialDiscountAmount : [''],
            extraDiscountPercentage : [''],
            extraDiscountAmount : [''],
            userId : [''],
            deliveryOrderId : [''],
            salesIndentId : [''],
            salesPersonId : [''],
            modeOfPaymentId : [''],
            customerId : [''],
            taxId : ['']
        });
    }

    async ngOnInit() {
        //this.DeliveryOrder = await this.InventoryService.GetDeliveryOrders();
>>>>>>> d6ac958d896e8ef818ac88e42f5a4d3ae70abb56
        this.SalesIndent = await this.InventoryService.GetSalesIndents();
        this.SalesPerson = await this.InventoryService.GetSalesPeople();
        this.ModeOfPayment = await this.InventoryService.GetModeOfPayments();
        this.Customer = await this.InventoryService.GetCustomers();
<<<<<<< HEAD
        this.Tax = await this.InventoryService.GetTaxes();
        this.SalesOrder = await this.InventoryService.GetSalesOrders();
=======
        this.CustomerWarehouses = await this.InventoryService.GetCustomerWarehouses();
        this.CustomerTypes = await this.InventoryService.GetCustomerTypes();
        this.Tax = await this.InventoryService.GetTaxes();
        this.Distributors = await this.InventoryService.GetDistributors();
        //this.SalesOrder = await this.InventoryService.GetSalesOrders();
>>>>>>> d6ac958d896e8ef818ac88e42f5a4d3ae70abb56
    }

    async AddSalesOrder(value) {
        return await this.InventoryService.AddSalesOrder(value);
    }

    async UpdateSalesOrder(value) {
        return await this.InventoryService.UpdateSalesOrder(value.Key);
    }

    async DeleteSalesOrder(value) {
        return await this.InventoryService.DeleteSalesOrder(value.Key.SalesOrderId);
    }

<<<<<<< HEAD
=======
    getSelectedCustomerDetails(value) {
        this.FilteredCustomers = this.Customer.filter(a => a.customerTypeId === value.selectedItem.customerTypeId);
        this.FilteredWarehouses = this.CustomerWarehouses.filter(a => a.customerTypeId === value.selectedItem.customerTypeId);
    }

    getSelectedDistributors(value) {
        this.FilteredDistributor = this.Distributors.find(a =>  a.distributorId === value.selectedItem.distributorId);
        this.DispAddress = this.FilteredDistributor.address.toString();
    }

    SubmitSalesOrderForm(value) {
        console.log(value);
    }

>>>>>>> d6ac958d896e8ef818ac88e42f5a4d3ae70abb56
}
