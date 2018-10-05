import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-goodsreceipt',
    templateUrl: './goodsreceipt.component.html',
    styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {

    private GRN: any;
    private GoodReceiptNoteForm : FormGroup;
    public Suppliers : any;
    public InventItems : any;

    constructor(private PharmacyService: PharmacyService , private formBuilder : FormBuilder) {

        this.GoodReceiptNoteForm = this.formBuilder.group({

            'GRN' : [''],
            'GRNDate':[''],
            'SupplierId':[''],
            'Type':[''],
            'Manual':[''],
            'ManualDate':[''],
            'PoNo':[''],
            'Post':[''],
            'InventoryItems':['']

        });

    }

    async ngOnInit() {
        this.GRN = await this.PharmacyService.GetGRN();

        this.PharmacyService.GetSuppliers().subscribe(result =>{
            this.Suppliers = result 
            console.log(this.Suppliers);
        })

        this.PharmacyService.GetInventoryItems().subscribe(result =>{
            this.InventItems = result 
            console.log(this.InventItems);
        });


    }

    async AddGRN(value) {
        await this.PharmacyService.AddGRN(value);
    }

    async UpdateGRN(value) {
        await this.PharmacyService.UpdateGRN(value.Key);
    }

    async DeleteGRN(value) {
        await this.PharmacyService.DeleteGRN(value.Key.GRNId);
    }

   
    public vae : any;
    onsubmit(value)
    {
        this.vae = value;
        console.log(value);
    }
    public rr = [];
    public rrrr = [];
    AddIssuance(value)
    {
        let x  =  value.data;
        this.rr.push(x);
  
        console.log(this.rr)
    }

    addfinal()
    {
        this.GoodReceiptNoteForm.value.InventoryItems = this.rr;
        console.log(this.GoodReceiptNoteForm.value);
    }

}
