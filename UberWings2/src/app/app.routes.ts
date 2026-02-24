import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EarningsComponent } from './pages/rides/earnings/earnings.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {  path: '', component: HomeComponent     },

    {  path: 'earnings', component: EarningsComponent        },

    {  path: 'dashboard', component: DashboardComponent     }

];