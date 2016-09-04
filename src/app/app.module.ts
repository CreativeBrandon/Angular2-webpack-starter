import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule, SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { routing, routedPages, appRoutingProviders } from './app.routing';
import { AuthGuard, AuthService } from './shared';

const declarables = [
    AppComponent,
    routedPages,
    SebmGoogleMap,
    SebmGoogleMapMarker,
    SebmGoogleMapInfoWindow,
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
        AgmCoreModule.forRoot()
    ],
    providers: [providers],
    declarations: [declarables],
    exports: [declarables],
    bootstrap: [AppComponent]
})
export class AppModule { }
