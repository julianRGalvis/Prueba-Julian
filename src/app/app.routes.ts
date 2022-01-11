import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";




export const APP_ROUTES: Routes = [

    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'navbar', component: NavbarComponent},


  
    {path: "", pathMatch:'full', redirectTo:'login'},
    {path: '**', pathMatch:'full', redirectTo:'login'}
  ];