import {Routes} from '@angular/router';


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
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./forgot-password/forgot-password.component').then( m => m.ForgotPasswordComponent)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then( m => m.SettingsComponent)
    },
    {
        path: 'perfil',
        loadComponent: () => import('./perfil/perfil.component').then( m => m.PerfilComponent)
    },
    {
        path: 'crearitinerario',
        loadComponent: () => import('./crearitinerario/crearitinerario.component').then( m => m.CrearItinerarioComponent)
    },
    {
        path: 'inicio',
        loadComponent: () => import('./inicio/inicio.component').then( m => m.InicioComponent)
    },
    {
        path: 'participantes',
        loadComponent: () => import('./participantes/participantes.component').then( m => m.ParticipantesComponent)
    },
    {
        path: 'proponer-actividad',
        loadComponent: () => import('./proponer-actividad/proponer-actividad.component').then( m => m.ProponerActividadComponent)
    },
    {
        path: 'actividadporgrupo',
        loadComponent: () => import('./actividadporgrupo/actividadporgrupo.component').then( m => m.ActividadporgrupoComponent)
    },
    {
        path: 'informacion/:grupoId',
        loadComponent: () => import('./informacion/informacion.component').then( m => m.InformacionComponent)
    }


];


