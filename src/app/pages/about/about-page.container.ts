import { Component } from '@angular/core';

@Component({
    selector: 'about-page',
    styles: [ require('./about-page.container.scss')],
    template: `
        <main>
            <header-component></header-component>
            <h1>About Page</h1>
            <google-maps-component></google-maps-component>
        </main>`
})
export class AboutPageContainer{}
