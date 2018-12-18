import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
@Component({
  selector: 'app-distributers',
  templateUrl: './distributers.component.html',
  styleUrls: ['./distributers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributersComponent implements OnInit, AfterViewInit{
  

  constructor(public _script: ScriptLoaderService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._script.loadScripts('app-distributers',
        ['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}
