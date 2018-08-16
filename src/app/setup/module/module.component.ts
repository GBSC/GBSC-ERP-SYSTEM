import { Component, OnInit } from '@angular/core';

import {SetupService} from '../../setup/service/setupservices'
import form from 'devextreme/ui/form';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  constructor(public SetupServiceobj : SetupService) { }

  async ngOnInit() {

    await this.SetupServiceobj.getModules();
    let x = this.SetupServiceobj.modules;
    console.log(x);

 

  }

  async addModule(value)
  {
    console.log(value);
    await this.SetupServiceobj.addModule(value.key);
  }

  async updateModule(value)
  {
    console.log(value.key);
    await this.SetupServiceobj.updateModule(value.key);

  }

  async deleteModule(value)
  {
    console.log(value.key.moduleId);
    
await this.SetupServiceobj.deletModule(value.key.moduleId);
  }
}
