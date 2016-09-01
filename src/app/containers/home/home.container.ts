import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components';

@Component({
    selector: 'home-container',
    styles: [ require('./home.container.scss')],
    template: `
        <main>
            <header-component></header-component>
            <h1>Angular 2 App with Webpack Starter kit</h1>
            <img src="../../public/images/angular.png">
        </main>`
})
export class HomeContainer{}
