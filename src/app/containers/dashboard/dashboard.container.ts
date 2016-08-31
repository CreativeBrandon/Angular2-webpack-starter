import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from '../../components';
import { AuthService } from '../../shared';

@Component({
    selector: 'dashboard-container',
    directives: [ ROUTER_DIRECTIVES, HeaderComponent],
    providers: [ AuthService ],
    styles: [ require('./dashboard.container.scss')],
    template: `
        <main>
            <header-component></header-component>
            <h1>Dashboard - Admin Section</h1>
            <button (click)="onLogout()">Sign Out</button>
        </main>`
})
export class DashboardContainer{

    constructor(private authService: AuthService){}

    private onLogout(){
        this.authService.logout();
    }
}
