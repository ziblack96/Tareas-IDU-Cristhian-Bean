import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Earnings } from './pages/rides/earnings/earnings';
import { Home } from './pages/home/home';
import { Sidebar } from './components/shared/sidebar/sidebar';
import { Drivers } from './pages/drivers/drivers';
import { LoginPage } from './pages/login-page/login-page';
import { DriversCards } from './pages/drivers-cards/drivers-cards';
import { Login } from './pages/autho/login/login';
import { Edit } from './pages/profile/edit/edit';

export const routes: Routes = [

  //Dashboard Pagina #1
  {
    path: 'Dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },

  //Sidebar Global Pagina #2
  {
    path: 'Sidebar',
    loadComponent: () => import('./components/shared/sidebar/sidebar').then((m) => m.Sidebar),
  },

  //Listado de Conductores Pagina #3
  {
    path: 'Drivers',
    loadComponent: () => import('./pages/drivers/drivers').then((m) => m.Drivers),
  },

  //Listado de Conductores Pagina #4
  {
    path: 'Drivercard',
    loadComponent: () => import('./pages/drivers-cards/drivers-cards').then((m) => m.DriversCards),
  },

  //Listado de Conductores Pagina #5
  { 
    path: 'Edit', 
    loadComponent: () => import('./pages/profile/edit/edit').then((m) => m.Edit) 
  },

  {
    path: 'earnings',
    loadComponent: () => import('./pages/rides/earnings/earnings').then((m) => m.Earnings),
  },

  {
    path: 'login-page',
    loadComponent: () => import('./pages/login-page/login-page').then((m) => m.LoginPage),
  },

  

  { path: 'login', loadComponent: () => import('./pages/autho/login/login').then((m) => m.Login) },

  { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
