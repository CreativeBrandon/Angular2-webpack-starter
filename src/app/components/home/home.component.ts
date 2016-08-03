import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  directives: [ ROUTER_DIRECTIVES ],
  styles: [ require('./home.component.scss') ],
  template: `
        <div>Home Component</div>`
})
export class HomeComponent { }
