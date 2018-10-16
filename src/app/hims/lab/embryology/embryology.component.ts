import { Component, OnInit, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

@Component({
  selector: 'app-embryology',
  templateUrl: './embryology.component.html',
  styleUrls: ['./embryology.component.scss']
})
export class EmbryologyComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) {

  }

  ngOnInit() {

  }
  ngAfterViewInit() {
      this._script.loadScripts('app-embryology',
          ['assets/demo/default/custom/components/forms/widgets/select2.js']);

  }

}
