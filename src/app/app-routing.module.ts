import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Home1Component } from './details/home1/home1.component';
import { QuarterComponent } from './quarter/quarter.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { NavbarComponent } from './navbar/navbar.component';
import { FileuComponent } from './components/fileu/fileu.component';
import { SearchComponent } from './components/search/search.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {path:'login',component:LoginComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {path : 'navbar/home', component : HomeComponent},
  {path : 'navbar/vehicle', component : VehicleComponent},
  {path : 'navbar/quarter', component : QuarterComponent},
  {path : 'navbar/home1',component : Home1Component},
  {path : 'navbar', component : NavbarComponent},
  {path : "navbar/fileu" , component : FileuComponent},
  {path : "navbar/search", component : SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

