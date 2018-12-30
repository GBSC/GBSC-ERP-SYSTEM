import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../../core/Services/HIMS/medicine.service';

@Component({
    selector: 'app-medicine',
    templateUrl: './medicine.component.html',
    styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

    public medicines: any;

    constructor(public medicineService: MedicineService) { }

    ngOnInit() {

        this.medicineService.getMedicines().subscribe(resp => this.medicines = resp);

    }

    addMedicine(value) {
        this.medicineService.addMedicine(value.data).subscribe(resp => console.log(resp));
    }

    updateMedicine(value) {
        this.medicineService.updateMedicine(value.key).subscribe(resp => console.log(resp));
    }



}
