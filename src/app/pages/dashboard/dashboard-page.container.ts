import { Component } from '@angular/core';
import { HeaderComponent } from '../../components';
import { AuthService } from '../../shared';

@Component({
    selector: 'dashboard-page',
    providers: [ AuthService ],
    styles: [ require('./dashboard-page.container.scss')],
    template: `
        <main>
            <header-component></header-component>
            <h1>Dashboard - Admin Section</h1>
            <button (click)="onLogout()">Sign Out</button>
        </main>`
})
export class DashboardPageContainer{

    constructor(private authService: AuthService){}

    private onLogout(){
        this.authService.logout();
    }
}
