import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    template: require('./header.component.html'),
    styles: [ require('./header.component.scss') ]
})
export class HeaderComponent{}
