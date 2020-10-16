import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListVehiclesComponent} from './dashboard/list-vehicles/list-vehicles.component';
import {AddVehicleComponent} from './dashboard/add-vehicle/add-vehicle.component';
import {ViewVehicleComponent} from './dashboard/view-vehicle/view-vehicle.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},

  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', component: ListVehiclesComponent, pathMatch: 'full'},
      {path: 'new', component: AddVehicleComponent, pathMatch: 'full'},
      {path: 'view/:id', component: ViewVehicleComponent, pathMatch: 'full'},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
