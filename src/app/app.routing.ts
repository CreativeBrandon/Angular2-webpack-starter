import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    DashboardPageContainer,
    HomePageContainer,
    LoginPageContainer,
    NotFoundPageContainer,
} from './pages';

 import { AuthGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageContainer
    },
    {
        path: 'dashboard',
        canActivate: [ AuthGuard ],
        component: DashboardPageContainer,
    },
    {
        path: 'login',
        component: LoginPageContainer
    },
    {path: '**', component: NotFoundPageContainer}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

export const routedPages = routes.filter(r => r.component != undefined).map(r => r.component);
