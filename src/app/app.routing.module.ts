import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    HomepageContainer,
    NoContentComponent
} from './features';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomepageContainer,
    },
    {
        path: 'home',
        component: HomepageContainer,
    },
    { path: '**',    component: NoContentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingMoudle { }

export const routedComponents = [NoContentComponent]