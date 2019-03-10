import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { AppShellModule } from 'src/app/app-shell/app-shell.module';

@NgModule({
  declarations: [ProgressComponent],
  imports: [CommonModule, AppShellModule],
  exports: [ProgressComponent]
})
export class ProgressModule {}
