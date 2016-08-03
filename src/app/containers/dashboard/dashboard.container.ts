import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from '../../components/header';

@Component({
    moduleId: module.id,
    selector: 'dashboard-container',
    directives: [ ROUTER_DIRECTIVES, HeaderComponent],
    styles: [ require('./dashboard.container.scss')],
    template: `
        <main>
            <header-component></header-component>
            <h1>Dashboard Page</h1>
        </main>`
})
export class DashboardContainer{}
