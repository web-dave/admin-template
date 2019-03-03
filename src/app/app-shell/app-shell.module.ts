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
import { CommentsComponent } from './comments/comments.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ContentTableComponent } from './content-table/content-table.component';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    AppShellComponent,
    PageHeaderComponent,
    DashboardComponent,
    PannelListComponent,
    PannelComponent,
    TableComponent,
    CommentsComponent,
    ProgressBarComponent,
    ContainerComponent,
    ListComponent,
    UserListItemComponent,
    PageFooterComponent,
    ContentTableComponent
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    AppShellComponent,
    PageHeaderComponent,
    PannelListComponent,
    PannelComponent,
    TableComponent,
    CommentsComponent,
    ProgressBarComponent,
    ContainerComponent,
    ListComponent,
    UserListItemComponent,
    PageFooterComponent,
    ContentTableComponent
  ],
  imports: [CommonModule, AppShellRoutingModule]
})
export class AppShellModule {}
