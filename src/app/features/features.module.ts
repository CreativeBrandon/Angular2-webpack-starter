import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { 
    HomepageContainer,
    NoContentComponent
} from './';

const declarables = [
    HomepageContainer,
    NoContentComponent
]

const providers = []

@NgModule({
    imports: [],
    exports: [declarables],
    declarations: [declarables],
    providers: [],
})
export class FeaturesModule { }
