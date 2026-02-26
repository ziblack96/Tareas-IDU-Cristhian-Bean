import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Earnings } from './pages/rides/earnings/earnings';
import { Home } from './pages/home/home';
import { Sidebar } from './components/shared/sidebar/sidebar';

export const routes: Routes = [

    {  path: '', component: Home},

    {  path: 'earnings', component: Earnings},

    {  path: 'dashboard', component: Dashboard},

    {  path:  'sidebar', component: Sidebar}

];