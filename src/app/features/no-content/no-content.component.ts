import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'no-content',
    template: `<main><h1>404: page not found</h1></main>`
})
export class NoContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}