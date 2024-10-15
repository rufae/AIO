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
        path: 'chats',
        loadComponent: () => import('./chats/chats.component').then( m => m.ChatsComponent)
    },
    {
        path: 'chatunico',
        loadComponent: () => import('./chatunico/chatunico.component').then( m => m.ChatUnicoComponent)
    },
    {
        path: 'paginaguardados',
        loadComponent: () => import('./paginaguardados/paginaguardados.component').then( m => m.PaginaguardadosComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then( m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then( m => m.RegisterComponent)
    },
    {
        path: 'newgroup',
        loadComponent: () => import('./newgroup/newgroup.component').then( m => m.NewgroupComponent)
    }

];
