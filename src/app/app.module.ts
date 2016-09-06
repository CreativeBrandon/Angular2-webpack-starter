import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { routing, routedPages, appRoutingProviders } from './app.routing';
import { AuthGuard, AuthService } from './shared';

const declarables = [
    AppComponent,
    routedPages,
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
