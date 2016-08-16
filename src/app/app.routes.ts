import { provideRouter, RouterConfig } from '@angular/router';
import { HomeContainer, DashboardContainer, LoginContainer } from './containers';
import { AuthGuard } from './shared';

const routes: RouterConfig = [
    {path: '',              component: HomeContainer},
    {path: 'dashboard',     component: DashboardContainer, canActivate: [ AuthGuard ]},
    {path: 'login',         component: LoginContainer}
]

export const appRouterProviders = [
    provideRouter(routes)
]
