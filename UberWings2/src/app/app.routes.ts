import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Earnings } from './pages/rides/earnings/earnings';
import { Home } from './pages/home/home';

export const routes: Routes = [

    {  path: '', component: Home                },

    {  path: 'earnings', component: Earnings        },

    {  path: 'dashboard', component: Dashboard      }

];