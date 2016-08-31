import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { AuthGuard, AuthService } from './shared';
import { DashboardContainer, HomeContainer, LoginContainer } from './containers';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
    ],
    declarations: [
        AppComponent,
        DashboardContainer,
        HomeContainer,
        LoginContainer
    ],
    providers: [
        appRoutingProviders,
        AuthGuard,
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
