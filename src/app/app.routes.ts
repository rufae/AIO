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
    {
        path: 'infodetallada',
        loadComponent: () => import('./infodetallada/infodetallada.component').then( m => m.InfodetalladaComponent)
    },
    {
        path: 'chats',
        loadComponent: () => import('./chats/chats.component').then( m => m.ChatsComponent)
    },
    {
        path: 'chatunico',
        loadComponent: () => import('./chatunico/chatunico.component').then( m => m.ChatUnicoComponent)
    }


];
