import { NgModule } from '@angular/core';
import { DefaultComponent } from '../pages/default/default.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { SubheaderTypeSearchComponent } from '../pages/subheader--type-search/subheader--type-search.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../../_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';
import { AsideLeftMinimizeDefaultEnabledComponent } from '../pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component';



@NgModule({
    declarations: [
        DefaultComponent,
        HeaderNavComponent,
        SubheaderTypeSearchComponent,
        AsideNavComponent,
        FooterComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        AsideLeftMinimizeDefaultEnabledComponent
    ],
    exports: [
        DefaultComponent,
        HeaderNavComponent,
        SubheaderTypeSearchComponent,
        AsideNavComponent,
        FooterComponent,
        HrefPreventDefaultDirective,
    ],
    imports: [
        CommonModule,
        RouterModule,

    ]
})
export class LayoutModule {
}
