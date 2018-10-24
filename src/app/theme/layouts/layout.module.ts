import { NgModule } from '@angular/core';
import { DefaultComponent } from '../pages/default/default.component';
import { SubheaderTypeSearchComponent } from '../pages/subheader--type-search/subheader--type-search.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../../_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';
import { AsideLeftMinimizeDefaultEnabledComponent } from '../pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component';



@NgModule({
    declarations: [
        DefaultComponent,
        SubheaderTypeSearchComponent,
        AsideNavComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        AsideLeftMinimizeDefaultEnabledComponent
    ],
    exports: [
        DefaultComponent,
        SubheaderTypeSearchComponent,
        AsideNavComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
    ],
    imports: [
        CommonModule,
        RouterModule,

    ]
})
export class LayoutModule {
}
