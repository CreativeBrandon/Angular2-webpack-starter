import { provideRouter, RouterConfig } from '@angular/router';
import { HomeContainer, DashboardContainer } from './containers';

const routes: RouterConfig = [
    {path: '',              component: HomeContainer},
    {path: 'dashboard',     component: DashboardContainer},
    {path: 'users',         component: HomeContainer}
]

export const appRouterProviders = [
    provideRouter(routes)
]
