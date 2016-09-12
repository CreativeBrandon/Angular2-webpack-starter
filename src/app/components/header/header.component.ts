import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    template: require('./header.component.html'),
    styles: [ require('./header.component.scss') ]
})
export class HeaderComponent implements OnInit{

    constructor(private _elRef: ElementRef){ }

    ngOnInit(){
        let el = $(this._elRef.nativeElement);
        console.log('JQuery element', el);
    }
}
