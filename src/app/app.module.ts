import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { routing, appRoutingProviders } from './app.routing';
import { AuthGuard, AuthService } from './shared';

import {
    DashboardPageContainer,
    HomePageContainer,
    LoginPageContainer,
    NotFoundPageContainer,
} from './pages';

const declarables = [
    AppComponent,
    DashboardPageContainer,
    HomePageContainer,
    LoginPageContainer,
    NotFoundPageContainer,
]

const providers = [
    appRoutingProviders,
    AuthGuard,
    AuthService,
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,

        ComponentsModule,
    ],
    providers: [providers],
    declarations: [declarables],
    exports: [declarables],
    bootstrap: [AppComponent]
})
export class AppModule { }
