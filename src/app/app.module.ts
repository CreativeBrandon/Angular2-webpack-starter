import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module.ts';
import { routing, appRoutingProviders } from './app.routing';
import { AuthGuard, AuthService } from './shared';
import { DashboardContainer, HomeContainer, LoginContainer } from './containers';

const declarables = [
    AppComponent,
    DashboardContainer,
    HomeContainer,
    LoginContainer
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ComponentsModule,
    ],
    providers: [
        appRoutingProviders,
        AuthGuard,
        AuthService,
    ],
    declarations: [declarables],
    exports: [declarables],
    bootstrap: [AppComponent]
})
export class AppModule { }
