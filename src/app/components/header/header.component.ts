import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})
export class HeaderComponent implements OnInit{

    private header:HTMLElement;

    constructor(private _elRef: ElementRef){ 
        this.header = this._elRef.nativeElement;
        console.log('HeaderComponent', this.header);
    }

    ngOnInit(){    }
}
