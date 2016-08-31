import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  //directives: [ ROUTER_DIRECTIVES ],
  //precompile: [ HomeContainer, DashboardContainer, LoginContainer ],
  template: `
        <router-outlet></router-outlet>`
})
export class AppComponent { }
