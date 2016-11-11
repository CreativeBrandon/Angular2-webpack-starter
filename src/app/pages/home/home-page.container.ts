import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components';

@Component({
    selector: 'home-page',
    styles: [ require('./home-page.container.scss')],
    template: `
        <main>
            <header-component></header-component>
            <h1>Angular 2 App with Webpack Starter kit</h1>
            <img src="../../public/images/angular.png">
        </main>`
})
export class HomePageContainer{

    constructor(){
        console.log('home Page Container');
    }
}
