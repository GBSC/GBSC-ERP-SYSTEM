import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-religion',
    templateUrl: './religion.component.html',
    styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {

    public religion: any;
    public modelUpdating: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    ngOnInit() {

    this.dataService.getReligions().subscribe(rp =>{
        this.religion = rp;
        });
    }


    addNewreligion(religon) {
         this.dataService.addReligion(religon.data).subscribe(rsp => {
             console.log(rsp); 
            this.dataService.getReligions().subscribe(rp =>{
                this.religion = rp;  });
        });
    }

    updatingreligion(value) {
        this.modelUpdating = { ...value.oldData, ...value.newData };
    }

    async updatereligion() {
        await this.dataService.updateReligion(this.modelUpdating);
    }

    async deletereligion(religon) {
        await this.dataService.DeleteReligion(religon.key);
    }

}