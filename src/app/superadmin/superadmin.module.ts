import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupcompanyComponent } from './setupcompany/setupcompany.component';
import { routing } from './superadmin.routing';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    RootComponent, 
    SetupcompanyComponent,         
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class SuperadminModule { }
