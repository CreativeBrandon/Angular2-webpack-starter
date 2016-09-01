import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components';
import { AuthService } from '../../shared';

@Component({
    selector: 'dashboard-container',
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

    constructor(private authService: AuthService, private router: Router){}

    private onLogout(){
        this.authService.logout();
    }
}
