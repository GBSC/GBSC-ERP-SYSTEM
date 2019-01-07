import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
    public invoiceForm: any;
    constructor(public fb: FormBuilder, ) { }

    ngOnInit() {
        this.invoiceForm = this.fb.group({
            itemRows: this.fb.array([this.initItemRows()]) // here
        });
    }
    initItemRows() {
        return this.fb.group({
            // list all your form controls here, which belongs to your form array
            itemname: [''],
            itemdscp: ['']
        });
    }

    addNewRow(e, i) {
        // control refers to your formarray
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        if ((e.keyCode === 9 || e.keyCode === 13)
            && e.target.value) {
            // add new formgroup
            control.push(this.initItemRows());
            console.log(this.invoiceForm.value);

        }
    }

    deleteRow(index: number) {
        // control refers to your formarray
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        // remove the chosen row
        control.removeAt(index);
    }
}
