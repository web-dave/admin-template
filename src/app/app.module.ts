import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppShellModule } from "./app-shell/app-shell.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
