import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppShellModule } from 'src/app/app-shell/app-shell.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AppShellModule]
})
export class DashboardModule {}
