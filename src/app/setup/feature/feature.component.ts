import { Component, OnInit } from '@angular/core';
import  {SetupService}  from '../../setup/service/setupservices';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

 public mod :any;
  constructor(private SetupServiceobj : SetupService)
   { }

async  ngOnInit() {

  await this.SetupServiceobj.getModules();
  this.mod = this.SetupServiceobj.modules;
  console.log(this.mod);
  



  await this.SetupServiceobj.getFeatures();
  let x =  this.SetupServiceobj.features;
  console.log(x);
  
  }

async addFeature(value)
{
  console.log(value);
  await this.SetupServiceobj.addFeature(value.key)
}

async updateFeature(value)
{
console.log(value.key);
await this.SetupServiceobj.updateFeature(value.key)
}


async deletFeature(value)
{
  console.log(value.key.featureId);
  
await this.SetupServiceobj.deletFeature(value.key.featureId)
}
}
