import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './includes/nav/nav.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HomeComponent } from './home/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import { LoginComponent } from './login/login.component';
import {FormsModule, NgForm} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddVehicleComponent } from './dashboard/add-vehicle/add-vehicle.component';
import { ListVehiclesComponent } from './dashboard/list-vehicles/list-vehicles.component';
import { ViewVehicleComponent } from './dashboard/view-vehicle/view-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,

    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddVehicleComponent,
    ListVehiclesComponent,
    ViewVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
