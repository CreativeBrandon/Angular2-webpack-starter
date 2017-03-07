
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingMoudle } from './app.routing.module';
import { FeaturesModule } from './features';

const declarables = [
    AppComponent
]

const providers = [
    Title
]

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,

        AppRoutingMoudle,
        FeaturesModule
    ],
    declarations: [declarables],
    providers: [],
    bootstrap: [declarables],
})
export class AppModule { }
