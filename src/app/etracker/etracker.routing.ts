import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { AuthGuardService } from '../core';
import { LocatorComponent } from './locator/locator.component';

const routes: Routes = [
  {
    path: '', component: RootComponent, 
    canActivate: [AuthGuardService],
    children: [
      { path: 'locator', component: LocatorComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ETrackerRoutingModule { }
