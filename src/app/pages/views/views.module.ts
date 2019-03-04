import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { AppShellModule } from 'src/app/app-shell/app-shell.module';

@NgModule({
  declarations: [ViewsComponent],
  imports: [CommonModule, AppShellModule, FormsModule],
  exports: [ViewsComponent]
})
export class ViewsModule {}
