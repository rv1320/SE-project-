import {  NgModule } from '@angular/core';
import {  Routes,RouterModule, } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PaytaxesComponent } from './paytaxes/paytaxes.component';

const routes: Routes = [
  {
    path:'about-us',component:AboutUsComponent
  },

  {
    path:'home',component:HomeComponent
  },

  {
    path:'loginpage',component:LoginpageComponent
  },

  {
    path:'paytaxes',component:PaytaxesComponent
  },
  {
    path:'',component:LoginpageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
