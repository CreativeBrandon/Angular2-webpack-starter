import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from '../../components';
import { AuthService } from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'login-container',
    directives: [ ROUTER_DIRECTIVES, HeaderComponent ],
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
