import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppShellComponent } from './app-shell.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PannelListComponent } from './pannel-list/pannel-list.component';
import { PannelComponent } from './pannel/pannel.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    AppShellComponent,
    PageHeaderComponent,
    DashboardComponent,
    PannelListComponent,
    PannelComponent,
    TableComponent
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    AppShellComponent,
    PageHeaderComponent,
    PannelListComponent,
    PannelComponent,
    TableComponent
  ],
  imports: [CommonModule, AppShellRoutingModule]
})
export class AppShellModule {}
