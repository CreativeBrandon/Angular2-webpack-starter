import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared';

@Component({
    selector: 'login-page',
    providers: [AuthService],
    styles: [],
    template: `<main>
                    <header-component></header-component>
                    <h1>Login</h1>
                    <button (click)="onLogin()">Sign in</button>
            </main>`

})
export class LoginPageContainer {

    constructor(private authService: AuthService){}

    private onLogin(){
        this.authService.login();
    }
}
