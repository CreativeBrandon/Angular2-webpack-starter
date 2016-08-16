import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, ExceptionHandler, provide } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { AuthGuard, AuthService } from './app/shared';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent,
    [
        HTTP_PROVIDERS,
        appRouterProviders,
        AuthGuard,
        AuthService
    ])
    .catch(error => console.error(error));
