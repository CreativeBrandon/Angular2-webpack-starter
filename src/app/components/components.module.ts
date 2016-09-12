import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule, SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

import {
    GoogleMapComponent,
    HeaderComponent,
} from './';

const declarables = [
    GoogleMapComponent,
    HeaderComponent,
]

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, AgmCoreModule.forRoot({apiKey: 'AIzaSyA9gi1FxSuPVjsVMbJiTYs95GFzPFKnFaE'}) ],
    exports: [declarables],
    declarations: [declarables],
})
export class ComponentsModule{}
