import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';
import { HomeContainer, DashboardContainer, LoginContainer } from './containers';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [],
  precompile: [ HomeContainer, DashboardContainer, LoginContainer ],
  template: `
        <router-outlet></router-outlet>`
})
export class AppComponent { }
