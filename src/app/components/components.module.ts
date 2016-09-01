import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
    HeaderComponent
} from './';

const declarables = [
    HeaderComponent
]
//export const providers = []; //component service providers

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
})
export class ComponentsModule{}
