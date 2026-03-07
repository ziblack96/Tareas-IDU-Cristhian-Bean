import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Earnings } from './pages/rides/earnings/earnings';
import { Home } from './pages/home/home';
import { Sidebar } from './components/shared/sidebar/sidebar';
import { Drivers } from './pages/drivers/drivers';
import { LoginPage } from './pages/login-page/login-page';
import { DriversCards } from './pages/drivers-cards/drivers-cards';

export const routes: Routes = [

    {  path: '', component: Home},

    {  path: 'earnings', component: Earnings},

    {  path: 'dashboard', component: Dashboard},

    {  path:  'sidebar', component: Sidebar},

    {  path: 'drivers', component: Drivers},
    
    {  path: 'login-page', component: LoginPage},

    {  path: 'DriversCards', component: DriversCards},

];