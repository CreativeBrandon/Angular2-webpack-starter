import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    DashboardContainer,
    HomeContainer,
    LoginContainer
 } from './containers';

 import { AuthGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomeContainer
    },
    {
        path: 'dashboard',
        canActivate: [ AuthGuard ],
        component: DashboardContainer,
    },
    {
        path: 'login',
        component: LoginContainer
    },
    //{path: '**', component: PageNotFoundContainer}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
