import { Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { UserComponent } from './componente/user/user.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';

export const routes: Routes = [
    {path: "", redirectTo:"home", pathMatch:"full"},
    {path: "home", component: HomeComponent},
    {path: "users", component: UserComponent},
    {path: "dashboard", component: DashboardComponent},
];
