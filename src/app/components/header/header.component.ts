import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header-component',
    directives: [ROUTER_DIRECTIVES],
    template: require('./header.component.html'),
    styles: [ require('./header.component.scss') ]    
})
export class HeaderComponent{}
