import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SuperadminserviceService } from '../superadminservice.service';
import { Company } from '../../setup/model/company';

@Component({
  selector: 'app-setupcompany',
  templateUrl: './setupcompany.component.html',
  styleUrls: ['./setupcompany.component.scss']
})
export class SetupcompanyComponent implements OnInit {

private companyForm : FormGroup;

private companyId : number;

  constructor(private formBuilder : FormBuilder, private superAdminService : SuperadminserviceService) {

    this.companyForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'numberOfEmployees': ['', Validators.required]
    })


   }

  ngOnInit() {
  }

  async onAddCompany(value)
  {
   let response : any  = await this.superAdminService.addCompany(value);
   
   this.companyId = response.companyID;
  }

  async onAddModule(value)
  {
    var module = {Name : value, CompanyId : this.companyId, Code : "000", ModuleId : 0};

    let response : any = await this.superAdminService.addModule(module);
  }

}
