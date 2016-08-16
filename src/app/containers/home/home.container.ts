import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from '../../components';

@Component({
    moduleId: module.id,
    selector: 'home-container',
    directives: [ ROUTER_DIRECTIVES, HeaderComponent],
    styles: [ require('./home.container.scss')],
    template: `
        <main>
            <header-component></header-component>
            <h1>Angular 2 App with Webpack Starter kit</h1>
            <img src="../../public/images/angular.png">
        </main>`
})
export class HomeContainer{}
