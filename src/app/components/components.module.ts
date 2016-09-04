import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
    GoogleMapComponent,
    HeaderComponent,
} from './';

const declarables = [
    GoogleMapComponent,
    HeaderComponent,
]

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
})
export class ComponentsModule{}
