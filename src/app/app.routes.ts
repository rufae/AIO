import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'busqueda',
    loadComponent: () => import('./busqueda/busqueda.page').then( m => m.BusquedaPage)
  },
    {
        path: 'infoactividades',
        loadComponent: () => import('./infoactividades/infoactividades.component').then( m => m.InfoactividadesComponent)
    },


];
