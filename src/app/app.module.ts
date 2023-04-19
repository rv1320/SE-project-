import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { HomeComponent } from './home/home.component';
import { WriteComponent } from './write/write.component';
import { SearchComponent } from './search/search.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PaytaxesComponent } from './paytaxes/paytaxes.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    HomeComponent,
    WriteComponent,
    SearchComponent,
    LoginpageComponent,
    PaytaxesComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
