import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components';
import { AuthService } from '../../shared';

@Component({
    selector: 'login-container',
    providers: [AuthService],
    styles: [],
    template: `<main>
                    <header-component></header-component>
                    <h1>Login</h1>
                    <button (click)="onLogin()">Sign in</button>
            </main>`

})
export class LoginContainer {

    constructor(private authService: AuthService){}

    private onLogin(){
        this.authService.login();
    }
}
